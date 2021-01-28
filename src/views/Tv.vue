<template>
  <div>
    <ul class="tv-list">
      <li
        class="tv-item"
        v-for="item in tvList"
        :key="item.id"
        @click="getDetail(item.id)"
      >
        <div class="img">
          <img :src="'https://images.weserv.nl/?url=' + item.cover.url" alt />
          <!-- + 一个地址解决图片403的问题 -->
        </div>
        <div class="content">
          <h3>{{ item.title }}</h3>
          <p>{{ item.info }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // 当网页所在地址与接口所在地址（协议、域名、端口号） 任一不同 都会引发跨域问题  解决：jsonp，让后端配置下（cors），第三方服务器代理
  data() {
    return {
      tvList: [],
      start: 0,
      isFinish: true, //确保前一个请求结束了再执行下一个
    };
  },

  created() {
    //调用此方法
    this.getData();
  },
  mounted() {
    //在mounted生命周期里调用滚动条监听方法
    this.listenScroll();
  },
  methods: {
    //阿贾克斯请求 封装接口函数
    getData() {
      if (this.isFinish) {
        this.isFinish = false;
        let baseUrl = "https://bird.ioliu.cn/v2?url="; //用第三方服务器代理解决跨域问题  必须用v2接口
        let tvUrl = `https://m.douban.com/rexxar/api/v2/subject_collection/tv_domestic/items?os=ios&for_mobile=1&start=${this.start}&count=10`;

        this.axios
          .get(baseUrl + tvUrl)
          .then((res) => {
            this.tvList = this.tvList.concat(res.data.subject_collection_items);
            this.isFinish = true;
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    listenScroll() {
      //处理数据懒加载
      //监听滚动条
      let htmlDom = document.documentElement; //获取html元素
      let deviceHeight = htmlDom.clientHeight; //获取窗口的高度
      let fullHeight = 0; //声明变量放在window里就相当于一直再声明 不好 拿到外面来
      let scrollTop = 0;

      window.onscroll = () => {
        //此处改成箭头函数（没有this） 不然后面调用this.getdata的this会指向window
        fullHeight = htmlDom.offsetHeight; //页面的总高度
        scrollTop = htmlDom.scrollTop; //滚动条距离顶部的距离
        if (deviceHeight + scrollTop > fullHeight - 20) {
          this.start += 10;
          if (this.start < 50) {
            this.getData();
          }
          console.log("滚动到底啦");
        }
      };
    },
    //跳转电视剧详情页
    getDetail(id) {
      this.$router.push("./tvdetails/" + id); //编程式导航
    },
  },
};
</script>

<style lang="scss" scoped>
.tv-list {
  .tv-item {
    display: flex;
    padding: 0.2rem 0;
    border-bottom: 1px dashed #ccc;
    .img {
      flex: 3;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .content {
     
      flex: 5;
      padding: 0.8rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      h3 {
        font-weight: bold;
      }
    }
  }
}
</style>