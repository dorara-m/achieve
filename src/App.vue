<template>
  <h1>あちーぶ on Vite</h1>
  <p>日々の予定達成率を記録していくアプリです。Vueのビルドツール「Vite」をつかっています。</p>
  <!-- <button @click="sample">サンプル</button> -->
  <!-- <p>{{ items }}</p> -->
  <InputArea @add="handleAdd" />
  <LogArea :items="items" @delete="handleDelete" @update="handleUpdate" />
  <!-- <AverageArea :val="items" /> -->
</template>

<script>
// 同階層にfirebaseのキーを記述したfirebaseConfigを置いてください。
import firebaseConfig from './firebaseConfig'
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue } from "firebase/database";
import InputArea from './components/InputArea.vue'
import LogArea from './components/LogArea.vue'
import AverageArea from './components/AverageArea.vue'

export default {
  name: 'App',
  components: {
    InputArea,
    LogArea,
    AverageArea
  },
  data() {
    return {
      database: null,
      itemsRef: null,
      items: {}
    }
  },
  created() {
    // データベースを初期化
    const app = initializeApp(firebaseConfig)
    const db = getDatabase(app)
    // 初期値をrefに登録
    const itemsRef = ref(db, '/')

    // refが更新されたらitemsも更新。事実上firebaseが更新されたら動く関数
    onValue(itemsRef, (snapshot) => {
      console.log('items updated')
      // ここでオブジェクトの中身だけ配列に変換してitemsに格納
      this.items = Object.values(snapshot.val())
    });

  },
  methods: {
    sample: function() {
      console.log('sample run')
    },
    // データ追加の処理
    handleAdd: function(dataSet) {
      //@todo 重複した場合alert
      this.items.push(dataSet)
      this.sortItems()
      this.saveItems()
    },
    handleDelete: function(index) {
      // オブジェクトの削除
      this.items.splice(index, 1)
      this.saveItems()
    },
    handleUpdate: function(data) {
      // 送られてくる編集後のデータと、元あるデータを結合↓
      const newObj = { ...this.items[data.index], ...data.dataSet }
      this.items[data.index] = newObj
      this.saveItems()
    },
    saveItems() {
      const db = getDatabase()
      set(ref(db, '/'), this.items)
    },
    sortItems() {
      console.log(this.items)
      this.items.sort(function(a,b) {
        return new Date(b.date) - new Date(a.date)
      })
      console.log(this.items)
      console.log('sorted')
    }
  },


  // setupでうまく動作せず、vue3での書き方。いつか調査↓
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
