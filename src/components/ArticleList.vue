<template>
  <ul class="article-list">
    <template v-for="article in articles">
      <ArticleItem :article="article" :key="article.id" />
    </template>
  </ul>
</template>

<script>
import ArticleItem from '@/components/ArticleItem'

export default {
  components: {
    ArticleItem
  },

  computed: {
    articles () {
      return this.$store.state.articles
    }
  }
}
</script>

<style scoped lang="scss">
.article-list {
  list-style: none;

  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 0.8rem;

  li:first-of-type {
    grid-row: auto / span 2;
  }
}
</style>
