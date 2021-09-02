# Viteでつくる予定達成率計測アプリ

## 起動
```
npm i
npm run dev
```

## 仕様
毎日、予定の達成率を記録して振り返るアプリ。

## done
* [fix] GithubPagesで動かない問題 -> viteでbuildしてないから -> netlifyに移行して自動ビルドで解決
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
* [mod] 並び替えで、毎度並び替えずに日付が古いときだけにsortするように。
* [mod] データを編集する機能
  * contentEditableを活用
* [mod] 長文で記録すること多い問題。少なくとも仕事視点、家事視点、趣味視点がある。達成率も平均でそれぞれ入力して出るように。
* [fix] memo1,memo2を編集して反映できていないっぽい。

## todo
* [mod] log要素、それぞれクリックしてらモーダルみたいに開いて確認できるようにしたほうが見やすいかも。
* [add] 月ごとに表示
  * [mod] データ構造の見直し。月ごとにオブジェクトが別れてその中にアイテムがあった方が良いか。
    * 年、月、日でわかれているイメージにする。
      * input側ではそのまま受け取って、app側で分解する。
      * sample.jsonみたいな形でデータ入るように整形
        [x] 年月日があるかどうかデータで条件分岐
        [] 表示を年月日に対応させる @doing
        [] 条件に応じてオブジェクト生成
  * セレクトボックスにしてみる。一旦全部の月が出るようにしておいて、ないときはない。

* [mod] 平均値、1日しかない場合は「平均に必要な値がありませんと出す」
* [add] 先月, 先々月も呼び出せるように関数うまいことする
* [mod] 親子の受け渡しが汚い問題
* [add] 先月の平均とかをプルダウンで呼び出せるように
* [mod] 日付にデフォルトで今日が設定されるように
* [mod] 日付順並び替えのとこ、dayjsなくてもいいかも
* [mod] 見た目
* [mod] textAreaでいれた改行が表示データにも反映されるように
* [fix] fiveDaysAverageで、未来の値も受け取っちゃう問題
* [mod] inputAreaのvueを整理
* [mod] sass対応
* [mod] firebase連携
* [mod] 1週間とか1ヶ月とか継続入力したら星がつくとか、ご褒美システム
* [mod] %の入力に制限をつけられないか。最大100%としたい。
* [mod] 日付の選択するとこで、昨日のボタンがほしい？（次の日入力当たり前にするようで微妙かも。
* [mod] %の遷移をグラフとかで描画する
* [mod] 日付のところデフォで今日の日付入るようにしときたい。

## ログ
* 2021-05-07 基本機能完成- 試用開始。
* 2021-05-07 平均機能実装~
* 2021-05-28 微タスク
* 2021-06-04 データの並び替え
* 2021-06-08 データの削除
* 2021-06-14 データの編集~
* 2021-06-24 編集まで完成
