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
    icon: 'cap', figure: '3', unit: '年', label: '製造業支援の知見',
    desc: ['現場に向き合ってきた知見を、', 'AI実装に活かす。'],
  },
  {
    icon: 'chart',
    dual: [
      { n: '−1億', u: '円', c: '削減' },
      { n: '+1,500万', u: '円', c: '創出' },
    ],
    label: 'コスト削減 ＆ 売上創出',
    desc: ['製造業1社において、AI活用による業務効率化で年間約１億円規模の削減効果、', '新規事業創出により年間約１，５００万円規模の売上機会を創出。'],
  },
  {
    icon: 'people', figure: '45,000', unit: '人', label: '累計受講者数',
    desc: ['AIを学び、現場で活かす人材を', '育ててきました。'],
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
              <span className="em">現地現物</span>で、現場を理解する。<br/>
              人とAIが共に働く仕組みを、<span className="em">共につくる</span>。
            </div>
          </div>
        </div>

        <div className="wt-grid">
          {WT_STATS.map((s, i) => (
            <div key={s.label} className="wt-col reveal" data-delay={i + 1}>
              <div className="wt-icon">{WT_ICONS[s.icon]}</div>
              {s.dual ? (
                <div className="wt-figure wt-figure--dual">
                  {s.dual.map((d, di) => (
                    <span className="wt-dual-row" key={di}>
                      <span className="num">{d.n}<span className="unit">{d.u}</span></span>
                      <span className="cap">{d.c}</span>
                    </span>
                  ))}
                </div>
              ) : (
                <div className="wt-figure">
                  {s.figure}<span className="unit">{s.unit}</span>
                </div>
              )}
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
