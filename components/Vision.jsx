// TENHO HP — Vision
// Big serif one-liner with proper breakpoints so it never breaks mid-phrase.

function Vision() {
  return (
    <section id="vision" data-screen-label="02 Vision">
      <div className="shell">
        <div className="section-index">02 / 09 — VISION</div>

        <div className="section-head section-head--solo">
          <div className="head-left">
            <span className="eyebrow reveal">OUR VISION</span>
            <div className="head-en reveal" data-delay="1">
              Vision
            </div>
          </div>
        </div>

        <div className="vision-body reveal" data-delay="2">
          <span className="ln dim">AIに任せる仕事を見極め、</span>
          <span className="ln">人は、<span className="em">人にしかできない仕事</span>を。</span>
          <span className="ln dim">現場の力が、もっと活きる未来へ。</span>
        </div>

        <div className="vision-quote reveal" data-delay="4">
          — Manufacturing knowledge, encoded for the next generation.
        </div>
      </div>
    </section>
  );
}

window.Vision = Vision;
