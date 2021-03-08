<template>
  <h2>達成率を入力してください。</h2>
  <div class="inputItem">
    <label for="theDay">日付</label>
    <input name="theDay" type="date" v-model="theDay">
  </div>
  <div class="inputItem">
    <label for="theDay">%</label>
    <input name="theDay" type="number" v-model="thePer">
  </div>
</template>

<script>
export default {
  name: 'InputArea',
  data() {
    return {
      theDay: "2020-01-01",
      thePar: "10"
    }
  }
}
</script>

<style scoped>
  .inputItem {
    background: #ddd;
  }
</style>
