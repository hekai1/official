<template>
  <div class="loading">
    <img class="img" src="../assets/loading.gif" alt="">
  </div>
</template>
<script>
  export default {
    name: 'loading'
  }
</script>
<style>
  .loading {
    width: 100%;
    height: 100%;
    position:fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    background: #fff;
    z-index: 999;
  }
  .img {
    width: 1rem;
    height: 1rem;
    margin: 0 auto;
  }
</style>
