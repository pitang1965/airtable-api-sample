<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Airtable API Sample
</h1>

## 概要
Airtableから [Over 40 Web Club](https://over40webclub.netlify.app/)のメンバーの情報を取得するサンプルコードです。
## 🚀 次の手順で作成しました

1.  **Gatsbyサイトの作成**

    Gatsbyの新しいサイトを作成するため、最小限のスターターを指定するGatsby CLIを使用します。

    ```shell
    npm init gatsby
    ```

2.  **開発の開始**

    新しいサイトのディレクトリに移動して、開発サーバーを起動します。

    ```shell
    cd my-gatsby-site/
    npm run develop
    ```

3. **Airtableとの接続**

ルートディレクトリに .env.development 及び .env.production というファイルを作成し、以下の環境変数を設定します。デプロイする場合も同じものを設定します。

```shell
# Airtable API Key (Help > API Documentation)
AIRTABLE_API_KEY="key**************"
AIRTABLE_BASE_ID="app**************"
AIRTABLE_TABLE_NAME="Members directory"
```

4.  **コードを編集してカスタマイズ**

    サイトは http://localhost:8000! で実行されます。

　　まずは [こちら](https://github.com/pitang1965/airtable-api-sample/commit/bb0b23df5acee9cf83e14e5810b535b10cefdc3d)の編集をおこないました。

主な変更は以下です。
* .env.* ファイルの追加
* Gatsby関連ファイルをv3.* に最新化
* [gatsby-source-airtable](https://www.gatsbyjs.com/plugins/gatsby-source-airtable/)の追加
* src/components/TeamMembers.js 及び TeamMember.js の追加
* src/pages/index.js の変更（その他不要コード削除）

5.  **参考資料**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
