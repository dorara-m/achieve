<template>
  <h1>あちーぶ on Vite</h1>
  <p>日々の予定達成率を記録していくアプリです。Vueのビルドツール「Vite」をつかっています。</p>
  <InputArea />
  <LogArea />
</template>

<script>
import InputArea from './components/InputArea.vue'
import LogArea from './components/LogArea.vue'

export default {
  name: 'App',
  components: {
    InputArea,
    LogArea
  }
}
</script>
