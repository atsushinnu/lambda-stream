<template>
    <div class="row">
        <div class="col-xl-5 col-md-9 mx-auto main">
            <h1>ログイン</h1>

            <el-form ref="form" :model="form" :rules="rules" label-width="130px" label-position="left">
                <el-form-item label="メールアドレス" prop="mail" class="text-nowrap text-left">
                    <el-input type="email" v-model="form.mail"></el-input>
                </el-form-item>
                <el-form-item label="パスワード" prop="password" class="text-nowrap">
                    <el-input type="password" v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login('form')">登録</el-button>
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
        mail:'',
        password:'',
        confirmPassword:'',
      },
      rules: {
          mail: [
              { required: true, message: ' メールアドレスを入力して下さい', trigger: 'blur' },
              { validator: regexMail, message:'メールアドレスの形式で入力してください', trigger: 'blur' },
          ],
          password: [
              { required: true, message: 'パスワードを入力して下さい', trigger: 'blur' },
              { validator: regexPassword, message:'パスワードは半角英字と半角数字それぞれ1文字以上含む5文字以上20文字以下の文字列で入力して下さい', trigger: 'blur' },
          ],
          confirmPassword: [
              { required: true, message: '確認用パスワードを入力して下さい', trigger: 'blur' },
              { validator: regexPassword, message:'確認用パスワードは半角英字と半角数字それぞれ1文字以上含む5文字以上20文字以下の文字列で入力して下さい', trigger: 'blur' },
              { validator: validateConfirmPassword, message:'パスワードと確認用パスワードが異なります', trigger: 'blur' },
          ]      
      },
    }
  },
  methods: {
    login(form){
      this.$refs[form].validate((valid) => {
                            if (!valid) {
                                throw new Error('バリデーションエラー');
                            }
      });
      axios.post('http://localhost:8081/test/login',this.form,{
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
  },
};
</script>

<style scoped>
.row{
  height: 90vh;
}
</style>