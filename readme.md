# Viteでつくる予定達成率計測アプリ

## 起動
```
npm i
npm run dev
```

## 仕様
毎日、日付、予定の達成率、コメントを記録していくアプリ。
githubpagesで動かせないので、一旦は手元で動かしていく。

## done
* [fix] GithubPagesで動かない問題 -> viteでbuildしてないから -> netlifyに移行して解決
* [fix] データが一部消し飛んでる問題 -> 上書き編集したときにsaveItemsしてなかった

## todo
* [add] 平均達成率 @doing
* [mod] メモのインプットをテキストエリアに
* [mod] 日付順にデータを並び替える機能
* [mod] データを削除する機能
* [mod] データを編集する機能
* [mod] 見た目
* [mod] inputAreaのvueを整理
* [mod] sass対応
* [mod] firebase連携

## ログ
* 2021-05-07 基本機能完成- 試用開始。
* 2021-05-07 平均機能実装~
