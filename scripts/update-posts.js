const fs = require('node:fs/promises');
const path = require('node:path');

const NOTE_URL = 'https://note.com/tenho_ai';
const NOTE_RSS = 'https://note.com/tenho_ai/rss';
const CARD_LIMIT = 3;
const ARTS = ['orbit', 'circuit', 'grid'];
const OUTPUT_PATH = path.join(process.cwd(), 'posts.json');

function decodeEntities(value = '') {
  const named = {
    amp: '&',
    lt: '<',
    gt: '>',
    quot: '"',
    apos: "'",
    nbsp: ' ',
  };

  return value.replace(/&(#x?[0-9a-fA-F]+|[a-zA-Z]+);/g, (_, entity) => {
    if (entity[0] === '#') {
      const isHex = entity[1]?.toLowerCase() === 'x';
      const codePoint = Number.parseInt(entity.slice(isHex ? 2 : 1), isHex ? 16 : 10);
      return Number.isFinite(codePoint) ? String.fromCodePoint(codePoint) : _;
    }

    return named[entity] || _;
  });
}

function unwrapCdata(value = '') {
  return value.replace(/^<!\[CDATA\[([\s\S]*)\]\]>$/u, '$1');
}

function cleanText(value = '') {
  return decodeEntities(unwrapCdata(value).trim());
}

function tagPattern(tagName) {
  return tagName.replace(':', '\\s*:\\s*');
}

function getTagContent(xml, tagName) {
  const pattern = tagPattern(tagName);
  const match = xml.match(new RegExp(`<${pattern}\\b[^>]*>([\\s\\S]*?)<\\/${pattern}>`, 'i'));
  return match ? cleanText(match[1]) : '';
}

function getTagAttribute(xml, tagName, attrName) {
  const pattern = tagPattern(tagName);
  const tag = xml.match(new RegExp(`<${pattern}\\b[^>]*>`, 'i'))?.[0];
  if (!tag) return '';

  const attr = tag.match(new RegExp(`\\s${attrName}\\s*=\\s*(['"])(.*?)\\1`, 'i'));
  return attr ? cleanText(attr[2]) : '';
}

function getItemDateValue(itemXml) {
  return getTagContent(itemXml, 'pubDate')
    || getTagContent(itemXml, 'dc:date')
    || getTagContent(itemXml, 'updated')
    || getTagContent(itemXml, 'published');
}

function formatDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';

  return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}`;
}

function normalizeUrl(url) {
  if (!url) return null;

  try {
    return new URL(decodeEntities(url.trim()), NOTE_URL).toString();
  } catch (_) {
    return null;
  }
}

function parseAttrs(tag) {
  const attrs = {};
  const attrPattern = /([\w:-]+)\s*=\s*(['"])(.*?)\2/g;
  let match;

  while ((match = attrPattern.exec(tag))) {
    attrs[match[1].toLowerCase()] = cleanText(match[3]);
  }

  return attrs;
}

function findMetaImage(html, names) {
  const metas = html.match(/<meta\b[^>]*>/gi) || [];

  for (const meta of metas) {
    const attrs = parseAttrs(meta);
    const key = (attrs.property || attrs.name || '').toLowerCase();
    if (names.includes(key) && attrs.content) {
      return normalizeUrl(attrs.content);
    }
  }

  return null;
}

function findFirstImg(html) {
  const img = html.match(/<img\b[^>]*>/i)?.[0];
  if (!img) return null;

  const attrs = parseAttrs(img);
  const src = attrs.src
    || attrs['data-src']
    || attrs['data-original']
    || attrs['data-lazy-src']
    || attrs.srcset?.split(',')[0]?.trim().split(/\s+/)[0]
    || attrs['data-srcset']?.split(',')[0]?.trim().split(/\s+/)[0];

  return normalizeUrl(src);
}

function extractImage(itemXml) {
  const html = getTagContent(itemXml, 'content:encoded')
    || getTagContent(itemXml, 'description');

  if (html) {
    const ogImage = findMetaImage(html, ['og:image']);
    if (ogImage) return ogImage;

    const twitterImage = findMetaImage(html, ['twitter:image']);
    if (twitterImage) return twitterImage;

    const firstImg = findFirstImg(html);
    if (firstImg) return firstImg;
  }

  return normalizeUrl(getTagAttribute(itemXml, 'media:thumbnail', 'url'))
    || normalizeUrl(getTagAttribute(itemXml, 'media:content', 'url'))
    || normalizeUrl(getTagAttribute(itemXml, 'enclosure', 'url'));
}

function parseItems(xml) {
  const itemMatches = xml.match(/<item\b[\s\S]*?<\/item>/gi) || [];
  if (!itemMatches.length) {
    throw new Error('RSS XML does not contain any item elements.');
  }

  return itemMatches
    .map((itemXml, originalIndex) => {
      const dateValue = getItemDateValue(itemXml);
      const timestamp = Date.parse(dateValue);

      return {
        originalIndex,
        timestamp: Number.isNaN(timestamp) ? 0 : timestamp,
        date: formatDate(dateValue),
        category: 'NOTE',
        title: getTagContent(itemXml, 'title') || 'TENHO note',
        link: normalizeUrl(getTagContent(itemXml, 'link')) || NOTE_URL,
        image: extractImage(itemXml),
      };
    })
    .sort((a, b) => (b.timestamp - a.timestamp) || (a.originalIndex - b.originalIndex))
    .slice(0, CARD_LIMIT)
    .map(({ originalIndex, timestamp, ...item }, index) => ({
      ...item,
      art: ARTS[index],
    }));
}

async function main() {
  const response = await fetch(NOTE_RSS, {
    headers: {
      accept: 'application/rss+xml, application/xml;q=0.9, text/xml;q=0.8',
      'user-agent': 'TENHO posts updater (+https://taka03101111.github.io/TENHO_NEW_HP/)',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch note RSS: ${response.status}`);
  }

  const xml = await response.text();
  if (!xml.trim()) {
    throw new Error('Fetched note RSS is empty.');
  }

  const posts = parseItems(xml);
  if (!posts.length) {
    throw new Error('No posts were generated from note RSS.');
  }

  await fs.writeFile(OUTPUT_PATH, `${JSON.stringify(posts, null, 2)}\n`, 'utf8');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
