<template>
<div class="background">
    <div class="register">
        <el-form :model="registerList" ref="registerList" :label-position="labelPosition"  label-width="100px" :rules="rules">
            <el-form-item label="用户名" style="margin-top:20px;" prop="username">
                <el-input v-model="registerList.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" placeholder="请输入密码" v-model="registerList.password" clearable></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="password2">
                <el-input type="password" placeholder="请输入密码" v-model="registerList.password2" clearable></el-input>
            </el-form-item>
            <el-form-item label="邮箱"  prop="email">
                <el-input  v-model="registerList.email" placeholder="请输入邮箱" clearable></el-input>
            </el-form-item>
            <el-form-item label="手机" prop="phone">
					<el-input v-model="registerList.phone" placeholder="请输入手机号" clearable></el-input>
				</el-form-item>
            <el-form-item>
                <el-button type="primary" @click="register('registerList')">注册</el-button>
                <a href="javascript:void(0)" @click="login()">已有账号？直接登录</a>
            </el-form-item>
        </el-form>
    </div>
</div>
</template>

<script>
import Util from '../utils/utils';
export default {
    name:'registerList',
    data(){
        var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.registerList.password2 !== '') {
            this.$refs.registerList.validateField('password2');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.registerList.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      var validatePhone = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入手机号'));
            } else if (!Util.phoneReg.test(this.registerList.phone)){
                callback(new Error('请输入正确的手机号'));
            } else {
                callback();
            }
        };
    

        return {
            labelPosition:'right',
            registerList:{
                username:'',
                password:'',
                password2:'',
                email:'',
                phone:'',
            },
            rules:{
                
                email:[
                { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }],
                username:[ { required: true, message: '请输入用户名', trigger: 'blur' },],
                password:[ { required: true,validator: validatePass,  trigger: 'blur' },],
                password2:[ { required: true,validator: validatePass2, trigger: 'blur' },],
                phone: [ { required: true,validator: validatePhone, trigger: 'blur' },],
            }
        }
       
        },
        
         methods:{
            register(registerList){   
                const self = this;			
                
				self.$refs[registerList].validate((valid) => {
                    if (valid) {
                       self.$http.post('/api/user/login',JSON.stringify(self.registerList)).then((response) => {
                            if (response.data == -1) {
                                self.$http.post('/api/user/addUser',self.registerList).then(function(response) {
                                    self.$message.success('注册成功！跳转到登录页面'),
                                    self.$router.push('/login')
                                }).then(function(error) {
                                    console.log(error);
                                })
                            }
                            else{
                                self.$message.warning('用户名已经存在！')
                            }  
                        })
                    }else {
                        self.$message.warning('请确保填写信息正确！');
                        return false;
                    }
                });

                // if(!this.registerList.username||!this.registerList.password||!this.registerList.password2||!this.registerList.email){
                //     this.$message.warning("请输入必填信息！");
                // }  
                // else{
                //     this.$message.success('注册成功！跳转到登录页面'),
                //     this.$router.push('/login')
                // }
                },
            login(){
                this.$router.push('/login')
            }
            }
}
</script>

<style lang="scss" scoped>
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
    .el-input{
        width:300px;
    }
   
    a{
        margin-left:20px;
        line-height:42px;
        text-decoration: none;
        float:left;
    }
}
</style>