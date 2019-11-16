<template>
  <div id="app">
    <NavigationList />
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavigationList from '@/components/NavigationList.vue'

import { articles } from '@/assets/data.json'

export default {
  components: {
    NavigationList
  },

  created () {
    this.$store.commit('setArticles', articles)
  }
}
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-size: 14px;
}

a,
a:visited {
  text-decoration: none;
  color: inherit;
}

#app {
  font-size: 1rem;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  padding: 2rem;
}
</style>
