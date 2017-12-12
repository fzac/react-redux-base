# react-redux-base
本リポジトリはreact,reduxのSPAのbaseです。

# Development

    yarn install

    # ホットリスタートによる開発
    yarn run start

    # 各種環境に向けたdistの作成
    yarn build-dev
    yarn build-stg
    yarn build-prd

    # スタイル確認
    yarn run lint
    yarn run lint:js (JSのみ)
    yarn run lint:css (CSSのみ)


## 仕様ライブラリ

    * react - view エンジン
    * redux - Flux フレームワーク
    * rect-router - URLルーティングライブラリ
    * react-router-redux - reduxとreact-routerの同期
    * redux-logger - ログミドルウェア
    * redux-thunk - 非同期ミドルウェア
    * axios - HTTP クライアント
    * react-icons - アイコンのreactコンポーネント
    * aphrodite - CSS in JSのname mangling
    * lodash - ユーティリティベルト
    * webpack - ビルドツール
    * babel - トランスパイル
    * eslint - リンタ
    * stylelint - CSSリンタ
    * url-loader, file-loader - import 宣言で画像を使えるようにする
