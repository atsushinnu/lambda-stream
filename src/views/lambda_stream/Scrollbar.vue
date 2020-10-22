<template>
  <div id="nav">
    <div class="scrollItem">
      <perfect-scrollbar>
        <span class="title">Javaラムダ＆StreamAPI</span>
        <br />
        <br />
        <div class="nav-link">
          <router-link to="/">1. ジェネリクス</router-link>
        </div>
        <div class="nav-link">
          <router-link to="/second">2. 関数型インターフェース</router-link>
        </div>
        <div class="nav-link">
          <router-link to="/third">3. ラムダ</router-link>
        </div>
        <div class="nav-link">
          <router-link to="/fourth">4. StreamAPI</router-link>
        </div>
        <div class="nav-link">
          <router-link to="/fifth">5. 中間操作</router-link>
        </div>
        <div class="nav-link">
          <router-link to="/sixth">6. 終端操作</router-link>
        </div>
        <div class="nav-link">
          <router-link to="/question">7. 練習問題&参考解答集</router-link>
        </div>
        <br />
        <br />
        <div class="nav-link">
          <router-link to="/contact">ご意見・ご要望</router-link>
        </div>
      </perfect-scrollbar>
    </div>
  </div>
</template>

<script>
import { PerfectScrollbar } from "vue2-perfect-scrollbar";
export default {
  components: {
    PerfectScrollbar,
  },
};
</script>
<style src="vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css" />
<style>
#nav {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
}
.scrollItem {
  position: relative;
  width: 300px;
  height: 600px;
}
.scrollItem p {
  text-align: left;
}
.ps {
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.title{
font-size: 25px;
font-weight: bold;
}
</style>
