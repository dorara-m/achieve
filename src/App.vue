<template>
  <h1>あちーぶ on Vite</h1>
  <p>日々の予定達成率を記録していくアプリです。Vueのビルドツール「Vite」をつかっています。</p>
  <InputArea v-on:add="handleAdd" />
  <LogArea :val="items" />
</template>

<script>
import InputArea from './components/InputArea.vue'
import LogArea from './components/LogArea.vue'

export default {
  name: 'App',
  components: {
    InputArea,
    LogArea
  },
  data() {
    return {
      items: [
        {
          date: '2021-01-01',
          percent: '10',
          memo: 'ひとこと'
        }
      ]
    }
  },
  methods: {
    handleAdd: function(dataSet) {
      // もし既存の日付ならここでpushではなく上書きにする。

      this.items.push(dataSet)
      console.log(dataSet)
      console.log(this.items)
    }
  },
  
  // setup() {
  //   const items = ref([])
  //   const handleAdd = function(dateSet) {
  //     items.value.push(dateSet)
  //     console.log(items.value)
  //   }
  //   return {items, handleAdd}
  // },
}
</script>
