<template>
  <div id="app">
    <div class="site-title-wrapper">
      <span class="site-title">Javaラムダ＆StreamAPI</span>
    </div>
    <navbar />
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import navbar from "./components/Navbar";
export default {
  components: {
    navbar,
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: "Meiryo", "メイリオ", "游ゴシック体", "Yu Gothic", YuGothic, "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro","sans-serif";
}
pre {
  font-family: "Meiryo", "メイリオ", "游ゴシック体", "Yu Gothic", YuGothic, "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro","sans-serif";
  margin-bottom: 0;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
.main-content {
  text-align: center;
  font-size: 25px;
  height: 1500px;
}
.site-title {
  font-size: 2rem;
  font-weight: bold;
}
.site-title-wrapper {
  margin: 15px;
}
/*スクロールバー全体*/
::-webkit-scrollbar {
    width: 10px;
}
/*スクロールバーの軌道*/
::-webkit-scrollbar-track {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, .1);
}
/*スクロールバーの動く部分*/
::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 50, .5);
  border-radius: 10px;
  box-shadow:0 0 0 1px rgba(255, 255, 255, .3);
}
.container{
  width: 100%;
  height: 400px;
  overflow: auto;
}
.inner{
  background-image: url("http://lorempixel.com/800/800/");
  background-repeat: no-repeat;
  width:100%;
  height:800px;
}

/* フォントサイズ */
.font-mini {
  font-size: 0.8rem;
}
</style>
