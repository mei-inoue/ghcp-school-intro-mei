# 神山まるごと高専 紹介サイト 要件定義 (requirements.md)

## 1. プロジェクト概要

- **目的**: 神山まるごと高専(徳島県神山町・5年制私立高専)の魅力を、辻・本郷サイト風の **白黒モノクロ × 全身全霊アニメ** で伝える非公式紹介サイトを構築する。
- **公開先**: GitHub Pages (`https://mei-inoue.github.io/ghcp-school-intro-mei/`)
- **技術スタック**: Vite (vanilla-ts) + TypeScript + GSAP + Lenis、Multi-Page 構成
- **デプロイ**: GitHub Actions (`actions/configure-pages` + `upload-pages-artifact` + `deploy-pages`)

## 2. ステークホルダー & ペルソナ

- **メンテナ (mei-inoue)**: リポジトリ管理者。日本語で運用。
- **訪問者 A: 中学生 / 保護者**: 進路選択検討中。学費・カリキュラム・寮生活が知りたい。
- **訪問者 B: 教育関係者 / メディア**: 学校の特色・理念を素早く把握したい。
- **訪問者 C: デザイン感度高めの一般閲覧者**: 「サイトかっこええな」で滞在してくれる層。

## 3. 機能要件 (EARS 記法)

### 3.1 共通レイアウト / ナビゲーション

- **REQ-COM-01 (Ubiquitous)**: THE SYSTEM SHALL 全ページにロゴ・グローバルナビ・ENTRY ボタン・ハンバーガー(モバイル)を含む共通ヘッダーを表示する。
- **REQ-COM-02 (Ubiquitous)**: THE SYSTEM SHALL 全ページに住所・SNS リンク・コピーライトを含む共通フッターを表示する。
- **REQ-COM-03 (Event-driven)**: WHEN ユーザがグローバルナビのリンクをクリックした THE SYSTEM SHALL 黒幕スライドのページ遷移トランジションを再生してから次ページを表示する。
- **REQ-COM-04 (State-driven)**: WHILE ビューポート幅が 768px 未満である THE SYSTEM SHALL ハンバーガーメニューでナビを折りたたむ。

### 3.2 イントロローダー / Hero

- **REQ-INT-01 (Event-driven)**: WHEN トップページが初回ロードされた THE SYSTEM SHALL 黒背景 → ロゴフェード → 縦スライドアップのイントロを約 1.2 秒以内で再生する。
- **REQ-HER-01 (Event-driven)**: WHEN Hero セクションが表示された THE SYSTEM SHALL タイトル文字列を 1 文字ずつ split してスタガー表示し、背景に SVG 波形/グリッドのパララックスを動かす。

### 3.3 スクロール / アニメーション

- **REQ-ANM-01 (Ubiquitous)**: THE SYSTEM SHALL Lenis によるスムーススクロールを全ページで有効化する。
- **REQ-ANM-02 (Event-driven)**: WHEN 各セクションがビューポートに 20% 入った THE SYSTEM SHALL `ScrollTrigger.batch` を使った fade-up / slide-in を再生する。
- **REQ-ANM-03 (Event-driven)**: WHEN Introduction 02「データから読み解く」がビューポートに入った THE SYSTEM SHALL 数字を 0 から実数値へカウントアップする。
- **REQ-ANM-04 (Event-driven)**: WHEN ボタンに hover した THE SYSTEM SHALL magnetic 効果を適用する。
- **REQ-ANM-05 (Event-driven)**: WHEN 画像に hover した THE SYSTEM SHALL scale + 黒オーバーレイのトランジションを適用する。
- **REQ-ANM-06 (Unwanted behavior)**: IF ユーザの OS / ブラウザが `prefers-reduced-motion: reduce` を指定している THEN THE SYSTEM SHALL すべての装飾アニメ(イントロ/パララックス/カウントアップ/ページ遷移幕)を無効化または即時表示に置換する。

### 3.4 ページ別コンテンツ

- **REQ-PAGE-01 (Ubiquitous)** `index.html` SHALL Hero / Introduction 01-03 / 地域マップ / People プレビューを含む。
- **REQ-PAGE-02 (Ubiquitous)** `about.html` SHALL ミッション / 設立背景 / 校長メッセージ / 年表を含む。
- **REQ-PAGE-03 (Ubiquitous)** `curriculum.html` SHALL 3つの柱(デザイン / エンジニアリング / 起業家精神)と 5 年間タイムラインを含む。
- **REQ-PAGE-04 (Ubiquitous)** `campus.html` SHALL 神山町紹介 / キャンパス写真ギャラリー / 寮生活セクションを含む。
- **REQ-PAGE-05 (Ubiquitous)** `admissions.html` SHALL スカラシップ / 入試スケジュール / FAQ / `mailto:` のお問い合わせを含む。

### 3.5 データ管理

