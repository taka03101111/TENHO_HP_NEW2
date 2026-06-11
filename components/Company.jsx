// TENHO HP — Company
// Real company info from tenho7.jp. Statement + business/products/network rows removed.

const COMPANY_ROWS = [
  { k: 'Company',        jp: '会社名',     v: '株式会社 TENHO（TENHO inc.）' },
  { k: 'Founded',        jp: '設立',       v: '2023年4月' },
  { k: 'Representative', jp: '代表者',     v: '代表取締役　田村 允 ／ 土田 龍矢' },
  { k: 'Capital',        jp: '資本金',     v: '3,400万円' },
  {
    k: 'Address', jp: '所在地',
    v: (
      <span className="company-addr">
        <span className="company-addr__row">
          <span className="company-addr__label">東京</span>
          〒150-0045　東京都渋谷区神泉町10-10 アシジ神泉ビル10F
        </span>
        <span className="company-addr__row">
          <span className="company-addr__label">名古屋</span>
          〒466-0064　愛知県名古屋市昭和区鶴舞1丁目2番32号 STATION Ai内
        </span>
      </span>
    ),
  },
  { k: 'Business',       jp: '事業内容',   v: '生成AI内製化支援 ／ AIアプリケーション開発' },
];

function Company() {
  return (
    <section id="company" data-screen-label="09 Company">
      <div className="shell">
        <div className="section-index">09 / 09 — COMPANY</div>

        <div className="section-head section-head--solo">
          <div className="head-left">
            <span className="eyebrow reveal">ABOUT TENHO</span>
            <div className="head-en reveal" data-delay="1">
              Company
            </div>
          </div>
        </div>

        <table className="company-table reveal" data-delay="2">
          <tbody>
            {COMPANY_ROWS.map((r) => (
              <tr key={r.k}>
                <th>
                  {r.k}
                  <span className="jp">{r.jp}</span>
                </th>
                <td>{r.v}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="company-footer">
          <div className="brand">
            <img src={(window.__resources && window.__resources.logoBlack) || "assets/TENHO-logo-black.png"} alt="TENHO" />
            <p>Manufacturing × AI × Future</p>
          </div>
          <div className="copyright">
            © TENHO inc. All Rights Reserved.
          </div>
        </div>
      </div>
    </section>
  );
}

window.Company = Company;
