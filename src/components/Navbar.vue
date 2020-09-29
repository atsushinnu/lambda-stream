<template>
  <div id="nav">
    <img src="../assets/logo.png" width="128px">
    <router-link to="/first">ラムダ＆StreamAPI</router-link> |
    <router-link to="/second">中間操作とは</router-link> |
    <router-link to="/third">終端操作とは</router-link> |
    <router-link to="/question">問題</router-link>
  </div>
</template>

<script>

</script>

<style scoped>
#nav {
  margin: 20px;
  text-align: center;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 1.5rem;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>