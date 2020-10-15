<template>
  <div id="nav">
    <Slide right :closeOnNavigation="true">
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
      <br>
      <br>
      <div class="nav-link">
        <router-link to="/contact">お問い合わせ</router-link>
      </div>
    </Slide>
  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu'

export default {
  components: {
    Slide
  }
}
</script>

<style scoped>
#nav {
  margin: 12px;
}
#nav a {
  font-weight: bold;
  color: #fff;
  font-size: 1.2rem;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>