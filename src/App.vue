<template>
  <h1>あちーぶ on Vite</h1>
  <p>日々の予定達成率を記録していくアプリです。Vueのビルドツール「Vite」をつかっています。</p>
  <!-- <button @click="sample">サンプル</button> -->
  <!-- <p>{{ items }}</p> -->
  <InputArea v-on:add="handleAdd" />
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
      const obj = {
        "xxxxxxx": {
          "date": "2021-01-10",
          "year": "2021",
          "month": "01",
          "day": "10",
          "percentWork": 20,
          "percentHouse": 20,
          "percentHobby": 20,
          "memo": "ここに1日に振り返りを時系列順にわーーーと書いていくイメージ"
        },
        "yyyyyyy": {
          "date": "2021-02-23",
          "year": "2021",
          "month": "02",
          "day": "23",
          "percentWork": 30,
          "percentHouse": 50,
          "percentHobby": 60,
          "memo": "ここに1日に振り返りを時系列順にわーーーと書いていくイメージ"
        }
      }
      console.log(Object.values(obj))
      console.log('sample run')
    },
    // データ追加の処理
    handleAdd: function(dataSet) {
      
      // 日付を分解して、重複するデータがないか検索
      const dayArray = dataSet.date.split('-');
      const year = dayArray[0]
      const month = '0' + dayArray[1]
      const day = '0' + dayArray[2]

      // 日付は分解したら保存する必要はないので、dataSetから日付を取り除いておく
      // 複製
      // const formattedDataSet = Object.assign(dataSet);
      // 複製したものからdateを削除
      // delete formattedDataSet.date

      // ここでまず年が一致するデータを探す
      const yearIndex = Object.keys(this.items).indexOf(year)
      if (yearIndex !== -1) {
        // あった場合、さらに月があるか検索
        const monthIndex = Object.keys(this.items[year]).indexOf(month)
        if (monthIndex !== -1) {
          // 月があった場合
          const dayIndex = Object.keys(this.items[year][month]).indexOf(day)
          if (dayIndex !== -1) {
            // 日があった場合
            console.log(day+'日はあったよ')
          }
          // 結局どっちでもデータ入れる処理は同じ
          this.items[year][month][day] = dataSet
        } else {
          console.log(month+'月がなかったよ')
          // 月をつくる（空オブジェクトをわたす
          this.items[year][month] = {}
          // 実際のデータを挿入
          this.items[year][month][day] = dataSet
        }
      } else {
        // 当てはまる年がなかったら年の枠を作る
        console.log(year+'年がなかったよ')
        // 年と月をつくる（空オブジェクトをわたす
        this.items[year] = {}
        this.items[year][month] = {}
        // 実際のデータを挿入
        this.items[year][month][day] = dataSet
      }

      this.saveItems()
    },
    handleDelete: function(date) {
      // 日付を分解
      const dayArray = date.split('-');
      const year = dayArray[0]
      const month = '0' + dayArray[1]
      const day = '0' + dayArray[2]
      // オブジェクトの削除
      delete this.items[year][month][day]

      this.saveItems()
    },
    handleUpdate: function(dataSet) {
      console.log(dataSet)
      const dayArray = dataSet.date.split('-');
      const year = dayArray[0]
      const month = '0' + dayArray[1]
      const day = '0' + dayArray[2]

      this.items[year][month][day] = dataSet
      
      this.saveItems()
    },
    saveItems() {
      const db = getDatabase()
      set(ref(db, '/'), this.items)
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
