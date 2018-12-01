# GoogleアシスタントのE2Eテストライブラリの使い方
## はじめに
GoogleアシスタントのE2Eテストができる[actions-on-google-testing-nodejs](https://github.com/actions-on-google/actions-on-google-testing-nodejs)ライブラリの使い方をまとめました。

そもそもの注意点があります。
- 2018/12時点でAlpha版であり、破壊的なAPIの変更はあり得る。(たぶんある)
- Surfaceを指定できない。BasicCardやCarouselなどのRich Responseの確認ができない

まだ開発途中のものだが、設定さえしてしまえば簡単に利用でき、シンプルな応答のテストに活用できます。  
本家のGoogleが作っていることもあり、今後の改善改良に期待したいところです。

## 導入方法

- [actions-on-google/actions-on-google-testing-nodejs](https://github.com/actions-on-google/actions-on-google-testing-nodejs)
- [Googleアシスタント向けアプリのEnd to Endテストライブラリの使い方](https://www.eisbahn.jp/yoichiro/2018/07/actions_on_google_testing_ja.html)

を参考にすると良いでしょう。

大まかにやることは、以下となります。
1. テスト用AoGの新規プロジェクトを「Device Registration」として作成
2. ローカルにテストファイルを置くディレクトリを用意
3. Nodeの依存ライブラリのインストール
4. GoogleAssistant APIの有効化と、OAth認証用のcredential.jsonの取得と作成
5. テストを書く、実行

## 使い方
```
npm test  
```
※コマンドを`package.json`に定義しています。

実行時のコンソールログを参考に、`logs/exec-console-log.txt`に載せてあります。