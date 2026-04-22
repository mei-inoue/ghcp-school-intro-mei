---
name: github-pages-setup
description: 'GitHub Pages の構築、公開設定、運用方針の整理に使う Skill。Use when: GitHub Pages site setup, publishing source selection, custom domain configuration, Jekyll usage, static site deployment, Pages troubleshooting.'
argument-hint: '公開したいサイトの構成、使用技術、独自ドメインの有無を書く'
user-invocable: true
disable-model-invocation: false
---

# GitHub Pages 構築

GitHub Pages でサイトを公開するための手順を整理し、構成選定から公開確認まで一貫して進めるための Skill です。

## こんなときに使う

- GitHub Pages で新しくサイトを公開したい
- 既存リポジトリを Pages 対応にしたい
- ブランチ公開と GitHub Actions 公開のどちらを使うべきか判断したい
- カスタムドメイン設定の手順を整理したい
- Jekyll を使うか、静的ビルド成果物だけを配信するか決めたい
- Pages の公開元や公開URLが分からず詰まっている

## 入力であると助かる情報

- リポジトリ名
- User/Organization site か Project site か
- 生成物がそのまま静的ファイルか、ビルドが必要か
- 公開元にしたいブランチやディレクトリ
- カスタムドメイン利用の有無

## 進め方

1. 公開タイプを確認する

- User/Organization site なら通常は `https://<owner>.github.io/` が公開URL候補です。
- Project site なら通常は `https://<owner>.github.io/<repository>/` が公開URL候補です。
- リポジトリ名と公開URLの対応が重要なので、最初にここを明確にします。

2. 公開方法を選ぶ

- 単純な静的ファイルをそのまま出すなら、ブランチまたはフォルダを公開元にする方法を優先します。
- フレームワークのビルド成果物を出すなら、GitHub Actions によるデプロイを優先します。
- 判断に迷う場合は、ビルドの有無を基準に選びます。

3. 公開元を決める

- ブランチ公開: `main` などの既存ブランチの `/ (root)` か `/docs` を公開元にします。
- Actions 公開: ワークフローで生成した成果物を GitHub Pages に配信します。
- リポジトリの構成と既存運用に合わせて、変更範囲が小さい方法を選びます。

4. Jekyll の扱いを決める

- Jekyll テーマや変換機能を使うなら Jekyll 前提で進めます。
- 単純な HTML/CSS/JS 配信や他ツールのビルド成果物を置くなら、Jekyll を使わない構成でも構いません。
- Jekyll を無効化したいときは、必要に応じて `.nojekyll` を検討します。

5. 必要なファイル配置を整理する

- そのまま公開する場合は、エントリーファイルが公開元ディレクトリに存在することを確認します。
- Project site の場合は、相対パスや `base path` 設定が公開URLと一致しているか確認します。
- Actions を使う場合は、ビルド成果物の出力先が一意に定まっているか確認します。

6. リポジトリ設定を構成する

- GitHub の Pages 設定で公開元を指定します。
- Actions 公開なら公式アクション構成をベースにします。
- 公開後に URL、反映時間、ビルド成否を確認します。

7. カスタムドメインが必要なら追加設定する

- `CNAME` の配置方法と DNS 設定の対応を確認します。
- HTTPS 強制の有無を確認します。
- Apex domain と subdomain で必要な DNS レコードが異なる点に注意します。

8. 完了条件を確認する

- 公開URLにアクセスできる
- 404 にならない
- CSS/JS/画像パスが崩れていない
- 必要ならカスタムドメインでも到達できる
- 今後の更新手順が README や運用メモに残っている

## 分岐の目安

### ブランチ公開を選ぶケース

- HTML/CSS/JS を直接コミットしている
- ビルド不要である
- 運用をできるだけ簡単にしたい

### Actions 公開を選ぶケース

- Vite、Next.js の静的エクスポート、Astro などビルドが必要
- デプロイ対象を生成物に限定したい
- CI と公開処理を分離したい

### Jekyll を選ぶケース

- GitHub Pages 標準の Jekyll 機能を活用したい
- ブログやドキュメントサイトを簡単に構成したい

### Jekyll を使わないケース

- プレーンな静的サイトを置くだけ
- 別の SSG やビルドツールが成果物を生成する

## 実行時の出力方針

- まず現在のリポジトリ構成から最小構成の公開方法を提案する
- 必要ならブランチ公開案と Actions 公開案を比較する
- 公式ドキュメントに沿って設定箇所を案内する
- 実装を伴う場合は、必要ファイル、設定変更、確認手順まで具体化する

## 参照資料

- [GitHub Pages 参考ドキュメント](./references/github-pages-docs.md)
