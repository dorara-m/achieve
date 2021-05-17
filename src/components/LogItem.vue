<template>
  <li>
    <div class="log_date">{{ date }}</div>
    <div class="log_percent">{{ percent }}%</div>
    <div class="log_memo">{{ memo }}</div>
  </li>
</template>

<script>
export default {
  name: 'LogItem',
  props: ['date', 'percent', 'memo']
}
</script>

<style scoped>
li {
  border-bottom: 1px solid #707070;
  display: flex;
  text-align: left;
}
.log_date {
  flex-basis: 20%;
}
.log_percent {
  flex-basis: 10%;
}
.log_memo {
  flex: 1;
}
</style>