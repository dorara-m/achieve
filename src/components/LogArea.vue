<template>
  <h2>ログ一覧</h2>
  <ul>
    <LogItem v-for="(item,index) in val"
      :key="index"
      :date="item.date"
      :percent="item.percent"
      :memo="item.memo"
      @update="dataUpdate($event, index)"
      @delete="dataDelete(index)"
    />
  </ul>
</template>

<script>
import LogItem from './LogItem.vue'

export default {
  name: 'LogArea',
  props: ['val'],
  emits: ['delete'],
  components: {
    LogItem
  },
  methods: {
    dataDelete: function(index) {
      this.$emit('delete', index)
    },
    dataUpdate: function(dataSet, index) {
      this.$emit('update', {
        dataSet: dataSet,
        index: index
      })
    }
  }
}
</script>
