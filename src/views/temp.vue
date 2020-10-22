<template>
    <div class="row">
        <div class="col-xl-5 col-md-9 mx-auto main">
            <h1>新規アカウント登録</h1>
            <el-form ref="form" :model="form" :rules="rules" label-width="150px">
                <el-form-item label="名前" prop="name">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="ログインID" prop="loginId">
                    <el-input v-model="form.loginId"></el-input>
                </el-form-item>
                <el-form-item label="パスワード" prop="password">
                    <el-input type="password" v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item label="確認用パスワード" prop="confirmPassword">
                    <el-input type="password" v-model="form.confirmPassword"></el-input>
                </el-form-item>
                <el-form-item label="LINE Notify Token" prop="lineToken">
                    <el-input v-model="form.lineToken"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="addAccount('form')">登録</el-button>
                    <el-button @click="returnLogin()">ログイン画面に戻る</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    
    export default {
        name: "Signup",
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
                const regexLoginId = (rule, value, callback) => {
                    var regex = new RegExp(/^[a-zA-Z0-9]{1,10}$/);
                    if (!regex.test(value)) {
                        callback(new Error());
                    }
                    callback();
                };
                return {
                    form: {
                        id: null,
                        name: undefined,
                        uuid: null,
                        loginId: undefined,
                        password: undefined,
                        confirmPassword: undefined,
                        lineToken: undefined,
                        createdDate: null,
                        updatedDate: null
                    },
                    rules: {
                        loginId: [
                            { required: true, message: 'ログインIDを入力して下さい', trigger: 'blur' },
                            { min: 1, max: 10, message: 'ログインIDは1文字以上10文字以下で入力して下さい', trigger: 'blur' },
                            { validator: regexLoginId, message:'ログインIDは半角英数字で1文字以上10文字以下で入力して下さい', trigger: 'blur' },
                        ],
                        name: [
                            { required: true, message: '名前を入力して下さい', trigger: 'blur' },
                            { min: 1, max: 10, message: '名前は1文字以上10文字以下で入力して下さい', trigger: 'blur' },
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
                        lineToken: [
                            { required: true, message: 'LINE Notify Tokenを入力して下さい', trigger: 'blur' },
                            { min: 40, max: 50, message: 'LINE Notify Tokenは40文字以上50文字以下で入力して下さい', trigger: 'blur' }
                        ],
                    },
                }
            },
            methods: {
                addAccount: async function (form) {
                    try {
                        this.$refs[form].validate((valid) => {
                            if (!valid) {
                                throw new Error('バリデーションエラー');
                            }
                        });
                        await this.$axios.post(process.env.VUE_APP_API + '/api/accounts', this.form ,{ 
                                    withCredentials: true, 
                                });
                        this.$router.push({
                            path: '/login',
                            query: { lineNotify: 'sent' }
                        });
                    } catch (error) {
                        console.log(error);
                    }
                },
                returnLogin: function(){
                    this.$router.push('/login');
                }
            }
    }
</script>