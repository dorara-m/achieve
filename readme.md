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
* [add] 直近5日の平均達成率（仮で上から5つのデータ取ってるだけ）
* [add] 今月の平均達成率
* [mod] 直近5日の平均達成率を、ちゃんと今日含めた5日を取得して計算するように。
* [mod] メモのインプットをテキストエリアに
* [mod] 曜日を表示したい
  * computedで引数もてない問題 -> methodsにしたら一発解決
* [fix] 今月の平均達成率バグ
* [mod] 日付順にデータを並び替える機能
  * sort関数でスマートに並び替えしてほしいけど変わらず。sort関数について知る必要あり。-> 記述ミス、return忘れ
* [mod] データを削除する機能

## todo
* [mod] 並び替えで、毎度並び替えずに日付が古いときだけにsortするように。
* [mod] データを編集する機能
* [add] 先月, 先々月も呼び出せるように関数うまいことする
* [add] 先月の平均とかをプルダウンで呼び出せるように
* [mod] 日付にデフォルトで今日が設定されるように
* [mod] 日付順並び替えのとこ、dayjsなくてもいいかも
* [mod] 見た目
* [mod] textAreaでいれた改行が表示データにも反映されるように
* [fix] fiveDaysAverageで、未来の値も受け取っちゃう問題
* [mod] inputAreaのvueを整理
* [mod] データ構造の見直し。月ごとにオブジェクトが別れてその中にアイテムがあった方が良いか。
* [mod] sass対応
* [mod] firebase連携
* [mod] 1週間とか1ヶ月とか継続入力したら星がつくとか、ご褒美システム
* [mod] %の入力に制限をつけられないか。最大100%としたい。

## ログ
* 2021-05-07 基本機能完成- 試用開始。
* 2021-05-07 平均機能実装~
* 2021-05-28 微タスク
* 2021-06-04 データの並び替え
