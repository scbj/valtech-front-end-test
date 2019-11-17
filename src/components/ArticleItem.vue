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
$easing: cubic-bezier(.165, .84, .44, 1);

$overlay-color: rgba(black, 0.3);
$overlay-hover-color: rgba(red, 0.5);

$border-color: rgba(104, 104, 104, 0.5);

.article-item {
  color: white;

  min-height: 10rem;
  min-width: 22rem;
  position: relative;
  height: 100%;
  perspective: 1000px;

  user-select: none;

  &:first-of-type span {
    margin-right: 18rem;
    text-align: right;
    font-size: 2rem;
  }

  &.hover {
    .container {
      transition-duration: .16s;
      transform: rotateX(-4deg) scale(0.99) translateY(4px);
      box-shadow: 0px 2px 4px -1px rgba(rgb(49, 3, 5), 0.7);
    }

    a {
      background-color: $overlay-hover-color;
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
  transform-origin: 50% 0;

  transition: all .3s $easing;
  overflow: hidden;
  box-shadow: 0px 6px 20px -2px rgba(black, 0.3);
}

a {
  background-color: $overlay-color;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color .2s $easing;
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
