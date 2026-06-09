// TENHO HP — Why NOW (simplified: less text, cleaner composition)

const NOW_CONCERNS = [
  {
    num: '01', label: '人材不足', note: '現場の負担が増えている',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="16" r="6"/>
        <path d="M6 38c0-6.6 5.4-12 12-12s12 5.4 12 12"/>
        <path d="M32 14h12"/><path d="M38 8v12"/>
      </svg>
    ),
  },
  {
    num: '02', label: '属人化', note: '判断や対応が人に依存している',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="8" width="20" height="28" rx="2"/>
        <path d="M16 16h8M16 22h8M16 28h6"/>
        <path d="M30 14 L42 14 L42 42 L24 42 L24 36"/>
      </svg>
    ),
  },
  {
    num: '03', label: '技術継承', note: 'ベテランの知見が残りにくい',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="14" r="5"/><circle cx="36" cy="14" r="5"/>
        <path d="M4 34c0-4.4 3.6-8 8-8s8 3.6 8 8"/>
        <path d="M28 34c0-4.4 3.6-8 8-8s8 3.6 8 8"/>
        <path d="M20 24 L28 24" strokeDasharray="2 2"/>
      </svg>
    ),
  },
  {
    num: '04', label: '定型業務過多', note: '価値ある仕事に時間を使えない',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="14"/>
        <path d="M24 14 L24 24 L31 28"/>
        <path d="M38 10 L42 6"/><path d="M10 38 L6 42"/>
      </svg>
    ),
  },
  {
    num: '05', label: 'AI格差', note: '活用できる企業との差が広がる',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 40 L6 8"/><path d="M6 40 L42 40"/>
        <path d="M12 32 L18 24 L24 28 L32 16 L40 12"/>
        <circle cx="40" cy="12" r="2"/>
      </svg>
    ),
  },
];

function WhyNow() {
  return (
    <section id="why-now" data-screen-label="04 Why NOW">
      <div className="shell">
        <div className="section-index">04 / 09 — WHY NOW</div>

        <div className="now-hero">
          <div className="now-hero__title">
            <span className="eyebrow reveal">URGENCY</span>
            <div className="head-en reveal head-en--inline" data-delay="1">Why Now</div>
          </div>
          <h2 className="now-headline reveal" data-delay="2">
            AI時代に問われるのは、<br/>
            人の価値を<span className="em">どう引き出すか。</span>
          </h2>
        </div>

        <div className="now-blocks">
          {NOW_CONCERNS.map((c, i) => (
            <div key={c.num} className="now-block reveal" data-delay={i + 1}>
              <div className="now-block__num">{c.num}</div>
              <div className="now-block__icon">{c.icon}</div>
              <div className="now-block__label">{c.label}</div>
              <div className="now-block__note">{c.note}</div>
            </div>
          ))}
        </div>

        <div className="now-divider">AND</div>

        <div className="now-warning-wrap reveal" data-delay="2">
          <span className="now-corner tl"></span>
          <span className="now-corner tr"></span>
          <span className="now-corner bl"></span>
          <span className="now-corner br"></span>
          <p className="now-warning">
            AIを使うことが目的ではありません。<br/>
            人の価値を最大化させる現場をつくることが、これからの<span className="em">競争力に。</span>
          </p>
        </div>
      </div>
    </section>
  );
}

window.WhyNow = WhyNow;
