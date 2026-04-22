# ghcp-school-intro

Astro で構築した、神山まるごと高専の紹介用バイリンガル静的サイトです。日本語と英語の 1 ページ LP を GitHub Pages 向けに出力します。

## Setup

```bash
nvm use
npm ci
npm run dev
```

開発サーバー:

- 日本語: http://localhost:4321/ghcp-school-intro-mei/ja/
- 英語: http://localhost:4321/ghcp-school-intro-mei/en/

本番ビルド:

```bash
npm run build
npm run preview
```

## GitHub Pages

1. GitHub Actions の `Deploy Astro site` を有効にした状態で対象ブランチへ push します。
2. リポジトリの Settings → Pages を開きます。
3. Source を `Deploy from a branch` に設定します。
4. Branch を `gh-pages`、フォルダを `(root)` に設定します。
5. 公開 URL は https://mei-inoue.github.io/ghcp-school-intro-mei/ です。

## Notes

- `astro.config.mjs` で `site` と `base` を GitHub Pages 用に設定しています。
- 学校情報は公開情報を要約し、公式サイトへの導線を設けています。
- 画像は `public/placeholders/` 配下のモノクロ SVG プレースホルダです。
