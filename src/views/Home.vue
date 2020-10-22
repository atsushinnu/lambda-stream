<template>
    <div class="home">
        <div class="contents">
            <div class="java">
                <router-link to="/first">ラムダ＆streamAPI</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      form:{
        name:'',
        mail:'',
        password:'',
        confirmPassword:'',
        branch:'',
        division:''
      },
      branches:{
                  id:'',
                  name:''
                },
      divisons:[]
    }
  },
};
</script>

<style scoped>
</style>