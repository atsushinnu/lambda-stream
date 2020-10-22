<template>
    <div class="row">
        <div class="col-xl-5 col-md-9 mx-auto">
            <h1>新規アカウント登録</h1>

            <el-form ref="form" :model="form" :rules="rules" label-width="130px" label-position="left">
                <el-form-item label="名前" prop="name" class="text-nowrap">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="メールアドレス" prop="mail" class="text-nowrap text-left">
                    <el-input type="email" v-model="form.mail"></el-input>
                </el-form-item>
                <el-form-item label="パスワード" prop="password" class="text-nowrap">
                    <el-input type="password" v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item label="確認用パスワード" prop="confirmPassword" class="text-nowrap">
                    <el-input type="password" v-model="form.confirmPassword"></el-input>
                </el-form-item>
                <div class="d-flex">
                  <el-form-item label="入社年月" prop="assignedDate">
                      <el-date-picker
                        type="month"
                        v-model="form.assignedDate"
                        placeholder="Pick a month">
                      </el-date-picker>
                  </el-form-item>
                  <span class="mx-auto">{{form.assignedDate | moment("YYYY年MM月")}}</span>
                </div>
                <el-form-item label="所属地域" placeholder="Select" prop="branch">
                    <el-select v-model="form.branch">
                      <el-option v-for="branch in branches" v-bind:key="branch.id" v-bind:value="branch.name"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="所属部署" placeholder="Select" prop="division">
                    <el-select  v-model="form.division">
                      <el-option v-for="div in divisions" v-bind:key="div.id" v-bind:value="div.name"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="createUser('form')">登録</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import moment from "moment";
import axios from "axios";
export default {
  components: {
  },
  data() {
    const validateConfirmPassword = (rule, value, callback) => {
                    if (value !== this.form.password) {
                        callback(new Error());
                    }
                    callback();
                };
    const regexPassword = (rule, value, callback) => {
        var regex = new RegExp(/^(?=.*?[a-z])(?=.*?\d)[a-z\d]{5,20}$/i);
        if (!regex.test(value)) {
            callback(new Error());
        }
        callback();
    };
    const regexMail = (rule, value, callback) => {
        var regex = new RegExp(/^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/);
        if (!regex.test(value)) {
            callback(new Error());
        }
        callback();
    };

    return {
      form:{
        name:'',
        mail:'',
        assignedDate:new Date(),
        password:'',
        confirmPassword:'',
        branch:'',
        division:''
      },
      rules: {
          mail: [
              { required: true, message: ' メールアドレスを入力して下さい', trigger: 'blur' },
              { validator: regexMail, message:'メールアドレスの形式で入力してください', trigger: 'blur' },
          ],
          name: [
              { required: true, message: '名前を入力して下さい', trigger: 'blur' },
              { min: 1, max: 20, message: '名前は1文字以上20文字以下で入力して下さい', trigger: 'blur' },
          ],
          password: [
              { required: true, message: 'パスワードを入力して下さい', trigger: 'blur' },
              { validator: regexPassword, message:'パスワードは半角英字と半角数字それぞれ1文字以上含む5文字以上20文字以下の文字列で入力して下さい', trigger: 'blur' },
          ],
          confirmPassword: [
              { required: true, message: '確認用パスワードを入力して下さい', trigger: 'blur' },
              { validator: regexPassword, message:'確認用パスワードは半角英字と半角数字それぞれ1文字以上含む5文字以上20文字以下の文字列で入力して下さい', trigger: 'blur' },
              { validator: validateConfirmPassword, message:'パスワードと確認用パスワードが異なります', trigger: 'blur' },
          ],
          assignedDate: [
              { required: true, message: '入社年月を入力してください', trigger: 'blur' },
          ],
          branch: { required: true, message: '所属地域を入力してください', trigger: 'blur' },
          
          division:{ required: true, message: '所属部署を入力してください', trigger: 'blur' },
      },
      branches:{
                  id:'',
                  name:''
                },
      divisions:{
                  id:'',
                  name:''
                },
    }
  },
  methods: {
    createUser(form){
      this.$refs[form].validate((valid) => {
                            if (!valid) {
                                throw new Error('バリデーションエラー');
                            }
      });
      axios.post('http://localhost:8081/test',this.form,{
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    },
  },
  created:function(){
    //APIから所属情報を受け取る
    axios.get('http://localhost:8081/test/getBranch',{
      })
      .then((response) => {
        this.branches = response.data.branchesList
      })
      .catch((error) => {
        console.log("errorです" + error);
      });

      //APIから所属情報を受け取る
      axios.get('http://localhost:8081/test/getDivision',{
      })
      .then((response) => {
        this.divisions = response.data.divisionList
      })
      .catch((error) => {
        console.log("errorです" + error);
      });
  },
  filters: {
    moment(value, format) {
      return moment(value).format(format);
    }
  }
};
</script>

<style scoped>
.row{
  height: 90vh;
}
</style>