<template>
  <h2>平均値</h2>
  <p>直近5日の平均：{{fiveDaysAverage}}</p>
  <p>今月の平均:</p>
  <p class="small">※日数が満たない場合は全値の平均になります</p>
</template>

<script>
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
      
      // 30日に満たない場合の処理
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
