# Plan: 神山まるごと高専 紹介サイト (GitHub Pages)

Astro で日英バイリンガル静的サイトを構築し、白黒のエディトリアル風デザインで5セクション（Hero / About / Curriculum / Student Life / Access）を実装。`gh-pages` ブランチへ GitHub Actions で自動デプロイする。

## Steps

### Phase 1: プロジェクト初期化
1. `npm create astro@latest .` 相当で Astro プロジェクト雛形を作成（Minimal、TypeScript strict、Tailwind なし＝素のCSS）。
2. `astro.config.mjs` で `site` と `base` を設定（リポジトリ名 `ghcp-school-intro-mei` 用）、i18n 設定（`defaultLocale: "ja"`, `locales: ["ja", "en"]`, `routing.prefixDefaultLocale: true`）。
3. `.gitignore`, `.nvmrc`(Node 20), `package.json` の `scripts`（dev/build/preview）整備。

### Phase 2: デザインシステム
4. `src/styles/global.css` で B&W パレット（`--bg:#fff`, `--fg:#0a0a0a`, `--muted:#6b6b6b`, `--rule:#111`）、罫線、Serif 見出し（Noto Serif JP / Playfair Display）＋Sans 本文（Inter / Noto Sans JP）、ベースライン、コンテナ幅 (max 1200px)、レスポンシブブレークポイント定義。
5. 共通レイアウト `src/layouts/BaseLayout.astro`：`<head>` に OGP/メタ/フォント、ヘッダー（ロゴワード＋言語スイッチ ja/en＋ナビ）、フッター（コピーライト＋公式サイトリンク）。
6. 再利用コンポーネント `src/components/`：`Hero.astro`（大判キャッチコピー＋プレースホルダ画像）、`Section.astro`（番号付き見出し＋罫線）、`LangSwitch.astro`、`Nav.astro`。

### Phase 3: コンテンツ実装（プレースホルダ＋公式情報引用）
7. 翻訳辞書 `src/i18n/ja.ts`, `src/i18n/en.ts` を作成し、各セクションのキー（hero.title, about.body, curriculum.items[], life.body, access.address, access.officialUrl 等）を定義。出典リンクは https://kamiyama.ac.jp/ を引用。
8. `src/pages/ja/index.astro` と `src/pages/en/index.astro`：BaseLayout を使い、Hero → About → Curriculum → Student Life → Access の順で構成（1ページ完結 LP）。
9. ルート `src/pages/index.astro` は言語自動振り分け（`<meta http-equiv="refresh">` で `/ja/` へ）または簡易ランディング。

### Phase 4: 画像/SVGプレースホルダ
10. `public/placeholders/` に SVG プレースホルダ（hero, campus, classroom, dorm 用）を配置。`alt` テキストは i18n 対応。

### Phase 5: デプロイ
11. `.github/workflows/deploy.yml` を作成：`actions/checkout` → `withastro/action@v3`（または手動 `npm ci && npm run build` ＋ `peaceiris/actions-gh-pages@v4`）で `dist/` を `gh-pages` ブランチへ push。
12. README に GitHub Pages 設定手順を追記：Settings → Pages → Source: `Deploy from a branch` → Branch: `gh-pages` / `(root)`。
13. リポジトリ Settings の Pages を上記設定に切り替え（ユーザー作業）。

## Relevant files
- `astro.config.mjs` — `site: "https://mei-inoue.github.io"`, `base: "/ghcp-school-intro-mei"`, i18n 設定
- `src/layouts/BaseLayout.astro` — 共通レイアウト、フォント読込、言語スイッチ配置
- `src/components/Hero.astro`, `Section.astro`, `LangSwitch.astro`, `Nav.astro`
- `src/styles/global.css` — B&W トークン、Serif/Sans タイポ、罫線スタイル
- `src/i18n/ja.ts`, `src/i18n/en.ts` — 翻訳辞書
- `src/pages/ja/index.astro`, `src/pages/en/index.astro`, `src/pages/index.astro`
- `public/placeholders/*.svg` — モノクロ SVG プレースホルダ
- `.github/workflows/deploy.yml` — gh-pages 自動デプロイ
- `README.md` — セットアップとデプロイ手順を追記（既存の git コマンドメモは温存）

## Verification
1. `npm run dev` でローカル起動し、`http://localhost:4321/ghcp-school-intro-mei/ja/` と `/en/` を目視確認。
2. `npm run build` がエラーなく完了し、`dist/ja/index.html`, `dist/en/index.html` が生成される。
3. レスポンシブ確認（375px / 768px / 1280px）、配色がモノクロのみで構成されているか DevTools で確認。
4. リンクチェック：言語スイッチ、ナビ内アンカー、公式サイトへの外部リンク（`target="_blank" rel="noopener"`）。
5. GitHub Actions が成功し、`gh-pages` ブランチが更新され、`https://mei-inoue.github.io/ghcp-school-intro-mei/` にアクセスできる。
6. Lighthouse でアクセシビリティ ≥ 95、SEO ≥ 90 を目安に確認。

## Decisions
- **SSG**: Astro（i18n ルーティングが標準サポート、ビルドがシンプル）。
- **i18n**: `/ja`, `/en` の独立ルート。ルート `/` は `/ja` へリダイレクト。
- **デザイン**: エディトリアル風 B&W。Serif 見出し＋細罫線。色は白黒＋無彩色グレーのみ。
- **画像**: 用意なし → モノクロ SVG プレースホルダで進行。差し替えポイントを `public/placeholders/` に集約。
- **連絡先**: 公式サイト https://kamiyama.ac.jp/ への誘導リンクのみ（独自フォーム・メールは載せない）。
- **学校情報**: 一般公開情報（設立年、所在地、3学科構成「テクノロジー＆デザイン学科」など）を引用元リンク付きで掲載。
- **デプロイ**: `gh-pages` ブランチへ Actions で自動 push。手動でブランチ作る必要なし（Actions が初回作成）。

## Excluded (今回やらないこと)
- お問い合わせフォーム、CMS 連携、ブログ、検索機能、アニメーション過剰演出。
- 教員紹介・ニュース・募集要項セクション（ヒアリングで未選択）。
- ダークモード（B&W のため不要と判断）。

## Further Considerations
1. **独自ドメイン**: 将来 `CNAME` を追加する場合、`astro.config.mjs` の `base` を `/` に戻す必要あり。今回はサブパス前提。
2. **フォント配信**: Google Fonts CDN を使うか、self-host するか。推奨: CDN（軽量・即時）。プライバシー重視なら self-host。
3. **公式情報の引用範囲**: スクリーンショットや写真は著作権上使えないため、テキスト要約＋出典リンクのみに統一。問題ないか最終確認。
