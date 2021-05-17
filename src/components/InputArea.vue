<template>
  <h2>達成率を入力してください。</h2>
  <!-- 以下のinput系をコンポーネントにわける? -->
  <div class="inputItem">
    <label for="theDay">日付</label>
    <input name="theDay" type="date" ref="day">
  </div>
  <div class="inputItem">
    <input name="thePercent" type="number" ref="percent">
    <label for="thePercent">%</label>
  </div>
  <div class="inputItem">
    <label for="theMemo">メモ</label>
    <input name="theMemo" type="text" ref="memo">
  </div>
  <button @click="sendItem">追加</button>
</template>

<script>
export default {
  name: 'InputArea',
  methods: {
    // 今日の日付をデフォルトで設定する。

    sendItem: function() {
      const theDate = this.$refs.day
      const thePercent = this.$refs.percent
      const theMemo = this.$refs.memo
      
      // %が空の場合処理中断 - 日付はデフォルトで設定されている。
      if (!thePercent.value.length) {
        alert('入力なし')
        return
      }

      this.$emit('add', {
        date: theDate.value,
        percent: thePercent.value,
        memo: theMemo.value
      })
      theDate.value = ''
      thePercent.value = ''
      theMemo.value = ''

    }
  }
}
</script>

<style scoped>
  .inputItem {
    background: #ddd;
    margin-top: 10px;
  }
</style>
