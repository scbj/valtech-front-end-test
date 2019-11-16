<template>
  <div class="modal">

  </div>
</template>

<script>
export default {
  name: 'modal',

  props: {
    id: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.modal {
  background: black;

  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
</style>
