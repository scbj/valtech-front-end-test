<template>
  <div id="app">
    <NavigationList />
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavigationList from '@/components/NavigationList.vue'

export default {
  components: {
    NavigationList
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
