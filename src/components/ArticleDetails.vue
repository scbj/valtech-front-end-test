<template>
  <transition name="load" appear>
    <div class="article-details">
      <h2>{{ article.title }}</h2>
      <p>by <a :href="article.sourceUrl" target="_blank">Jason Zigrino</a></p>
      <img :src="imageSource" alt="Article cover">
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      require: true
    }
  },

  computed: {
    imageSource () {
      if (!this.article.backgroundImage) {
        return ''
      }
      return require('@/assets/images/' + this.article.backgroundImage)
    }
  }
}
</script>

<style scoped lang="scss">
.article-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 3rem;
  margin: 2rem;
}

h2 {
  font-size: 1.8rem;
  font-weight: 400;
  letter-spacing: 0.05em;
  line-height: 3rem;
  text-align: left;

  max-width: 16em;

  &::first-letter {
    font-size: 4.4rem;
  }
}

p {
  margin-top: 1em;
}

a {
  color: #d40000;

  position: relative;

  &::before {
    background: rgba(212, 0, 0, 0.04);

    width: 90%;
    height: 22em;
    position: absolute;
    bottom: -0.7em;
    right: -0.9em;

    transform-origin: 50% 100%;
    content: "";
  }
}

img {
  border-radius: 0.3rem;

  margin-top: 4rem;
  width: 100%;
  height: 16rem;

  object-fit: cover;
  box-shadow: 0px 22px 16px -12px rgba(0, 0, 0, 0.2);
}

$easing: cubic-bezier(.09,.8,.24,.92);

.load-enter-active {
  transition: all 1s $easing 0.4s;
  h2,
  p,
  a::before,
  img {
    transition: all 1s $easing 0.4s;
  }

  p { transition-delay: 1s; }
  a::before { transition-delay: 1s; transition-timing-function: cubic-bezier(.27,.58,.5,.77) }
  img { transition-delay: 0.8s; }
}

.load-enter {
  opacity: 0.4;
  h2,
  p {
    opacity: 0;
    transform: translateX(-3rem);
  }

  a::before {
    transform: scaleY(0);
  }

  img {
    opacity: 0;
  }
}
</style>
