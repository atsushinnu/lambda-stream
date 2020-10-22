<template>
  <div class="header">
    <div>
      <b-navbar toggleable="lg" type="light" id="brand_title">
        <div  class="link">
            <router-link to="/">ホーム</router-link>
        </div>
        <div class="link">
            <router-link to="/signup">新規登録</router-link>
        </div>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

#brand_title {
  font-size: 1.0em;
  color: rgb(57, 61, 68);
  margin-right: 5px;
  text-decoration: none;
  display: flex;
  justify-content:flex-end;
}

.link {
  display: inline-block;
  padding-right:  10px;
  padding-left: 10px;
}

</style>