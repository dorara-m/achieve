<template>
  <h2>平均値</h2>
  <p>直近5日の平均：{{fiveDaysAverage}}%</p>
  <p class="small">※日数が5日に満たない場合は全値の平均になります</p>
  <p>今月の平均：{{thisMonthAverage}}%</p>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: 'AverageArea',
  props: ['val'],
  computed: {
    // 上から5つが直近5日のものと想定して組む
    fiveDaysAverage: function() {
      let sum = 0
      const vals = this.val
      // 5日に満たない場合の処理
      const numOfVal = vals.length >= 5 ? 5 : vals.length
      // 平均する処理。
      for (let i=0; i<numOfVal; i++) {
        sum += Number(vals[i].percent)
      }
      return Math.round(sum / numOfVal)
    },
    // 1ヶ月分の平均処理
    thisMonthAverage: function() {
      // 今月を取得する
      const thisMonth = dayjs().month()

      // 今月にあたるデータを抽出する。
      const vals = this.val
      let arr = []
      let numOfTargets = 0
      let sum = 0
      // 全部のvalのdateをday.jsに通して月の数値のみ取る。(dateMonth)それと今月を比べて、dateMonth - thisMonth = 0の範囲を今月のデータと判定する。その範囲だけsumに加算、個数を知りたいのでそれ用の変数に1ずつ足しておく。
      for (let i=0; i<vals.length; i++) {
        const dateMonth = dayjs(vals[i].date).month()
        if (dateMonth - thisMonth == 0) {
          arr.push(vals[i].percent)
          numOfTargets += 1
          sum += Number(vals[i].percent)
        }
      }
      return Math.round(sum / numOfTargets)
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
