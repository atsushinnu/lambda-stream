<template>
  <div id="app">
    <div class="main-content">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  components: {
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
