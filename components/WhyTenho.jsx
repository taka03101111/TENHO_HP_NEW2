// TENHO HP — Why TENHO (redesigned to match the reference: blue stats, circle
// icons, 3 columns with dividers, an award bar at the bottom)

const WT_ICONS = {
  people: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="19" cy="18" r="6"/>
      <path d="M8 38c0-6 4.9-11 11-11s11 5 11 11"/>
      <path d="M31 13.5a6 6 0 0 1 0 11.4"/>
      <path d="M34 27.4c3.7 1.3 6 4.6 6 10.6"/>
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 40 V28"/>
      <path d="M20 40 V22"/>
      <path d="M30 40 V30"/>
      <path d="M10 40 H40"/>
      <path d="M12 20 L22 12 L29 17 L40 8"/>
      <path d="M33 8 H40 V15"/>
    </svg>
  ),
  cap: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 12 L42 19 L24 26 L6 19 Z"/>
      <path d="M14 22.5 V31 c0 3 5 5 10 5 s10-2 10-5 V22.5"/>
      <path d="M42 19 V28"/>
    </svg>
  ),
};

const WT_STATS = [
  {
    icon: 'people', figure: '2.5', unit: '年+', label: '伴走実績',
    desc: ['中小製造業の現場に寄り添い、', '2.5年以上の伴走支援を継続。'],
  },
  {
    icon: 'chart', figure: '1億', unit: '円+', label: '削減実績',
    desc: ['AI活用による業務改善・自動化で、', '累計1億円以上のコスト削減を実現。'],
  },
  {
    icon: 'cap', figure: '45,000', unit: '+', label: '累計受講者数',
    desc: ['AI研修・人材育成を通じて、', '45,000名以上が学習。'],
  },
];

function WhyTenho() {
  return (
    <section id="why-tenho" data-screen-label="05 Why TENHO">
      <div className="shell">
        <div className="section-index">05 / 09 — WHY TENHO</div>

        <div className="section-head section-head--solo" style={{ marginBottom: 64 }}>
          <div className="head-left">
            <span className="eyebrow reveal">OUR STRENGTH</span>
            <div className="head-en reveal head-en--inline" data-delay="1">
              Why TENHO
            </div>
            <div className="head-jp is-serif reveal" data-delay="2" style={{ marginTop: 16 }}>
              <span className="em">製造業</span>を、誰よりも知っている。<br/>
              <span className="em">AI</span>を、誰よりも実装できる。
            </div>
          </div>
        </div>

        <div className="wt-grid">
          {WT_STATS.map((s, i) => (
            <div key={s.label} className="wt-col reveal" data-delay={i + 1}>
              <div className="wt-icon">{WT_ICONS[s.icon]}</div>
              <div className="wt-figure">
                {s.figure}<span className="unit">{s.unit}</span>
              </div>
              <div className="wt-label">{s.label}</div>
              <div className="wt-desc">
                {s.desc.map((d, di) => <span key={di}>{d}<br/></span>)}
              </div>
            </div>
          ))}
        </div>

        <div className="wt-award reveal" data-delay="2">
          <span className="wt-award__badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="9" r="6"/>
              <path d="M9 14.5 L7.5 22 L12 19.5 L16.5 22 L15 14.5"/>
            </svg>
            受賞実績
          </span>
          <a className="wt-award__item" href="https://note.com/e_autec/n/n95ae9cc3451e" target="_blank" rel="noopener noreferrer">
            第2回 素形材産業経営賞  — 経済産業省 製造産業局長賞 <span className="wt-award__arr">↗</span>
          </a>
          <a className="wt-award__item" href="https://note.com/e_autec/n/nda30f4ebe203" target="_blank" rel="noopener noreferrer">
            第10回 ものづくり日本大賞 — 中部経済産業局長賞 <span className="wt-award__arr">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

window.WhyTenho = WhyTenho;
