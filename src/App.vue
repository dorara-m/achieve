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
      items: []
    }
  },
  mounted() {
    if (localStorage.getItem('datelist')) {
      this.items = JSON.parse(localStorage.getItem('datelist'))
    }
  },
  methods: {
    handleAdd: function(dataSet) {
      // もし既存の日付ならここでpushではなく上書きにする。

      console.log(dataSet)
      
      this.items.push(dataSet)
      console.log(this.items)

      this.saveItems()
    },
    saveItems() {
      const parsed = JSON.stringify(this.items)
      localStorage.setItem('datalist', parsed);
    }
  },

  // setupでうまく動作せず、いつか調査↓

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
