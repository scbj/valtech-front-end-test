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
@import './assets/styles/vars';

@import url('https://fonts.googleapis.com/css?family=Roboto+Slab:400,900&display=swap');

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
  font-family: 'Roboto Slab', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $text-color;

  padding: 2rem;
}
</style>
