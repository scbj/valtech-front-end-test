<template>
  <div class="navigation-list">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
</template>

<style scoped lang="scss">
.navigation-list {
  padding: 30px;

  user-select: none;
}

a {
  font-weight: bold;
  color: #2c3e50;

  &.router-link-exact-active {
    color: #42b983;
  }
}
</style>
