// TENHO HP — Contact
// Adds a clear secondary CTA for the free document download (生成AI事例集).

const TENHO_DL_URL = 'https://tenho7.jp/dl/';
const TENHO_CONTACT_URL = 'https://tenho7.jp/contact/';

function Contact() {
  const [sent, setSent] = React.useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" data-screen-label="08 Contact">
      <div className="shell">
        <div className="section-index">08 / 09 — CONTACT</div>

        <div className="contact-layout">
          <div>
            <div className="section-head section-head--solo" style={{ marginBottom: 40 }}>
              <div className="head-left">
                <span className="eyebrow reveal" style={{ color: 'rgba(255,255,255,0.55)' }}>GET IN TOUCH</span>
                <div className="head-en reveal" data-delay="1">
                  Contact
                </div>
              </div>
            </div>
            <h2 className="contact-headline reveal" data-delay="2">
              現場のAI活用、<br/>
              <span className="em">一緒に</span>始めましょう。
            </h2>

            <div className="contact-ctas reveal" data-delay="3">
              <a className="contact-cta primary" href={TENHO_CONTACT_URL} target="_blank" rel="noopener noreferrer">
                <span className="k">CONTACT</span>
                <span className="v">お問い合わせ</span>
                <span className="arr">→</span>
              </a>
              <a className="contact-cta secondary" href={TENHO_DL_URL} target="_blank" rel="noopener noreferrer">
                <span className="k">DOCUMENT</span>
                <span className="v">生成AI事例集をダウンロード</span>
                <span className="arr">↓</span>
              </a>
            </div>

            <div className="contact-meta reveal" data-delay="4">
              <div className="row">
                <span className="k">Email</span>
                <span className="v">info@tenho7.jp</span>
              </div>
              <div className="row">
                <span className="k">Address</span>
                <span className="v jp">東京都渋谷区神泉町10-10 アシジ神泉ビル10F</span>
              </div>
              <div className="row">
                <span className="k">Response</span>
                <span className="v jp">平日 48時間以内に担当者よりご連絡</span>
              </div>
            </div>
          </div>

          <img
            id="contact-visual"
            className="contact-visual reveal"
            data-delay="2"
            src="asahi.jpg"
            alt="オフィス・チーム等の画像"
          />
        </div>
      </div>
    </section>
  );
}

window.Contact = Contact;
