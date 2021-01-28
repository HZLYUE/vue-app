<template>
  <header :style="{ backgroundColor: curMenu.bgColor }">
    <span @click="goHome">《 首页 </span>
    {{ curMenu.name }}
  </header>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["curMenu"]),
  },
  methods: {
    ...mapMutations(["setCurMenu"]),
    goHome() {
      this.$router.push("/"); //给span加点击事件 编程式导航 往router push一条记录 让页面定位到首页
      this.setCurMenu({
        //要让curmenu也是主页的状态 从store里map
        name: "剧集",
        bgColor: "#ff0000",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  position: fixed; //定位 让滚动条滚动时header标签保持原位不动
  top:0;
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  background: rgb(126, 23, 23);
  color:#ffffff;

  span {
    position: absolute;
    left: 0;
  }
}
</style>