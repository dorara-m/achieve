<template>
  <h2>平均値</h2>
  <p>全日平均：{{fiveDaysAverage}}</p>
</template>

<script>
export default {
  name: 'AverageArea',
  props: ['val'],
  computed: {
    // 今は全日分平均
    fiveDaysAverage: function() {
      let sum = 0
      // 5日に満たない場合の処理
      // 先頭5日分を取得して平均する処理。
      for (let i=0; i<this.val.length; i++) {
        sum += Number(this.val[i].percent)
      }
      return Math.round(sum / this.val.length)
    }

    // 1ヶ月分の平均処理
  }
}
</script>

<style scoped>
</style>
