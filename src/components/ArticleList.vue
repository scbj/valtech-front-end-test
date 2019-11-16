<template>
  <ul class="article-list">
    <template v-for="article in articles">
      <ArticleItem :article="article" :key="article.id" />
    </template>
  </ul>
</template>

<script>
import ArticleItem from '@/components/ArticleItem'

import { articles } from '@/assets/data.json'

export default {
  components: {
    ArticleItem
  },

  data () {
    return {
      articles
    }
  }
}
</script>

<style lang="scss">
.article-list {
  list-style: none;

  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 0.2rem;

  li:first-of-type {
    grid-row: auto / span 2;
  }
}
</style>
