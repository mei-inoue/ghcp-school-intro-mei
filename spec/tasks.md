# 神山まるごと高専 紹介サイト 実装タスク (tasks.md)

凡例: `[ ]` 未着手 / `[~]` 進行中 / `[x]` 完了
依存表記: `→ T-XX` (このタスクの後に実施) / `← T-XX` (このタスクが依存)

## Phase 1: 基盤構築 (PoC 前提)

- [ ] **T-01** `npm create vite@latest . -- --template vanilla-ts` で初期化、不要ファイル整理
  - 期待成果: `package.json` / `tsconfig.json` / `index.html` 生成
  - 検証: `npm run dev` でデフォ画面表示
- [ ] **T-02** 依存追加: `gsap` / `lenis` ← T-01
  - コマンド: `npm i gsap lenis`
- [ ] **T-03** `vite.config.ts` を multi-page 化 + `base: '/ghcp-school-intro-mei/'` ← T-01
  - 検証: `npm run build` で `dist/index.html` 等が生成 (この時点ではプレースホルダ HTML)
- [ ] **T-04** `.gitignore` (`node_modules`, `dist`) と `README.md` (日本語: 開発/デプロイ手順) 整備 ← T-01
- [ ] **T-05** `.github/workflows/deploy.yml` 作成 (`configure-pages` + `upload-pages-artifact` + `deploy-pages`, Node 20, `concurrency: pages`) ← T-03
  - 検証: 仮 PR で Actions が green、Pages URL アクセス可
- [ ] **T-06** `src/styles/{variables,reset,global}.css` 作成 (色トークン、フォント import、grayscale フィルタ) ← T-01

## Phase 2: 情報収集

- [ ] **T-07** `curl https://kamiyama.ac.jp/` で HTML 取得し主要項目抽出
  - 検証: 校名/所在地/設立年/学科/SNS が抽出できる
  - リスク: JS レンダ依存だと取れない → ユーザ確認 (Q-03)
- [ ] **T-08** `src/data/school.ts` に `SchoolInfo` 型 + `SCHOOL` 定数を実装、未取得項目は `// TODO(Q-XX)` ← T-07

## Phase 3: 共通レイアウト

- [ ] **T-09** `src/components/header.ts` (ロゴ / nav / ENTRY / ハンバーガー、`activePath` で `aria-current`) ← T-06
- [ ] **T-10** `src/components/footer.ts` (住所 / SNS / コピーライト) ← T-06, T-08
- [ ] **T-11** `src/scripts/a11y.ts` (`prefersReducedMotion` / `whenMotionAllowed`)
- [ ] **T-12** `src/scripts/lenis.ts` (Lenis 起動 + `ScrollTrigger.update` 同期) ← T-02
- [ ] **T-13** `src/scripts/animations.ts` (ScrollTrigger.batch fade-up / magnetic / image hover) ← T-02, T-12
- [ ] **T-14** `src/scripts/transitions.ts` (黒幕スライド + `<a>` クリック横取り、外部/別タブ/download は素通り) ← T-02
- [ ] **T-15** `src/main.ts` で全モジュール初期化 + `whenMotionAllowed` でラップ ← T-09〜T-14
- [ ] **T-16** イントロローダー HTML/CSS + GSAP timeline (`index.html` のみ) ← T-13

## Phase 4: 各ページ実装 (T-15 完了後並列可)

- [ ] **T-17** `index.html` + `src/pages/index.ts` + `index.css`
  - Hero (split + パララックス) / Introduction 01-03 / 地域マップ / People プレビュー / カウントアップ
- [ ] **T-18** `about.html` + `about.ts` + `about.css`
  - ミッション / 設立背景 / 校長メッセージ / 年表
- [ ] **T-19** `curriculum.html` + `curriculum.ts` + `curriculum.css`
  - 3つの柱 / 5 年間タイムライン
- [ ] **T-20** `campus.html` + `campus.ts` + `campus.css`
  - 神山町紹介 / 写真ギャラリー / 寮生活
- [ ] **T-21** `admissions.html` + `admissions.ts` + `admissions.css`
  - スカラシップ / 入試スケジュール / FAQ (details/summary) / `mailto:` 問い合わせ
- [ ] **T-22** `public/images/` プレースホルダ + `public/favicon.svg`

## Phase 5: 仕上げ

- [ ] **T-23** レスポンシブ調整 (360 / 768 / 1024 / 1440px) ← T-17〜T-21
- [ ] **T-24** アクセシビリティ最終確認 (alt / コントラスト / `prefers-reduced-motion`) ← T-23
- [ ] **T-25** Lighthouse 計測 → 画像 WebP 化、フォントサブセット ← T-24
- [ ] **T-26** README に開発手順/デプロイ手順/ディレクトリ構成を日本語で追記 ← T-25
- [ ] **T-27** 最終 PR 作成 (日本語タイトル/本文、Streamlined Action Log と Compressed Decision Record を添付) ← T-26

## 検証マトリクス (Acceptance ↔ Task)

| Acceptance (requirements.md §8) | カバータスク |
| --- | --- |
| 1. `npm run dev` 5 ページ表示 | T-17〜T-21 |
| 2. `npm run build && preview` 動作 | T-03, T-17〜T-21 |
| 3. Pages デプロイ成功 | T-05, T-27 |
| 4. 60fps 維持 | T-13, T-25 |
| 5. Lighthouse A11y 90+ | T-24, T-25 |
| 6. reduced-motion で抑制 | T-11, T-15 |
| 7. 共通ヘッダ/フッタ/遷移 | T-09, T-10, T-14, T-15 |

## 未確定事項のフォロー

- **Q-01 画像権利**: T-22 着手前にユーザ確認。NG ならフリー素材 + 自作タイポへ切替。
- **Q-02 リポジトリ名**: T-03 時点で `base` を確定、リネーム時の影響範囲は `vite.config.ts` と Pages URL のみ。
- **Q-03 公式情報**: T-07 で取得結果を見て、不足分はユーザ確認 → T-08 のプレースホルダを差し替え。
