<template>
    <div class="row">
        <div class="col-xl-5 col-md-9 mx-auto">
            <h1>新規アカウント登録</h1>

            <el-form ref="form" :model="form" label-width="150px">
                <el-form-item label="名前">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="メールアドレス">
                    <el-input v-model="form.mail"></el-input>
                </el-form-item>
                <el-form-item label="パスワード">
                    <el-input type="password" v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item label="確認用パスワード">
                    <el-input type="password" v-model="form.confirmPassword"></el-input>
                </el-form-item>
                <el-form-item label="所属地域" placeholder="Select">
                    <el-select v-model="form.branch">
                      <el-option v-for="branch in branches" v-bind:key="branch.id" v-bind:value="branch.name"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="所属部署" placeholder="Select">
                    <el-select  v-model="form.division">
                      <el-option v-for="div in divisons" v-bind:key="div" v-bind:value="div"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="createUser">登録</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>

import axios from "axios";
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
  methods: {
    createUser(){
      axios.post('http://localhost:8081/test',this.form,{
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    },

    testMethod(){
      console.log(this.form)
    }
  },
  created:function(){
    this.divisons = ["DSU","ISU","AMU","FBI","CIA","KGB"]
    axios.get('http://localhost:8081/test/getBranch',{
      })
      .then((response) => {
        this.branches = response.data.branchesList
      })
      .catch((error) => {
        console.log("errorです" + error);
      });
  }

};
</script>

<style scoped>
</style>