// TENHO HP — WHAT (white background; full-width pillars, each service is a
// horizontal row: text on one side, a clean product UI mockup on the other.
// 生成AI内製化支援 is text-only.)

const WHAT_ICONS = {
  internalize: (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="20" cy="13" r="6"/>
      <path d="M8 33c0-6 5.4-10 12-10s12 4 12 10"/>
    </svg>
  ),
  cowork: (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="14" cy="14" r="5"/>
      <circle cx="27" cy="16" r="4"/>
      <path d="M5 32c0-5 4-8.5 9-8.5s9 3.5 9 8.5"/>
      <path d="M24.5 23.5c4 0 7.5 3 7.5 8"/>
    </svg>
  ),
  synapse: (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="20" cy="20" r="3.2"/>
      <circle cx="9" cy="11" r="2.4"/>
      <circle cx="31" cy="11" r="2.4"/>
      <circle cx="10" cy="30" r="2.4"/>
      <circle cx="30" cy="30" r="2.4"/>
      <path d="M11 12.5 L17.4 18 M29 12.5 L22.6 18 M11.6 28.5 L17.6 22 M28.4 28.5 L22.4 22"/>
    </svg>
  ),
  densho: (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 5 L33 10 V20 C33 28 27 33 20 35 C13 33 7 28 7 20 V10 Z"/>
      <path d="M15 20 l4 4 l7 -8"/>
    </svg>
  ),
};

const WHAT_PILLARS = [
  {
    num: '01',
    en: 'Academy',
    logo: 'assets/logo-academy.png',
    variant: 'academy',
    sub: 'AIを使える人を育て、現場に活用を定着させる。',
    items: [
      {
        icon: 'internalize',
        name: '生成AI内製化支援',
        desc: '現場の業務課題を起点に、AI活用を自社で続けられる組織づくりを伴走します。',
        tags: ['伴走', '内製化', '研修'],
        textOnly: true,
      },
      {
        icon: 'cowork',
        name: 'AI Cowork',
        desc: 'チャット上で、議事録共有・情報検索・日程調整・タスク抽出等を支援。日常業務の中に、AIが自然に入り込む環境をつくります。',
        tags: ['実装', 'エージェント', '働き方'],
        link: 'https://tenho7.jp/aicowork-lp/',
        mockup: 'cowork',
      },
    ],
  },
  {
    num: '02',
    en: 'Technology',
    logo: 'assets/logo-technology.png',
    variant: 'tech',
    sub: '現場で使えるAIプロダクトで、業務活用を加速させる。',
    items: [
      {
        icon: 'synapse',
        name: 'シナプスAI',
        desc: 'GPT・Claude・Geminiを安全に使い分けられる、法人向け生成AIプラットフォーム。',
        tags: ['マルチモデル', 'RAG', 'セキュア'],
        link: 'https://tenho7.jp/synapse-lp/',
        mockup: 'synapse',
      },
      {
        icon: 'densho',
        name: 'DENSHO AI',
        desc: '過去トラブル・対応履歴・技術ナレッジを活用し、業務の属人化を防ぐAIアシスタント。',
        tags: ['保全', '技能継承', 'チャット'],
        mockup: 'densho',
      },
    ],
  },
];

function ServiceText({ it }) {
  return (
    <div className="svc-text">
      <div className="svc-icon">{WHAT_ICONS[it.icon]}</div>
      <div className="svc-name">
        {it.name}
        {it.link ? <span className="svc-arr">↗</span> : null}
      </div>
      <p className="svc-desc">{it.desc}</p>
      <div className="svc-tags">
        {it.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
      </div>
      {it.link ? <span className="svc-link">サービスを見る <span>→</span></span> : null}
    </div>
  );
}

function ServiceRow({ it, mediaSide }) {
  // Text-only service: a single full-width band, text laid out horizontally.
  if (it.textOnly) {
    return (
      <div className="svc-row svc-row--text">
        <div className="svc-text svc-text--wide">
          <div className="svc-icon">{WHAT_ICONS[it.icon]}</div>
          <div className="svc-textonly-main">
            <div className="svc-name">{it.name}</div>
            <p className="svc-desc">{it.desc}</p>
          </div>
          <div className="svc-tags">
            {it.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
          </div>
        </div>
      </div>
    );
  }

  const text = <ServiceText it={it} />;
  const Mockup = window.WhatMockup;
  const media = (
    <div className="svc-media">
      {Mockup ? <Mockup kind={it.mockup} /> : null}
    </div>
  );

  const inner = mediaSide === 'left'
    ? <React.Fragment>{media}{text}</React.Fragment>
    : <React.Fragment>{text}{media}</React.Fragment>;

  if (it.link) {
    return (
      <a className="svc-row is-link" data-media={mediaSide} href={it.link} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }
  return <div className="svc-row" data-media={mediaSide}>{inner}</div>;
}

function What() {
  return (
    <section id="what" data-screen-label="06 WHAT">
      <div className="shell">
        <div className="section-index">06 / 09 — WHAT</div>

        <div className="what2-head">
          <div className="what2-head__title">
            <span className="eyebrow reveal">WHAT WE DO</span>
            <div className="head-en reveal" data-delay="1">What</div>
          </div>
          <div className="what2-head__copy reveal" data-delay="2">
            <div className="head-jp is-serif">
              人を育て、仕組みをつくる。<br/>
              2つの軸で、<span className="em">現場のAI活用</span>を支える。
            </div>
            <p className="what2-head__sub">
              AIに任せる仕事を見極め、人が価値を出せる現場をつくる。<br/>
              それが、TENHOのアプローチです。
            </p>
          </div>
        </div>

        <div className="what3-pillars">
          {WHAT_PILLARS.map((p, pi) => (
            <div className="what3-pillar reveal" data-variant={p.variant} data-delay={pi + 1} key={p.en}>
              <div className="what3-pillarhead">
                <span className="what3-pillarhead__num">{p.num}</span>
                <div className="what3-pillarhead__name">
                  <img className="what3-pillarhead__logo" src={p.logo} alt={"TENHO " + p.en} />
                </div>
                <p className="what3-pillarhead__sub">{p.sub}</p>
              </div>

              <div className="what3-rows">
                {p.items.map((it, ri) => (
                  <ServiceRow it={it} mediaSide={ri % 2 === 0 ? 'right' : 'left'} key={it.name} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.What = What;
