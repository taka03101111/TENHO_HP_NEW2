// TENHO HP — WHAT product UI mockups (clean, on-brand recreations that sit on
// the white background; replaces the raw screenshots). window.WhatMockup({kind}).

function CoworkMockup() {
  return (
    <div className="mck mck-cowork" aria-hidden="true">
      <div className="mck-bar">
        <span className="mck-dots"><i></i><i></i><i></i></span>
        <span className="mck-bar-title">TENHO Workspace</span>
      </div>
      <div className="mck-cw-body">
        <aside className="mck-cw-side">
          <div className="mck-cw-ws">TENHO AI<span>優先度判定 / 振り分け</span></div>
          <div className="mck-cw-sec">チャンネル</div>
          <div className="mck-cw-ch"># general</div>
          <div className="mck-cw-ch"># sales</div>
          <div className="mck-cw-ch"># marketing</div>
          <div className="mck-cw-ch active">🔒 ai-secretary</div>
          <div className="mck-cw-ch"># all-share</div>
        </aside>
        <main className="mck-cw-main">
          <div className="mck-cw-head">🔒 ai-secretary</div>
          <div className="mck-msg">
            <span className="mck-av o">私</span>
            <div className="mck-msg-b">
              <div className="mck-msg-h"><b>あなた</b><span>14:32</span></div>
              <p>@秘書AI 来週、営業1課の3名で1時間以上空いている時間を抽出して。</p>
            </div>
          </div>
          <div className="mck-msg">
            <span className="mck-av p">秘</span>
            <div className="mck-msg-b">
              <div className="mck-msg-h"><b>秘書AI</b><em>APP</em><span>14:32</span></div>
              <p>承知しました。4名のカレンダーから空き枠が見つかりました。</p>
              <div className="mck-cw-card">
                <div className="mck-cw-card-h">✓ 全員が1時間以上空いている枠</div>
                <div>水曜 — 10:00〜11:30 / 14:00〜17:00</div>
                <div>木曜 — 13:00〜15:30</div>
              </div>
            </div>
          </div>
          <div className="mck-msg">
            <span className="mck-av g">議</span>
            <div className="mck-msg-b">
              <div className="mck-msg-h"><b>議事録AI</b><em>APP</em><span>15:42</span></div>
              <p>会議録から議事録を生成しました。タスク4件・宿題2件を抽出しています。</p>
            </div>
          </div>
        </main>
      </div>
      <div className="mck-cw-toast"><span className="mck-av g sm">議</span>議事録を納品しました</div>
    </div>
  );
}

function SynapseMockup() {
  return (
    <div className="mck mck-synapse" aria-hidden="true">
      <div className="mck-bar dark">
        <span className="mck-dots"><i></i><i></i><i></i></span>
        <span className="mck-url">synapse-ai.tenho7.jp</span>
      </div>
      <div className="mck-syn-body">
        <span className="mck-syn-badge g">● GPT-5</span>
        <span className="mck-syn-badge c">● Claude Sonnet 4.5</span>
        <span className="mck-syn-badge m">● Gemini 2.5 Flash</span>
        <div className="mck-syn-center">
          <div className="mck-syn-title">シナプスAIチャット</div>
          <div className="mck-syn-sub">複数のAIモデルを活用し、文書作成・調査・コーディングなど<br/>あらゆる業務タスクをサポートします</div>
          <div className="mck-syn-cards">
            <div className="mck-syn-tpl"><b>議事録作成</b><span>会議の議事録を作成</span></div>
            <div className="mck-syn-tpl"><b>企画書作成</b><span>新規企画の提案書</span></div>
            <div className="mck-syn-tpl"><b>コードレビュー</b><span>レビューを効率化</span></div>
          </div>
        </div>
        <div className="mck-syn-input">
          <span className="ph">質問してみましょう…</span>
          <span className="mck-syn-model">Auto ▾</span>
        </div>
      </div>
    </div>
  );
}

