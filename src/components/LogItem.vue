<template>
  <li>
    <div class="log_date">{{ formatedDate(date) }}</div>
    <div class="log_percent">{{ percent }}%</div>
    <div class="log_memo">{{ memo }}</div>
  </li>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: 'LogItem',
  props: ['date', 'percent', 'memo'],
  methods: {
    // dateを受け取ってそれを 5/28（金）にする
    formatedDate: function(date) {
      const dayjsType = dayjs(date)
      // 日付を日本語表記にするための配列
      const weeks = ['日', '月', '火', '水', '木', '金', '土']
      const formated = `${dayjsType.format('M/D')}（${weeks[dayjsType.day()]}）`
      return formated
    }
  }
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