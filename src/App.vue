<template>
  <div id="app">
    <ComHeader></ComHeader>
    <router-view />
    <ComFooter></ComFooter>
  </div>
</template>

<script>

  import ComHeader from './components/ComHeader';
  import ComFooter from '@/components/ComFooter'; //组件的引用 @是对src文件夹下的文件引用 而components是在src下

  export default {
    components: {
      ComHeader,
      ComFooter
    },
  };
</script>

<style lang="scss">
  #app {
    margin-top: 1rem;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    font-weight: bold;
    color: #2c3e50;
  } 

  .router-link-exact-active {
    color: #42b983;
  }

  #container{
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

</style>