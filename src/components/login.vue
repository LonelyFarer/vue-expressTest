
<template>
<div class="background">
   
    <div class="register">
        <el-form :model="loginList" ref="loginList" :label-position="labelPosition" label-width="100px" :rules="rules">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="loginList.username" placeholder="请输入用户名" clearable></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" placeholder="请输入密码" v-model="loginList.password" clearable></el-input>
            </el-form-item>

            <el-form-item  prop="validate" label="验证码">
                    <el-input v-model="loginList.validate" class="validate-code" placeholder="验证码" ></el-input>
                    <div class="code1" @click="refreshCode">
                        <s-identify :identifyCode="identifyCode"></s-identify>
                    </div>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm('loginList')" >登录</el-button>
                <a href="javascript:void(0)" @click="reset()">忘记密码？</a>
                <a href="javascript:void(0)" @click="register()">注册账号</a>
            </el-form-item>
        </el-form>
    </div>
</div>
</template>

<script language="javascript" type="text/javascript">
var code;
import Util from '../utils/utils';
export default {
    name:'login',
    inject:['reload'],
    data(){
        return {
            identifyCodes: "1234567890",
            identifyCode: "",
            labelPosition:'right',
            show:false,
            loginList:{
                username:'',
                password:'',
                //vcodeVal:'',
                validate: ''  
            },
            rules:{
                username:[ { required: true, message: '请输入用户名', trigger: 'blur' },],
                password:[ { required: true, message: '请输入密码', trigger: 'blur' },],
                //vcodeVal:[ { required: true, message: '请输入验证码', trigger: 'blur' }],
                validate: [ { required: true, message: '请输入验证码', trigger: 'blur' } ]
            },

           
            }
       
        },
        
        mounted() {
            //this.createCode();
            this.identifyCode = "";
            this.makeCode(this.identifyCodes, 4);
        },
         methods:{

            register(){
                this.$router.push('/register')
            },
            reset(){
                this.$router.push('/reset')
            },
            randomNum(min, max) {
                return Math.floor(Math.random() * (max - min) + min);
            },
            refreshCode() {
                this.identifyCode = "";
                this.makeCode(this.identifyCodes, 4);
            },
            makeCode(o, l) {
                for (let i = 0; i < l; i++) {
                    this.identifyCode += this.identifyCodes[
                    this.randomNum(0, this.identifyCodes.length)
                    ];
                }
                console.log(this.identifyCode);
            },

        
         submitForm(formName) {
                // debounceAjax(formName)
                const self = this;
                self.$refs[formName].validate((valid) => {
                    if (valid) {                      
                        self.$http.post('/api/user/login',JSON.stringify(self.loginList))
                        .then((response) => {
                            console.log(response);
                            if (response.data == -1) {
                                self.$message.warning('该用户不存在');
                            } else if (response.data == 0) {
                                self.$message.warning('密码错误');
                               
                            } else if (self.loginList.validate != self.identifyCode) {
                                self.$message.warning('验证码错误');
                              
                            }else if (response.status == 200) {
                                self.show=true;
                                self.$message.success('登录成功'),
                                self.$router.push('/Home');
                                sessionStorage.setItem('ms_username',self.loginList.username);
                                sessionStorage.setItem('ms_user',JSON.stringify(self.loginList));
                                this.reload();
                                console.log(self.show);  
                            }                            
                        }).then((error) => {
                            console.log(error);
                        })
                    } else {
                        self.$message.warning('请确保填写信息正确！');
                        return false;
                    }
                });
            },

            // debounce(func, delay) {
            //     return function(args) {
            //         var _this = this
            //         var _args = args
            //         clearTimeout(func.id)
            //         func.id = setTimeout(function() {
            //         func.call(_this, _args)
            //         }, delay)
            //     }
            // },
            // submitDebounce(formName) {
            //     const self = this;
            //     self.$refs[formName].validate((valid) => {
            //         if (valid) {
            //             localStorage.setItem('ms_username',self.loginList.username);
            //             localStorage.setItem('ms_user',JSON.stringify(self.loginList));
            //             console.log(JSON.stringify(self.loginList));                        
            //             self.$http.post('/api/user/login',JSON.stringify(self.loginList))
            //             .then((response) => {
            //                 console.log(response);
            //                 if (response.data == -1) {
            //                     self.errorInfo = true;
            //                     self.errInfo = '该用户不存在';
            //                     console.log('该用户不存在')
            //                 } else if (response.data == 0) {
            //                     console.log('密码错误')
            //                     self.errorInfo = true;
            //                     self.errInfo = '密码错误';
            //                 } else if (response.status == 200) {
            //                     self.$router.push('/Home');
            //                 }                            
            //             }).then((error) => {
            //                 console.log(error);
            //             })
            //         } else {
            //             console.log('error submit!!');
            //             return false;
            //         }
            //     });
            // },
            // debounceAjax () {
            //     debounce(submitDebounce,1000);
            // }
     }
}
</script>

<style lang="scss" scoped>
.code
    {
        background:url(../assets/code_bg.png);
        font-family:Arial;
        font-style:italic;
        color:blue;
        font-size:30px;
        border:0;
        padding:2px 3px;
        letter-spacing:3px;
        font-weight:bolder;             
        float:left;            
        cursor:pointer;
        width:150px;
        height:60px;
        line-height:60px;
        text-align:center;
        vertical-align:middle;

    }
     .code1 {
        width: 112px;
        height: 35px;
        border: 1px solid #ccc;
        float: right;
        border-radius: 2px;
    }
      .validate-code {
        width: 150px;
        float: left;
    }
.background{
    width:1200px;
    height:548px;
    margin:auto;
    margin-top:20px;
    margin-bottom:20px;
    background-image: url(../assets/background.png);
}
.register{
    height:350px;
    width:500px;
    margin-top:20px;
    margin-bottom:20px;
    float:right;
    .el-form{
        margin-top:100px;
        margin-left:50px;
    }
    .el-form-item{
        width:400px;
       
        .el-button{
            float:left;
            margin-bottom:20px;
        }
    }
   
    a{
        margin-left:20px;
        line-height:42px;
        text-decoration: none;
        float:left;
    }
}
.el-form-item.is-required .el-form-item__label:before{
    content:''
}
</style>

