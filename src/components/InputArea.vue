<template>
  <h2>達成率を入力してください。</h2>
  <!-- 以下のinput系をコンポーネントにわける? -->
  <div class="inputWrap">
    <div class="inputItem">
      <div class="inputItem_ttl">日付</div>
      <input name="theDay" type="date" ref="day">
    </div>
    <div class="inputFlex">
      <div class="inputItem">
        <div class="inputItem_ttl">仕事</div>
        <p>達成率</p>
        <input name="thePercent" type="number" ref="percent_work">
        <p>ふり返り</p>
        <textarea name="theMemo" ref="memo" id="" cols="30" rows="10"></textarea>
      </div>
      <div class="inputItem">
        <div class="inputItem_ttl">家事</div>
        <p>達成率</p>
        <input name="thePercent" type="number" ref="percent_house">
        <p>ふり返り</p>
        <textarea name="theMemo" ref="memo1" id="" cols="30" rows="10"></textarea>
      </div>
      <div class="inputItem">
        <div class="inputItem_ttl">趣味</div>
        <p>達成率</p>
        <input name="thePercent" type="number" ref="percent_hobby">
        <p>ふり返り</p>
        <textarea name="theMemo" ref="memo2" id="" cols="30" rows="10"></textarea>
      </div>
    </div>
  </div>
  <button class="addBtn" @click="sendItem">追加</button>
</template>

<script>
export default {
  name: 'InputArea',
  methods: {
    // 今日の日付をデフォルトで設定する。

    sendItem: function() {
      const theDate = this.$refs.day
      const theMemo = this.$refs.memo
      const theMemo1 = this.$refs.memo1
      const theMemo2 = this.$refs.memo2
      const thePercentWork = this.$refs.percent_work
      const thePercentHouse = this.$refs.percent_house
      const thePercentHobby = this.$refs.percent_hobby
      
      if (!theDate.value.length) {
        alert('日付の指定を忘れてますよ！')
        return
      }

      const percent = Math.round((Number(thePercentWork.value) + Number(thePercentHouse.value) + Number(thePercentHobby.value)) / 3)

      this.$emit('add', {
        date: theDate.value,
        percent: percent,
        memo: theMemo.value,
        memo1: theMemo1.value,
        memo2: theMemo2.value
      })
      theDate.value = ''
      thePercentWork.value = ''
      thePercentHouse.value = ''
      thePercentHobby.value = ''
      theMemo.value = ''
      theMemo1.value = ''
      theMemo2.value = ''

    }
  }
}
</script>

<style scoped>
  .inputWrap {
    background-color: #ddd;
    padding: 10px;
  }
  .inputItem {
    margin-top: 10px;
  }
  p {
    margin: 0;
  }
  .inputItem_ttl {
    font-weight: bold;
    font-size: 18px;
  }
  .inputFlex {
    display: flex;
    justify-content: center;
  }
  .inputFlex .inputItem {
    margin: 10px 15px; 
  }
  .addBtn {
    margin-top: 20px;
    width: 200px;
    font-size: 15px;
    cursor: pointer;
  }
</style>
