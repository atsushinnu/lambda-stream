<template>
  <div id="app">
    <Header id="header"></Header>
    <div class="main-content">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue" 
export default {
  components: {
    Header,
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: "Meiryo", "メイリオ", "游ゴシック体", "Yu Gothic", YuGothic,
    "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", "sans-serif";
}
pre {
  font-family: "Meiryo", "メイリオ", "游ゴシック体", "Yu Gothic", YuGothic,
    "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", "sans-serif";
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
  margin-top: 30px;
}

.header {
  top: 0;
  width: 100%;
  z-index: 1;
  font-size: 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  background: #ffffff;
}

.router{
  display: block;
  width: 1600px;
}

.sidebar {
  width: 300px;
}
.sidebar-item {
  margin-bottom: 20px;
  position: sticky;
  margin-bottom: 0;
  top: 10px;
  z-index: 1;
  font-size: 18px;
}

.container {
  width: 100%;
  height: 400px;
  overflow: auto;
}
.inner {
  background-image: url("http://lorempixel.com/800/800/");
  background-repeat: no-repeat;
  width: 100%;
  height: 800px;
}

/* フォントサイズ */
.font-mini {
  font-size: 0.8rem;
}
</style>
