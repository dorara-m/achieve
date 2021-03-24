<template>
  <h2>達成率を入力してください。</h2>
  <div class="inputItem">
    <label for="theDay">日付</label>
    <input name="theDay" type="date" ref="day">
  </div>
  <div class="inputItem">
    <input name="thePercent" type="number"  ref="percent">
    <label for="thePercent">%</label>
  </div>
  <button @click="sendItem">アイテム追加</button>
</template>

<script>
export default {
  name: 'InputArea',
  methods: {
    sendItem: function() {
      const theDate = this.$refs.day
      const thePercent = this.$refs.percent
      
      // %が空の場合処理中断
      if (!thePercent.value.length) {
        alert('入力なし')
        return
      }

      this.$emit('add', {
        date: theDate.value,
        percent: thePercent.value
      })
      theDate.value = ''
      thePercent.value = ''

    }
  }
}
</script>

<style scoped>
  .inputItem {
    background: #ddd;
  }
</style>