- **REQ-DAT-01 (Ubiquitous)**: THE SYSTEM SHALL 学校名/所在地/設立年/教育理念/学科/スカラシップ/入試/SNS 等を `src/data/school.ts` に集約してシングルソース化する。
- **REQ-DAT-02 (Event-driven)**: WHEN 公式サイトから取得できない項目があった場合 THE SYSTEM SHALL ユーザに確認を求めるための TODO コメントをデータファイルに残す。

### 3.6 デプロイ

- **REQ-DEP-01 (Event-driven)**: WHEN `main` ブランチに push された THE SYSTEM SHALL GitHub Actions で Vite ビルドを実行し、`dist/` を Pages にデプロイする。
- **REQ-DEP-02 (Ubiquitous)**: THE SYSTEM SHALL `vite.config.ts` の `base` を `'/ghcp-school-intro-mei/'` に設定する。

## 4. 非機能要件

| ID | カテゴリ | 要件 |
| --- | --- | --- |
| NFR-PERF-01 | パフォーマンス | スクロール / アニメ中 60fps を Chrome DevTools Performance で維持 |
| NFR-PERF-02 | パフォーマンス | Lighthouse Performance 80+ を目標 (画像 WebP 化、フォントサブセット) |
| NFR-A11Y-01 | アクセシビリティ | Lighthouse Accessibility 90+ |
| NFR-A11Y-02 | アクセシビリティ | 全画像に `alt` 属性、装飾画像は `alt=""` |
| NFR-A11Y-03 | アクセシビリティ | コントラスト比 WCAG AA (`#0a0a0a` on `#ffffff` で 19:1 確保) |
| NFR-A11Y-04 | アクセシビリティ | `prefers-reduced-motion` 対応 (REQ-ANM-06) |
| NFR-RESP-01 | レスポンシブ | 360 / 768 / 1024 / 1440px で崩れない |
| NFR-SEO-01 | SEO | 各ページに `<title>` / `<meta name="description">` / OGP を設定 |
| NFR-BRWS-01 | ブラウザ | 最新 2 メジャーバージョンの Chrome / Safari / Firefox / Edge |
| NFR-I18N-01 | 言語 | 日本語のみ (多言語対応はスコープ外) |

## 5. ビジュアル要件 (デザイントークン)

- **色**: `--color-bg: #ffffff` / `--color-fg: #0a0a0a` / `--color-line: #1a1a1a` / アクセントは反転(白文字×黒背景)のみ
- **タイポ**: 見出し: 特大ウェイト + 字間広め (`letter-spacing: 0.04em` 目安) / 本文: 読みやすさ優先 (line-height 1.7+)
- **フォント**: `Inter` (英) + `Noto Sans JP` (和) + `Caveat` (手書き風アクセント)
- **画像処理**: `filter: grayscale(1) contrast(1.05)` を全画像に適用
- **手書き風表現**: 「未来につなげる環境で...」風テキストは `Caveat` または SVG パスアニメで再現

## 6. 制約 / 前提

- **CON-01**: GitHub Pages 静的配信 (サーバサイド処理不可)
- **CON-02**: GSAP は非商用 GitHub Pages 利用前提で標準ライセンスを使用
- **CON-03**: 公式画像の著作権が不明な場合はフリー素材 (Unsplash 等) + 自作タイポで代替
- **CON-04**: 公式サイトが JS レンダリング前提の場合、`curl` で取れない項目はユーザ確認 or 一般知識で補完

## 7. スコープ外

- お問い合わせフォームのバックエンド送信 (mailto で代替)
- CMS / 管理画面
- 多言語対応
- 検索機能、ニュース動的取得

## 8. 受入基準 (Acceptance Criteria)

1. `npm run dev` で 5 ページすべて表示できる。
2. `npm run build && npm run preview` でビルド成果物が動作する。
3. PR マージ後、GitHub Actions が success で `https://mei-inoue.github.io/ghcp-school-intro-mei/` にアクセスできる。
4. Chrome DevTools Performance でスクロール時 60fps を維持。
5. Lighthouse Accessibility 90+。
6. OS で `prefers-reduced-motion: reduce` ON 時にアニメが抑制される。
7. 全ページのナビ・フッター・ページ遷移トランジションが共通動作する。

## 9. 未確定事項 (要ユーザ確認)

- **Q-01**: 公式ロゴ / 写真の引用可否 (NG ならフリー素材 + 自作タイポで代替)
- **Q-02**: リポジトリ名 `ghcp-school-intro-mei` を維持するか (URL に出る)
- **Q-03**: 公式サイトが JS レンダリングで `curl` 取得が困難だった場合、一般知識 + ユーザ確認で進めて良いか

## 10. Confidence Score

- **総合: 78% (Medium)**
- 根拠: 技術選定・デザイン方針・ページ構成は明確やが、(a) 公式情報の取得可否、(b) 画像素材の権利、(c) GSAP プラグイン (Splittext 等の有償) の要否、で不確実性あり。よって DESIGN フェーズでは **PoC ファースト** (Phase 1+3 の最小骨組みを先に立ち上げ → 残りページを順次拡張) で進める。
