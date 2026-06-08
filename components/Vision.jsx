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
          <span className="ln dim">人がいないと止まる現場から、</span>
          <span className="ln">AIと共に<span className="em">回り続ける現場</span>へ。</span>
          <span className="ln dim">改善が、文化になる。</span>
        </div>

        <div className="vision-quote reveal" data-delay="4">
          — Manufacturing knowledge, encoded for the next generation.
        </div>
      </div>
    </section>
  );
}

window.Vision = Vision;
