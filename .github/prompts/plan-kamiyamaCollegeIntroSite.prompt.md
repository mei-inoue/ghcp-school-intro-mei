# Plan: 神山まるごと高専 紹介サイト構築

神山まるごと高専(徳島県神山町・5年制私立高専)の紹介サイトを **Vite + Vanilla TS** で複数ページ構成で組み、**GitHub Actions → GitHub Pages** にデプロイする。デザインは添付の辻・本郷サイトをリファレンスに**白黒モノクロ基調**で統一、**GSAP + Lenis** で全身全霊のアニメをぶち込む。

## Steps

1. **Phase 1: 基盤構築**
   - Vite(vanilla-ts) 初期化、TypeScript / GSAP / Lenis を依存追加
   - `vite.config.ts` に `base: '/ghcp-school-intro-mei/'` と multi-page entry 設定
   - `.github/workflows/deploy.yml` 作成(`actions/configure-pages` + `upload-pages-artifact` + `deploy-pages`)
   - `.gitignore`(node_modules, dist) と `README.md` 整備
   - デザイントークン(`variables.css`)、reset、global CSS

2. **Phase 2: 情報収集**
   - 公式サイト `https://kamiyama.ac.jp/` を `curl` で取得し HTML パース
   - `src/data/school.ts` に学校名/所在地/設立年/教育理念/学科/スカラシップ/入試/SNS 等を集約
   - 不足分はユーザーに確認

3. **Phase 3: 共通レイアウト**
   - ヘッダー(ロゴ + ナビ + ENTRY ボタン + ハンバーガー)を共通コンポーネント化
   - フッター(住所/SNS/コピーライト)共通化
   - イントロローダー HTML/CSS と起動アニメ(`main.ts`)
   - Lenis セットアップ + ScrollTrigger 連携
   - ページ遷移トランジション(リンククリック横取り、黒幕スライド)

4. **Phase 4: 各ページ実装(並列可)**
   - **index.html**: Hero(タイポアニメ + パララックス) / Introduction 01-03 / 地域マップ / People プレビュー
   - **about.html**: ミッション、設立背景、校長メッセージ、年表
   - **curriculum.html**: 3つの柱(デザイン/エンジニアリング/起業家精神)、5年間タイムライン
   - **campus.html**: 神山町紹介、キャンパス写真ギャラリー、寮生活
   - **admissions.html**: スカラシップ、入試スケジュール、FAQ、お問い合わせ(mailto)

5. **Phase 5: 仕上げ**
   - レスポンシブ調整(モバイル: ハンバーガーメニュー, タイポ縮小)
   - アクセシビリティ(`prefers-reduced-motion` でアニメ無効化、alt 属性、コントラスト)
   - Lighthouse 計測 → 画像 WebP 化、フォントサブセット
   - README に開発手順/デプロイ手順を日本語で記載

## Relevant files (新規作成)

- `vite.config.ts` — multi-page entry と `base` 設定
- `.github/workflows/deploy.yml` — Pages Actions デプロイ
- `src/data/school.ts` — 公式情報のシングルソース
- `src/scripts/main.ts` / `animations.ts` / `transitions.ts` — 共通スクリプト(GSAP, Lenis, ScrollTrigger 初期化)
- `src/styles/variables.css` — 色(`#ffffff`/`#0a0a0a`)とタイポトークン
- `src/styles/reset.css` / `global.css` / `pages/*.css`
- `src/components/` — header/footer を HTML 文字列で注入する関数
- `index.html` / `about.html` / `curriculum.html` / `campus.html` / `admissions.html`
- `public/images/` — モノクロ写真素材, `public/favicon.svg`
- `tsconfig.json` / `package.json` / `.gitignore` / `README.md`

## アニメーション仕様(全部盛り)

- **イントロローダー**: 黒背景 → ロゴフェード → 縦スライドアップで本編登場(約1.2s)
- **Hero**: タイトルを 1 文字ずつ split してスタガー表示 + 背景に SVG 波形/グリッドのパララックス
- **スクロール連動**: 各セクション fade-up / slide-in (`ScrollTrigger.batch` で軽量化)
- **数字カウントアップ**: Introduction 02「データから読み解く」で 0 → 実数値へ
- **ホバー**: ボタンに magnetic 効果、画像に scale + 黒オーバーレイ
- **パララックス**: Hero 背景 / Campus 背景写真
- **ページ遷移**: クリック時に黒幕がスライドイン → 次ページで明けるトランジション
- **スムーススクロール**: Lenis でぬるっと

## ビジュアル方針(白黒基調)

- **色**: 背景 `#ffffff` / 文字 `#0a0a0a` / ライン `#1a1a1a` / アクセントは反転白のみ
- **タイポ**: 見出しは特大ウェイト + 字間広め、本文は読みやすさ重視
- **フォント**: `Inter`(英) + `Noto Sans JP`(和) + 手書き風 `Caveat`
- **画像**: モノクロフィルター(`filter: grayscale(1) contrast(1.05)`)で統一
- **手書き風**: 添付の「未来につなげる環境で...」風テイストを `Caveat` か SVG パスアニメで再現

## Verification

1. `npm run dev` で全 5 ページ表示確認
2. `npm run build && npm run preview` でビルド成果物動作確認
3. Chrome DevTools Performance で 60fps 維持確認
4. PR マージ後、Actions が success で `https://mei-inoue.github.io/ghcp-school-intro-mei/` にアクセス可
5. Lighthouse Accessibility 90+ 目標、`prefers-reduced-motion` ON 時にアニメ抑制を目視確認

## Decisions

- **複数ページ + Vite multi-page**: SEO とコード分割のしやすさを優先(SPA より素直)
- **GSAP 採用**: ScrollTrigger ほぼ必須、GitHub Pages の非商用利用は OK
- **白黒厳守**: 添付画像は青系アクセントがあるがユーザー要望どおりモノクロ統一(写真もグレースケール化)
- **`prefers-reduced-motion` 対応必須**: アニメ全部盛りでもアクセシビリティ確保
- **ビルド方式**: `main` 直公開ではなく Actions デプロイ(Vite ビルドが必要なため)

## スコープ外

- お問い合わせフォームのバックエンド送信(mailto で代替)
- CMS / 管理画面
- 多言語対応(日本語のみ)
- 検索機能、ニュース動的取得

## Further Considerations

1. **学校ロゴと写真素材の扱い** — 公式画像引用 OK か、自作タイポ + フリー素材(Unsplash 等)で代替するか。著作権的にはフリー素材 + 自作タイポ推奨だが雰囲気は落ちる。
2. **リポジトリ名 `ghcp-school-intro-mei`** — URL に出る(`/ghcp-school-intro-mei/`)。このままで良いかリネームするか。
3. **公式情報の確度** — `curl` 取得 + パースで進める計画。JS レンダリング前提だと取れない項目があり、その場合は一般知識 + ユーザー確認で埋める前提で良いか。
