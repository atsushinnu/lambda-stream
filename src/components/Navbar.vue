<template>
  <div id="nav">
    <Slide right :closeOnNavigation="true">
      <div class="nav-link">
        <router-link to="/first">ラムダ＆StreamAPI</router-link>
      </div>
      <div class="nav-link">
        <router-link to="/second">中間操作とは</router-link>
      </div>
      <div class="nav-link">
        <router-link to="/third">終端操作とは</router-link>
      </div>
      <div class="nav-link">
        <router-link to="/fourth">関数型インターフェース</router-link>
      </div>
      <div class="nav-link">
        <router-link to="/">問題</router-link>
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
  text-align: center;
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