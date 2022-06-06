<template>
  <div>
    <div class="box">{{ msg }}</div>
    <button @click="getUserInfo">click!</button>
    <div v-if="userInfo">
      {{ userInfo.login }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello Webpack!',
      showInfo: false,
      userInfo: '',
    }
  },
  created() {
    console.log('Go!!!');
    console.log(_.isString('Hello'));
  },

  methods: {
    getUserInfo() {
      import('@/assets/mock/user.json').then(res => {
        this.userInfo = res;
      });
    },
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