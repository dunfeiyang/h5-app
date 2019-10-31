<template>
  <div class="home">
    <div class="test">123</div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>

<style lang="scss" scoped>
.home {
  .test {
    width: 200px;
    height: 300px;
    font-size: 24px;
    @include extend-click;
  }
}
</style>
