// TENHO HP — Contact
// Two tabbed forms in place of the old Email/Address/Response meta:
//   1) お問い合わせ (inquiry)   2) 事例集を申し込む (case-study request)

const CONTACT_TABS = [
  { id: 'inquiry',  k: 'CONTACT',  v: 'お問い合わせ' },
  { id: 'document', k: 'DOCUMENT', v: '事例集を申し込む' },
];

function Contact() {
  const [tab, setTab] = React.useState('inquiry');
  const [sent, setSent] = React.useState(false);

  // Reset the success state whenever the user switches tabs
  React.useEffect(() => { setSent(false); }, [tab]);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const isDoc = tab === 'document';

  return (
    <section id="contact" data-screen-label="08 Contact">
      <div className="shell">
        <div className="section-index">08 / 09 — CONTACT</div>

        <div className="contact-layout">
          <div className="contact-intro">
            <div className="section-head section-head--solo" style={{ marginBottom: 32 }}>
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

            <div className="contact-formpanel reveal" data-delay="3">
              <div className="contact-tabs" role="tablist" aria-label="お問い合わせ種別">
                {CONTACT_TABS.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    role="tab"
                    aria-selected={tab === t.id}
                    className={'contact-tab' + (tab === t.id ? ' is-active' : '')}
                    onClick={() => setTab(t.id)}
                  >
                    <span className="k">{t.k}</span>
                    <span className="v">{t.v}</span>
                  </button>
                ))}
              </div>

              {sent ? (
                <div className="contact-thanks" role="status">
                  <div className="contact-thanks__icon" aria-hidden="true">
                    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 25 L21 34 L37 16"/>
                    </svg>
                  </div>
                  <div className="contact-thanks__title">
                    {isDoc ? 'お申し込みありがとうございます' : '送信が完了しました'}
                  </div>
                  <p className="contact-thanks__body">
                    {isDoc
                      ? 'ご記入のメールアドレス宛に、生成AI事例集（PDF）をお送りします。'
                      : '内容を確認のうえ、平日48時間以内に担当者よりご連絡します。'}
                  </p>
                  <button type="button" className="contact-thanks__again" onClick={() => setSent(false)}>
                    もう一度入力する
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={onSubmit}>
                  <div className="row-2">
                    <div className="field">
                      <label htmlFor="cf-company">会社名</label>
                      <input id="cf-company" name="company" type="text" placeholder="株式会社○○製作所" required />
                    </div>
                    <div className="field">
                      <label htmlFor="cf-name">お名前</label>
                      <input id="cf-name" name="name" type="text" placeholder="天保 太郎" required />
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="cf-email">メールアドレス</label>
                    <input id="cf-email" name="email" type="email" placeholder="you@company.co.jp" required />
                  </div>

                  {isDoc ? (
                    <div className="field">
                      <label htmlFor="cf-role">役職・部門<span className="opt">任意</span></label>
                      <input id="cf-role" name="role" type="text" placeholder="製造部 / 生産技術 など" />
                    </div>
                  ) : (
                    <div className="field">
                      <label htmlFor="cf-message">お問い合わせ内容</label>
                      <textarea id="cf-message" name="message" placeholder="ご相談内容・現状の課題などをご記入ください" required></textarea>
                    </div>
                  )}

                  <button type="submit" className="submit">
                    {isDoc ? '事例集を受け取る' : '送信する'}
                    <span aria-hidden="true">{isDoc ? '↓' : '→'}</span>
                  </button>
                  <p className="contact-form__note">
                    {isDoc
                      ? '生成AI事例集（PDF）をメールでお送りします。'
                      : 'ご入力いただいた内容は、お問い合わせ対応の目的にのみ利用します。'}
                  </p>
                </form>
              )}
            </div>
          </div>

          <img
            id="contact-visual"
            className="contact-visual reveal"
            data-delay="2"
            src="./asahi.jpg"
            alt="TENHOのオフィスイメージ"
            />
        </div>
      </div>
    </section>
  );
}

window.Contact = Contact;
