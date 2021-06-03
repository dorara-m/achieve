<template>
  <h2>平均値</h2>
  <p>{{fiveDaysAverage}}</p>
  <p class="small">※未入力の項目がある場合は5日以下の値が出ます（直近3日分など</p>
  <p>{{thisMonthAverage}}</p>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: 'AverageArea',
  props: ['val'],
  computed: {
    fiveDaysAverage: function() {
      let sum = 0
      let numOfTargets = 0
      const vals = this.val
      // 今日の日付を受け取る
      const today = dayjs()
      // 直近5日のときだけsumにいれる
      for (let i=0; i<vals.length; i++) {
        const valDate = dayjs(vals[i].date)
        // 今日から前5日以内のデータだけ取ってくる
        // 当てはまる日が5日もない場合->そもそもカウントされない。
        if (today.diff(valDate, 'day') <= 5) {
          // この条件だと未来の日数もカウントしちゃう…いつか解決
          sum += Number(vals[i].percent)
          numOfTargets++
        }
      }
      // そもそも当てはまる日が0の場合に対応
      if (numOfTargets != 0) {
        const average = Math.round(sum / numOfTargets)
        // 5日を満たすとは限らないので直近何日かを返すように。
        return `直近${numOfTargets}日の平均 : ${average}%`
      } else {
        return '直近の記録がありません。'
      }
      
    },
    // 1ヶ月分の平均処理
    thisMonthAverage: function() {
      // 今月を取得する
      const thisMonth = dayjs().month()
      // 今月にあたるデータを抽出する。
      const vals = this.val
      let numOfTargets = 0
      let sum = 0
      // 全部のvalのdateをday.jsに通して月の数値のみ取る。(valMonth)それと今月を比べて、valMonth - thisMonth = 0の範囲を今月のデータと判定する。その範囲だけsumに加算、個数を知りたいのでそれ用の変数に1ずつ足しておく。
      for (let i=0; i<vals.length; i++) {
        const valMonth = dayjs(vals[i].date).month()
        if (valMonth - thisMonth == 0) {
          numOfTargets++
          sum += Number(vals[i].percent)
        }
      }
      // 今月のデータが0個の場合
      if (sum == 0) {
        return `${thisMonth + 1}月の入力がまだありません`
      } else {
        return `${thisMonth + 1}月の平均：${Math.round(sum / numOfTargets)}%`
      }
    }
  }
}
</script>

<style scoped>
.small {
  color: #666;
  font-size: 12px;
} 
</style>
