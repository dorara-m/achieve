<template>
  <li>
    <div class="log_date">{{ formatedDate(date) }}</div>
    <div class="log_percent">{{ percent }}%</div>
    <div class="log_memo">{{ memo }}</div>
    <div class="log_btn_delete" @click="deleteItem(date)">削除</div>
  </li>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: 'LogItem',
  props: ['date', 'percent', 'memo'],
  emits: ['delete'],
  methods: {
    // dateを受け取ってそれを 5/28（金）にする
    formatedDate: function(date) {
      const dayjsType = dayjs(date)
      // 日付を日本語表記にするための配列
      const weeks = ['日', '月', '火', '水', '木', '金', '土']
      const formated = `${dayjsType.format('M/D')}（${weeks[dayjsType.day()]}）`
      return formated
    },

    deleteItem: function(date) {
      if (window.confirm(`${date}のデータを削除しますか？`)) {
        this.$emit('delete')
      }
    }
  }
}
</script>

<style scoped>
li {
  padding: 5px 0;
  border-bottom: 1px solid #707070;
  display: flex;
  text-align: left;
  align-items: flex-start;
}
.log_date {
  flex-basis: 20%;
}
.log_percent {
  flex-basis: 10%;
}
.log_memo {
  flex: 1;
  padding-right: 50px;
}
.log_btn_delete {
  background-color: #444;
  font-size: 15px;
  color: #fff;
  padding: 5px 7px;
  border-radius: 20px;
}
</style>