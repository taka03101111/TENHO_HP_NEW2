// TENHO HP — HOW
// Two-column layout: TEXT LEFT, DIAGRAM RIGHT. Stays side-by-side at standard widths.

const HOW_NODES = [
  { en: 'AI TEAM',         jp: 'AI推進チーム' },
  { en: 'INTERNALIZATION', jp: 'AI内製化' },
  { en: 'AGENT',           jp: 'エージェント開発' },
  { en: 'DATA',            jp: 'データ活用' },
  { en: 'IMPROVEMENT',     jp: '業務改善' },
  { en: 'COMPANION',       jp: '伴走支援' },
];

function How() {
  const radius = 38;
  const nodes = HOW_NODES.map((n, i) => {
    const angle = (-Math.PI / 2) + (i * (Math.PI * 2) / HOW_NODES.length);
    return {
      ...n,
      x: 50 + radius * Math.cos(angle),
      y: 50 + radius * Math.sin(angle),
    };
  });

  return (
    <section id="how" data-screen-label="03 HOW">
      <div className="shell">
        <div className="section-index">03 / 09 — HOW</div>

        <div className="section-head section-head--solo">
          <div className="head-left">
            <span className="eyebrow reveal">OUR METHOD</span>
            <div className="head-en reveal" data-delay="1">
              How
            </div>
          </div>
        </div>

        <div className="how-layout">
          <div className="how-text reveal" data-delay="3">
            <div className="how-headline">
              製造業の未来を、現場から変えていく。<br/>
              <span className="em">仕組み</span>を共につくる。
            </div>
            <p className="how-sub">
              業務棚卸しからPoC、AIエージェントの試作、社内ルール整備、
              効果測定、横展開まで。現場の声を反映しながら、自社でAIを
              育てて使い続ける体制を、伴走で構築します。
            </p>
          </div>

          <div className="how-diagram reveal" data-delay="4">
            <svg className="how-diagram-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              {nodes.map((n, i) => (
                <line
                  key={i}
                  x1="50" y1="50"
                  x2={n.x} y2={n.y}
                  stroke="#D8D3C8"
                  strokeWidth="0.25"
                />
              ))}
              <circle cx="50" cy="50" r="38" fill="none" stroke="#E4E1DA" strokeWidth="0.18" strokeDasharray="0.6 1.2"/>
              <circle cx="50" cy="50" r="46" fill="none" stroke="#BEDCFF" strokeWidth="0.15" strokeDasharray="0.4 1.6" opacity="0.6"/>
            </svg>

            <div className="how-node center" style={{ left: '50%', top: '50%' }}>
              <div className="en">TENHO</div>
              現場 × AI
            </div>

            {nodes.map((n) => (
              <div
                key={n.en}
                className="how-node"
                style={{ left: n.x + '%', top: n.y + '%' }}
              >
                <div className="en">{n.en}</div>
                {n.jp}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

window.How = How;
