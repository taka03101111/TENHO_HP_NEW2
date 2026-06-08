// TENHO HP - MORE

const NOTE_URL = 'https://note.com/tenho_ai';
const CARD_LIMIT = 3;

const LOADING_ITEMS = Array.from({ length: CARD_LIMIT }, (_, index) => ({
  date: '',
  category: 'NOTE',
  title: '読み込み中',
  link: NOTE_URL,
  image: null,
  art: ['orbit', 'circuit', 'grid'][index],
  loading: true,
}));

async function fetchLatestNotes() {
  const res = await fetch('./posts.json', { cache: 'no-store' });

  if (!res.ok) {
    throw new Error(`Failed to load posts.json: ${res.status}`);
  }

  const posts = await res.json();

  if (!Array.isArray(posts)) {
    throw new Error('posts.json must be an array.');
  }

  return posts.slice(0, CARD_LIMIT).map((post, index) => ({
    date: post.date || '',
    category: post.category || 'NOTE',
    title: post.title || 'TENHO note',
    link: post.link || NOTE_URL,
    image: post.image || null,
    art: post.art || ['orbit', 'circuit', 'grid'][index],
  }));
}

function ThumbArt({ kind, image }) {
  if (image) {
    return (
      <div
        className="more-thumb-img"
        style={{ backgroundImage: `url("${image}")` }}
      />
    );
  }

  if (kind === 'orbit') {
    return (
      <div className="more-thumb-art">
        <svg viewBox="-50 -50 100 100" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
          <defs>
            <radialGradient id="g-orbit" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#BEDCFF" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#BEDCFF" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="0" cy="0" r="34" fill="url(#g-orbit)" />
          <ellipse cx="0" cy="0" rx="38" ry="22" fill="none" stroke="#0E0E0E" strokeWidth="0.4" />
          <ellipse cx="0" cy="0" rx="28" ry="16" fill="none" stroke="#0E0E0E" strokeWidth="0.3" transform="rotate(28)" />
          <ellipse cx="0" cy="0" rx="44" ry="26" fill="none" stroke="#76736B" strokeWidth="0.25" strokeDasharray="1.2 2" />
          <circle cx="0" cy="0" r="4" fill="#0E0E0E" />
          <circle cx="32" cy="-8" r="1.6" fill="#0E0E0E" />
          <circle cx="-26" cy="12" r="1.2" fill="#6FA8DC" />
        </svg>
      </div>
    );
  }

  if (kind === 'circuit') {
    return (
      <div className="more-thumb-art">
        <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
          <g fill="none" stroke="#0E0E0E" strokeWidth="0.4">
            <path d="M10 20 L30 20 L30 40 L60 40 L60 20 L90 20" />
            <path d="M10 50 L25 50 L25 70 L55 70 L55 50 L75 50 L75 30 L90 30" />
            <path d="M10 80 L40 80 L40 60 L80 60 L80 80 L90 80" />
          </g>
          <g fill="#0E0E0E">
            <circle cx="30" cy="20" r="1.8" />
            <circle cx="60" cy="40" r="1.8" />
            <circle cx="25" cy="70" r="1.8" />
            <circle cx="75" cy="30" r="1.8" />
            <circle cx="40" cy="80" r="1.8" />
            <circle cx="80" cy="60" r="1.8" />
          </g>
          <g fill="#6FA8DC">
            <circle cx="90" cy="20" r="1.6" />
            <circle cx="90" cy="30" r="1.6" />
            <circle cx="90" cy="80" r="1.6" />
          </g>
          <rect x="48" y="46" width="16" height="10" fill="none" stroke="#0E0E0E" strokeWidth="0.5" rx="0.5" />
        </svg>
      </div>
    );
  }

  return (
    <div className="more-thumb-art">
      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <defs>
          <pattern id="pg" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M10 0 L0 0 L0 10" fill="none" stroke="#D8D3C8" strokeWidth="0.3" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#pg)" />
        <rect x="20" y="20" width="20" height="20" fill="#0E0E0E" opacity="0.85" />
        <rect x="42" y="20" width="14" height="14" fill="none" stroke="#0E0E0E" strokeWidth="0.4" />
        <rect x="42" y="36" width="14" height="14" fill="#BEDCFF" opacity="0.7" />
        <rect x="58" y="20" width="22" height="6" fill="none" stroke="#0E0E0E" strokeWidth="0.4" />
        <rect x="58" y="28" width="22" height="22" fill="none" stroke="#76736B" strokeWidth="0.3" />
        <rect x="20" y="42" width="20" height="6" fill="none" stroke="#0E0E0E" strokeWidth="0.4" />
        <rect x="20" y="50" width="36" height="20" fill="none" stroke="#0E0E0E" strokeWidth="0.4" />
        <rect x="58" y="52" width="22" height="18" fill="#0E0E0E" />
        <rect x="20" y="72" width="60" height="8" fill="none" stroke="#76736B" strokeWidth="0.3" />
      </svg>
    </div>
  );
}

function MoreCard({ item, index }) {
  return (
    <a
      href={item.link || NOTE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="more-card reveal"
      data-delay={index + 1}
      aria-busy={item.loading ? 'true' : undefined}
    >
      <div className="more-thumb">
        <ThumbArt kind={item.art} image={item.image} />
      </div>
      <div className="more-body">
        <div className="more-meta">
          {item.date ? <span>{item.date}</span> : null}
          {item.date ? <span>/</span> : null}
          <span>{item.category || 'NOTE'}</span>
        </div>
        <div className="more-title">{item.title}</div>
        <div className="more-tag">READ <span>-&gt;</span></div>
      </div>
    </a>
  );
}

function More() {
  const [items, setItems] = React.useState(LOADING_ITEMS);
  const [failed, setFailed] = React.useState(false);

  React.useEffect(() => {
    let mounted = true;

    fetchLatestNotes()
      .then((posts) => {
        if (mounted && posts.length) {
          setItems(posts);
          setFailed(false);
        }
      })
      .catch(() => {
        if (mounted) {
          setItems([]);
          setFailed(true);
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section id="more" data-screen-label="07 MORE">
      <div className="shell">
        <div className="section-index">07 / 09 - MORE</div>

        <div className="section-head">
          <div className="head-left">
            <span className="eyebrow reveal">RECENT NOTES</span>
            <div className="head-en reveal" data-delay="1">
              Case
            </div>
          </div>
          <div className="head-jp is-serif reveal" data-delay="2">
            実践事例や最新情報を、<br />
            <span className="em">発信</span>しています。
          </div>
        </div>

        {items.length ? (
          <div className="more-grid">
            {items.map((item, index) => (
              <MoreCard key={`${item.link || item.title}-${index}`} item={item} index={index} />
            ))}
          </div>
        ) : (
          <div className="more-cta reveal in" data-delay="1">
            <a href={NOTE_URL} target="_blank" rel="noopener noreferrer">
              {failed ? 'noteで最新情報を見る' : '読み込み中'} <span>-&gt;</span>
            </a>
          </div>
        )}

        <div className="more-cta reveal" data-delay="4">
          <a href={NOTE_URL} target="_blank" rel="noopener noreferrer">
            さらに事例を見る <span>-&gt;</span>
          </a>
        </div>
      </div>
    </section>
  );
}

window.More = More;
