<template>
<div class="background">
    <div class="register">
        <el-form :model="registerList" ref="registerList" :label-position="labelPosition"  label-width="100px" :rules="rules">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="registerList.username" placeholder="请输入用户名" clearable></el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="password">
                <el-input type="password" placeholder="请输入密码" v-model="registerList.password" clearable></el-input>
            </el-form-item>
            <el-form-item label="确认新密码" prop="password2">
                <el-input type="password" placeholder="请输入密码" v-model="registerList.password2" clearable></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit('registerList')">确定</el-button>
            </el-form-item>
        </el-form>
    </div>
</div>
</template>

<script>
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
        return {
            labelPosition:'right',
            registerList:{
                username:"",
                password:"",
                password2:"",
            },
            rules:{
                username:[ { required: true, message: '请输入用户名', trigger: 'blur' },],
                password:[ { required: true,validator: validatePass,  trigger: 'blur' },],
                password2:[ { required: true,validator: validatePass2, trigger: 'blur' },],
            }
        }
       
        },
         methods:{
              
            onSubmit(formName){
                const self = this;
				let formData = {
					username: self.registerList.username,
					password: self.registerList.password,
					password2: self.registerList.password2,
				};			
				
				self.$refs[formName].validate((valid) => {
                    if (valid) {
                         self.$http.post('/api/user/login',JSON.stringify(self.registerList)).then((response) => {
                            if (response.data == -1) {
                                self.$message.success("用户不存在！")
                            }
                            
                            else{
                                self.$http.post('/api/user/modifyPwd',formData).then(function(response) {
                                    console.log(response);
                                    self.$message.success("更改成功！")
                                    sessionStorage.removeItem('ms_username')
                                    sessionStorage.removeItem('ms_user')
                                    self.$router.push('/login');
                                    
                                }).then(function(error) {
                                    console.log(error);
                                })
                            }
                    })
                    }else {
                        self.$message.warning('请确保填写信息正确！');
                        return false;
                    }
                });

               
                
                
                }
            }
}
</script>

<style lang="scss">
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