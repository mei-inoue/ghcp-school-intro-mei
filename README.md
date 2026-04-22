# 神山まるごと高専 紹介サイト (非公式)

徳島県神山町の私立高専「神山まるごと高専」を、白黒モノクロ × フルアニメで紹介する **非公式ファンサイト** や。Vite + TypeScript + GSAP + Lenis の Multi-Page 構成で、GitHub Pages にデプロイされとる。

## ライブ URL

`https://mei-inoue.github.io/ghcp-school-intro-mei/`

## 技術スタック

- Vite (vanilla-ts, Multi-Page)
- TypeScript
- GSAP / ScrollTrigger
- Lenis (スムーススクロール)
- GitHub Actions + GitHub Pages

## ページ構成

| ファイル | 役割 |
| --- | --- |
| `index.html` | Hero / Introduction 01-03 / 地域マップ / People |
| `about.html` | ミッション / 設立背景 / 校長メッセージ / 年表 |
| `curriculum.html` | 3つの柱 / 5年間タイムライン |
| `campus.html` | 神山町紹介 / ギャラリー / 寮生活 |
| `admissions.html` | スカラシップ / 入試 / FAQ / お問い合わせ |

## 開発

```bash
npm install
npm run dev      # http://localhost:5173/ghcp-school-intro-mei/
npm run build    # dist/ にビルド
npm run preview  # ビルド成果物をローカル確認
```

## デプロイ

`main` ブランチに push すると `.github/workflows/deploy.yml` が走って GitHub Pages にデプロイされる。Vite の `base` は `/ghcp-school-intro-mei/` 固定。

## アクセシビリティ

OS / ブラウザで `prefers-reduced-motion: reduce` が指定されとる場合、装飾アニメは全部抑制される。

## 注意

非公式の紹介プロジェクト。画像はプレースホルダで、本物の写真・ロゴは使うとらん。公式情報は [神山まるごと高専 公式サイト](https://kamiyama.ac.jp/) を参照してや。
