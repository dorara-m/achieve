<template>
  <li>
    <p>{{ date }}</p>
    <p>{{ percent }}%</p>
    <p>{{ memo }}</p>
  </li>
</template>

<script>
export default {
  name: 'LogItem',
  props: ['date', 'percent', 'memo']
}
</script>
