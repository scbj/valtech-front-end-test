<template>
  <li class="article-item" :style="backgroundImage">
    <RouterLink :to="link">
      <span>{{ article.title }}</span>
    </RouterLink>
  </li>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  },

  computed: {
    link () {
      return {
        name: 'modal',
        params: { id: this.article.id.toString() }
      }
    },

    backgroundImage () {
      const { backgroundImage: name } = this.article
      const path = require('@/assets/images/' + name)
      return {
        '--background-image': `url('${path}')`
      }
    }
  }
}
</script>

<style scoped lang="scss">
$easing: cubic-bezier(.165, .84, .44, 1);

$overlay-color: rgba(black, 0.3);
$overlay-hover-color: rgba(red, 0.5);

$border-color: rgba(104, 104, 104, 0.5);

.article-item {
  border: 1px solid $border-color;
  background-image: var(--background-image);
  background-size: cover;

  color: white;

  min-height: 10rem;
  min-width: 22rem;
  position: relative;
  height: 100%;

  transition: background-image .2s $easing;

  &:first-of-type span {
    margin-right: 18rem;
    text-align: right;
    font-size: 2rem;
  }
}

a {
  background-color: $overlay-color;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  transition: background-color .2s $easing;

  &:hover {
    background-color: $overlay-hover-color;
  }
}

span {
  font-size: 1.1rem;
  font-family: "Franklin Gothic";
  font-weight: 400;
  letter-spacing: 0.04em;

  margin: 2rem;
  max-width: 15em;
}
</style>
