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
@import '../assets/styles/_mixins.scss';

.article-list {
  list-style: none;

  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 1.2rem;

  @include mq (medium) {
    gap: 0.8rem;
  }

  li:first-of-type {
    grid-row: auto / span 2;
  }

  $grid-templates-columns: (
    default: 1fr,
    medium: 2fr 1fr,
    large: 3fr 1fr
  );
  @include responsive (grid-template-columns, $grid-templates-columns);
}
</style>
