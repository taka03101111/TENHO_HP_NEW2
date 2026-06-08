// TENHO HP — TOP / Hero
// Single horizontal one-liner over the glow + orbits + particle field.

function ParticleField() {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf = 0;
    let particles = [];
    let w = 0, h = 0, cx = 0, cy = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      w = rect.width; h = rect.height;
      cx = w / 2; cy = h / 2;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const seed = () => {
      const count = Math.min(110, Math.floor((w * h) / 12000));
      particles = new Array(count).fill(0).map(() => {
        const r = 200 + Math.random() * 540;
        const a = Math.random() * Math.PI * 2;
        const speed = 0.00012 + Math.random() * 0.00038;
        return {
          r,
          a,
          speed: Math.random() > 0.5 ? speed : -speed,
          size: 0.6 + Math.random() * 1.6,
          opacity: 0.18 + Math.random() * 0.45,
          drift: Math.random() * 0.6 - 0.3,
          color: Math.random() > 0.6 ? 'blue' : 'ink',
        };
      });
    };

    let t0 = performance.now();
    const tick = (t) => {
      const dt = t - t0; t0 = t;
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.a += p.speed * dt;
        p.r += p.drift * 0.002 * dt;
        if (p.r < 180) p.drift = Math.abs(p.drift);
        if (p.r > 760) p.drift = -Math.abs(p.drift);
        const x = cx + Math.cos(p.a) * p.r;
        const y = cy + Math.sin(p.a) * p.r * 0.6;
        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        if (p.color === 'blue') {
          ctx.fillStyle = 'rgba(111, 168, 220, ' + p.opacity + ')';
        } else {
          ctx.fillStyle = 'rgba(14, 14, 14, ' + (p.opacity * 0.35) + ')';
        }
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };

    resize();
    seed();
    raf = requestAnimationFrame(tick);

    const onResize = () => { resize(); seed(); };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="top-canvas" aria-hidden="true"></canvas>;
}

function Top() {
  return (
    <section id="top" data-screen-label="01 TOP">
      <div className="top-stage">
        <ParticleField />
        <div className="top-glow" aria-hidden="true"></div>
        <div className="top-orbits" aria-hidden="true">
          <svg viewBox="-600 -600 1200 1200" preserveAspectRatio="xMidYMid meet">
            <ellipse className="orbit-ring" cx="0" cy="0" rx="540" ry="320" />
            <ellipse className="orbit-ring thin" cx="0" cy="0" rx="420" ry="250" transform="rotate(15)" />
            <ellipse className="orbit-ring" cx="0" cy="0" rx="300" ry="180" transform="rotate(-12)" />
            <ellipse className="orbit-ring thin" cx="0" cy="0" rx="180" ry="105" transform="rotate(28)" />
          </svg>
        </div>

        <div className="top-eyebrow">
          <span className="eyebrow">
            <span className="eyebrow-num">01 / 09</span> TENHO · MANUFACTURING × AI × FUTURE
          </span>
        </div>

        <div className="top-headline-h" role="heading" aria-level="1">
          現場の知恵を、<span className="accent">AI</span>で次世代へ。
        </div>

        <div className="top-en-mark" aria-hidden="true">
          <img src={(window.__resources && window.__resources.logoBlack) || "assets/TENHO-logo-black.png"} alt="" />
        </div>

        <div className="top-meta">
          <div>EST. NAGOYA, JAPAN</div>
          <div>MANUFACTURING × AI</div>
        </div>

        <div className="scroll-indicator" aria-hidden="true">
          <span>SCROLL</span>
        </div>
      </div>
    </section>
  );
}

window.Top = Top;
