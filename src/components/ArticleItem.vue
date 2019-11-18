<template>
  <li
    class="article-item"
    :class="{ hover: mouseOver }"
    :style="backgroundImage"
    @mouseenter="mouseOver = true"
    @mouseleave="mouseOver = false">
    <div class="container">
      <RouterLink :to="link">
        <span>{{ article.title }}</span>
      </RouterLink>
    </div>
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

  data () {
    return {
      mouseOver: false
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
@import '../assets/styles/vars';
@import '../assets/styles/mixins';

.article-item {
  color: white;

  min-height: 10rem;
  min-width: 22rem;
  position: relative;
  height: 100%;
  perspective: 1000px;

  user-select: none;

  &:first-of-type span {
    @include mq (medium) {
      font-size: 2rem;
    }

    @include mq (extraLarge) {
      margin-right: 18rem;
      text-align: right;
    }
  }

  &.hover {
    &:first-of-type .container {
      transform: rotateX(-3deg) scale(0.992) translateY(2px);
    }

    .container {
      transition-duration: .16s;
      transform: rotateX(-11deg) scale(0.992) translateY(4px);
      box-shadow: $article-hover-box-shadow;
    }

    a {
      background-color: $article-hover-background-color;
    }
  }
}

.container,
a {
  width: 100%;
  height: 100%;
}

.container {
  border-radius: 0.7rem;
  background-image: var(--background-image);
  background-size: cover;
  transform-style: preserve-3d;
  transform-origin: 50% 10%;

  transition: all .3s $easing-1;
  overflow: hidden;
  box-shadow: $article-box-shadow;
}

a {
  background-color: $article-background-color;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color .2s $easing-1;
}

span {
  font-size: 1.1rem;
  font-weight: 900;
  letter-spacing: 0.04em;

  margin: 2rem;
  max-width: 15em;
}
</style>
