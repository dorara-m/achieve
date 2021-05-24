# Viteでつくる予定達成率計測アプリ

## 起動
```
npm i
npm run dev
```

## 仕様
毎日、予定の達成率を記録して振り返るアプリ。

## done
* [fix] GithubPagesで動かない問題 -> viteでbuildしてないから -> netlifyに移行して解決
* [fix] データが一部消し飛んでる問題 -> 上書き編集したときにsaveItemsしてなかった
* [add] 平均達成率、直近5日

## todo
* [add] 月の平均達成率 @doing
  * Day.jsつかうといかも。
  * https://qiita.com/tobita0000/items/0f9d0067398efdc2931e
* [mod] メモのインプットをテキストエリアに
* [mod] 日付順にデータを並び替える機能
* [mod] データを削除する機能
* [mod] データを編集する機能
* [add] 先月の平均とかをプルダウンで呼び出せるように
* [mod] 見た目
* [mod] inputAreaのvueを整理
* [mod] sass対応
* [mod] firebase連携

## ログ
* 2021-05-07 基本機能完成- 試用開始。
* 2021-05-07 平均機能実装~
