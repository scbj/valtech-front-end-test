<template>
  <div class="home">
    <ArticleList />
    <RouterView />
  </div>
</template>

<script>
import ArticleList from '@/components/ArticleList.vue'

export default {
  name: 'home',
  components: {
    ArticleList
  }
}
</script>
