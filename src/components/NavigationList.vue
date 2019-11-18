<template>
  <div class="navigation-list">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/styles/_vars';

.navigation-list {
  padding: 30px;

  user-select: none;
}

a {
  font-weight: bold;
  /* color: #804949; */

  &.router-link-exact-active {
    color: $highlight-color;
  }
}
</style>
