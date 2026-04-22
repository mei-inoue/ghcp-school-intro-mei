# GitHub Pages 参考ドキュメント

## 公式ドキュメント

- GitHub Pages 全体: https://docs.github.com/ja/pages
- GitHub Pages の概要: https://docs.github.com/ja/pages/getting-started-with-github-pages/about-github-pages
- GitHub Pages サイトの作成: https://docs.github.com/ja/pages/getting-started-with-github-pages/creating-a-github-pages-site
- 公開元の設定: https://docs.github.com/ja/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- カスタムドメイン設定: https://docs.github.com/ja/pages/configuring-a-custom-domain-for-your-github-pages-site
- GitHub Pages と Jekyll: https://docs.github.com/ja/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll

## 参照時の見方

- 構成選定で迷ったら、まず「概要」と「サイトの作成」を見る
- ブランチ公開か Actions 公開かで迷ったら、「公開元の設定」を優先して確認する
- 独自ドメインを使う場合は、「カスタムドメイン設定」を必ず確認する
- Jekyll を使うかどうかで迷ったら、「GitHub Pages と Jekyll」を確認する

## 判断メモ

- ビルド不要な静的サイトはブランチ公開が簡単
- ビルド成果物を配信する構成は Actions 公開が扱いやすい
- Project site は公開URLにリポジトリ名が入るため、パス設定の確認が重要