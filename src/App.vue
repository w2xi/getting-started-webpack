<template>
  <div class="box">{{ msg }}</div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello Webpack!'
    }
  },
  created() {
    console.log('Go!!!');
    console.log('Go!!!');
  },
}
</script>

<style lang="scss">
.box {
  width: 500px;
  height: 200px;
  background-image: url('./assets/images/wallhaven-y8622k_1920x1080.png');
}
</style>