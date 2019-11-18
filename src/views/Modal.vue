<template>
  <transition name="fade" appear>
    <div class="modal" @click.self="close">
      <div class="container">
        <ArticleDetails v-if="article" :article="article" />
        <button @click="close"></button>
      </div>
    </div>
  </transition>
</template>

<script>
import ArticleDetails from '@/components/ArticleDetails'

export default {
  name: 'modal',

  props: {
    id: {
      type: String,
      required: true
    }
  },

  components: {
    ArticleDetails
  },

  computed: {
    article () {
      return this.$store.state.articles.find(x => x.id.toString() === this.id)
    }
  },

  methods: {
    close () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/styles/_vars';

.modal {
  background: $modal-overlay-color;

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
  background-color: $modal-background-color;
  background-image: var(--background-image);
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0.7rem;

  width: 40rem;
  max-height: 90vh;
  position: relative;

  box-shadow: $modal-box-shadow;
  cursor: auto;
  overflow-y: auto;
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
    transition-delay: .5s;
  }
}

.fade-enter-active {
  transition: background .4s $easing-1;

  .container {
    transition: all .3s $easing-1 .15s;
  }
}

.fade-leave-active {
  transition: background .3s $easing-1;

  .container {
    transition:
      opacity .2s $easing-1,
      transform .3s $easing-1;
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