function DenshoMockup() {
  const histories = ['モーター異音の相談履歴', 'ベアリング交換手順', '油圧ポンプ圧力低下', 'コンベア停止トラブル', '温度センサー異常'];
  const faqs = ['ベアリング交換方法', '異音・振動の原因', '定期点検チェックリスト', '緊急停止の対処法'];
  return (
    <div className="mck-densho2" aria-hidden="true">
      {/* Laptop */}
      <div className="dn2-laptop">
        <div className="dn2-screen">
          <div className="dn2-top">
            <span className="dn2-logo"><i></i></span>
            <span className="dn2-brand">保全AI</span>
            <span className="dn2-tabs"><span className="on">ダッシュボード</span><span>レポート</span></span>
            <span className="dn2-pill"></span>
          </div>
          <div className="dn2-cols">
            <aside className="dn2-side">
              <div className="dn2-sh">最近の相談履歴</div>
              {histories.map((h, i) => (
                <div className={"dn2-li" + (i === 3 ? " on" : "")} key={h}>{h}</div>
              ))}
              <div className="dn2-sh">よくある質問</div>
              {faqs.map((f) => <div className="dn2-li sm" key={f}>{f}</div>)}
            </aside>

            <main className="dn2-main">
              <div className="dn2-mh">保全AI アシスタント</div>
              <div className="dn2-ai">
                <span className="dn2-av"></span>
                <div className="dn2-bub">「コンベア停止トラブル」の履歴を読み込みました。ご質問をどうぞ。</div>
              </div>
              <div className="dn2-user">設備が緊急停止した場合の対処手順を教えてください</div>
              <div className="dn2-ai">
                <span className="dn2-av"></span>
                <div className="dn2-bub">
                  データベースを検索中です。該当するトラブル事例が見つかりました。
                  <div className="dn2-file">
                    <span className="dn2-fic">PDF</span>
                    <b>トラブル事例.pdf</b>
                    <span className="dn2-dl">ダウンロード</span>
                  </div>
                </div>
              </div>
              <div className="dn2-user">定期点検で確認すべきチェックポイントを教えて</div>
              <div className="dn2-inputbar">
                <span className="dn2-ph">修理・保全に関するご質問をどうぞ…</span>
                <span className="dn2-snd"></span>
              </div>
            </main>

            <aside className="dn2-side r">
              <div className="dn2-sh">AI学習状況</div>
              <div className="dn2-li sm">学習済みデータ</div>
              <div className="dn2-li sm">設備台帳</div>
              <div className="dn2-li sm">点検マニュアル</div>
              <div className="dn2-sh">現在の稼働状況</div>
              <div className="dn2-li sm">設備A 稼働中</div>
              <div className="dn2-li sm">設備B 点検中</div>
              <div className="dn2-sh">推奨アクション</div>
              <div className="dn2-li sm">潤滑油の補充</div>
              <div className="dn2-li sm">フィルタ交換</div>
            </aside>
          </div>
        </div>
        <div className="dn2-base"></div>
      </div>

      {/* Phone */}
      <div className="dn2-phone">
        <div className="dn2-phone-body">
          <div className="dn2-phone-screen">
            <div className="dn2-ph-top">
              <span className="dn2-ph-logo"><i></i></span>
              <div className="dn2-ph-brand">保全AI</div>
              <div className="dn2-ph-sub">Maintenance AI System</div>
            </div>
            <div className="dn2-ph-bd">
              <div className="dn2-ph-h">ログイン</div>
              <div className="dn2-ph-field">ユーザー名</div>
              <div className="dn2-ph-input"></div>
              <div className="dn2-ph-field">パスワード</div>
              <div className="dn2-ph-input"></div>
              <div className="dn2-ph-check"><span></span>ログイン状態を保持</div>
              <div className="dn2-ph-btn">ログイン</div>
              <div className="dn2-ph-link">パスワードをお忘れですか？</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WhatMockup({ kind }) {
  if (kind === 'cowork') return <CoworkMockup />;
  if (kind === 'synapse') return <SynapseMockup />;
  if (kind === 'densho') return <DenshoMockup />;
  return null;
}

window.WhatMockup = WhatMockup;
