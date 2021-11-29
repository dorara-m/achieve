<template>
  <!-- @todo 繰り返し出てくるパーツはコンポーネントにわける -->
  <div class="inputArea">
    <input name="theDay" type="date" v-model="theDay">
    
    <div class="inputArea_select">
      <p>仕事%</p>
      <select name="" id="" v-model="selectedPercentWork">
        <option v-for="num in percents" :key="num">{{num}}</option>
      </select>
    </div>
    
    <div class="inputArea_select">
      <p>家事%</p>
      <select name="" id="" v-model="selectedPercentHouse">
        <option v-for="num in percents" :key="num">{{num}}</option>
      </select>
    </div>


    <div class="inputArea_select">
      <p>趣味%</p>
      <select name="" id="" v-model="selectedPercentHobby">
        <option v-for="num in percents" :key="num">{{num}}</option>
      </select>
    </div>    

    <div class="inputArea_text">
      <textarea name="theNotes" v-model="texts" id="" cols="30" rows="10"></textarea>
    </div>
    <button class="button" @click="sendItem">登録</button>
  </div>
</template>

<script>
export default {
  name: 'InputArea',
  components: { Listbox, ListboxButton, ListboxOptions, ListboxOption },
  data() {
    return {
      theDay: '2021-11-01',
      percents: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      selectedPercentWork: 0,
      selectedPercentHouse: 0,
      selectedPercentHobby: 0,
      texts: ''
    }
  },
  methods: {
    // @todo 今日の日付をデフォルトで設定する。

    sendItem: function() {
      const check = window.confirm(`日付${this.theDay}で以下のデータを投稿しますか？\n仕事：${this.selectedPercentWork}\n家事：${this.selectedPercentHouse}\n趣味：${this.selectedPercentHobby}\n${this.texts}`)

      if (check) {
        this.$emit('add', {
          date: this.theDay,
          percentWork: this.selectedPercentWork,
          percentHouse: this.selectedPercentHouse,
          percentHobby: this.selectedPercentHobby,
          memo: this.texts
        })
        this.theDay = ''
        this.selectedPercentWork = 0
        this.selectedPercentHouse = 0
        this.selectedPercentHobby = 0
        this.texts = ''
        console.log('投稿しました！')
      } else {
        console.log('投稿しませんでした！！')
      }
      // if (!theDate.value.length) {
      //   alert('日付の指定を忘れてますよ！')
      //   return
      // }
    }
  }
}
</script>

<style lang="scss" scoped>
  .inputArea {
    background-color: #bbb;
    padding: 30px;
    width: 600px;
    margin: 0 auto;

    &_select {
      margin-top: 10px;
      > button {
        width: 100px;
        font-size: 15px;
      }
    }
    &_text {
      margin-top: 20px;
    }
  }
  
  .button {
    margin-top: 20px;
    display: block;
    width: 100px;
    height: 50px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
</style>
