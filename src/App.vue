<template>
  <div id="app">
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
}

</style>
