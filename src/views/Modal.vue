<template>
  <transition name="fade" appear>
    <div class="modal" @click.self="close">
      <div class="container">
        <h2>{{ article.title }}</h2>
        <p>by <a :href="article.sourceUrl" target="_blank">Jason Zigrino</a></p>
        <img :src="imageSource" alt="Article cover">
        <button @click="close"></button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'modal',

  props: {
    id: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      article: {}
    }
  },

  computed: {
    imageSource () {
      if (!this.article.backgroundImage) {
        return ''
      }
      return require('@/assets/images/' + this.article.backgroundImage)
    }
  },

  mounted () {
    this.article = this.$store.state.articles.find(x => x.id.toString() === this.id)
  },

  methods: {
    close () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped lang="scss">
$easing: cubic-bezier(.165, .84, .44, 1);

.modal {
  background: rgba(white, 0.9);

  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  cursor: pointer;
}

.container {
  background-color: white;
  background-image: var(--background-image);
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0.7rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 3rem;
  margin: 2rem;
  width: 40rem;
  height: 100%;
  max-height: 80vh;
  position: relative;

  box-shadow: 0px 6px 40px -2px rgba(black, 0.2);
  cursor: auto;
  overflow-y: auto;
}

h2 {
  font-size: 1.8rem;
  font-weight: 400;
  letter-spacing: 0.05em;
  line-height: 3rem;
  text-align: left;

  max-width: 16em;

    text-shadow: 4px 4px 10px 0px red;
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
    content: "";
    background: rgba(212, 0, 0, 0.04);
    width: 90%;
    height: 17.4em;
    position: absolute;
    bottom: -0.7em;
    right: -0.9em;
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

button {
  border: none;
  background-color: transparent;
  background-image: url('../assets/images/arrow-left.svg');
  background-repeat: no-repeat;
  background-size: cover;

  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 2rem;
  right: 2rem;

  cursor: pointer;

  &:active,
  &:focus,
  &:hover {
    -webkit-appearance: none;
    outline: none;
  }

  &::before {
    font-family: 'Roboto Slab', serif;
    font-size: 0.7rem;

    content: 'GO BACK';
    position: absolute;
    left: 0;
    top: 50%;

    opacity: 0;
    transform: translateY(-50%) translateX(calc(-100% - 1rem));
    transition: all .1s ease-out;
  }

  &:hover::before {
    opacity: 1;
    transition-delay: .6s;
  }
}

.fade-enter-active {
  transition: background .4s $easing;

  .container {
    transition: all .3s $easing .1s;
  }
}

.fade-leave-active {
  transition: background .2s $easing;

  .container {
    transition:
      opacity .15s $easing,
      transform .2s $easing;
  }
}

.fade-enter {
  background: transparent;

  .container {
    opacity: 0;
    transform: translateY(4rem) scale(0.96);
  }
}

.fade-leave-to {
  background: transparent;

  .container {
    opacity: 0;
    transform: translateY(4rem);
  }
}
</style>
