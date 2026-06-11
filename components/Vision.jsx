// TENHO HP - Vision

function Vision() {
  return (
    <section id="vision" data-screen-label="02 Vision">
      <div className="shell">
        <div className="section-index">02 / 09 - VISION</div>

        <div className="section-head section-head--solo">
          <div className="head-left">
            <span className="eyebrow reveal">OUR VISION</span>
            <div className="head-en reveal" data-delay="1">
              Vision
            </div>
          </div>
        </div>

        <div className="vision-body reveal" data-delay="2">
          <span className="ln">AIで置き換えるのではなく、</span>
          <span className="ln">人が価値を出せる</span>
          <span className="ln">仕組みを共につくる。</span>
        </div>

        <div className="vision-quote vision-copy reveal" data-delay="4">
          <span className="ln">業務を整理し、AIに任せる仕事と、人が担うべき仕事を見極めます。</span>
          <span className="ln">その上で、AIエージェント構築・人材育成・PoC・社内展開まで伴走し、</span>
          <span className="ln">外部に依存せず、内製で改善し続けられる体制をつくります。</span>
        </div>
      </div>
    </section>
  );
}

window.Vision = Vision;
