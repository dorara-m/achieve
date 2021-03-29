<template>
  <h2>ログ一覧</h2>
  <ul>
    <LogItem v-for="(item,index) in val"
      :key="index"
      :date="item.date"
      :percent="item.percent"
      :memo="item.memo"
    />
  </ul>
</template>

<script>
import LogItem from './LogItem.vue'

export default {
  name: 'LogArea',
  props: ['val'],
  components: {
    LogItem
  }
}
</script>
