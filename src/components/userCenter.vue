<template>
	<div>
		<div class="userContent">
			<el-form ref="loginList" :model="loginList" :rules="rules" label-width="80px">
				<el-form-item prop="password" label="密码">
					<el-input v-model="loginList.password" type="password" placeholder="请输入密码"></el-input>
				</el-form-item>
				<el-form-item prop="password2" label="确认密码">
					<el-input v-model="loginList.password2" type="password" placeholder="请再次输入密码"></el-input>
				</el-form-item>
				<el-form-item prop="email" label="邮箱">
					<el-input v-model="loginList.email" placeholder="请输入邮箱"></el-input>
				</el-form-item>
				<el-form-item prop="phone" label="手机">
					<el-input v-model="loginList.phone" placeholder="请输入手机号"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="onSubmit('loginList')">确定</el-button>
					<el-button @click="onCancle()">取消</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
import Util from '../utils/utils';
	export default {
		 inject:['reload'],
		data() {
			var validatePass = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请输入密码'));
				} else {
					if(this.loginList.password2 !== '') {
						this.$refs.loginList.validateField('password2');
					}
					callback();
				}
			};
			var validatePass2 = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请再次输入密码'));
				} else if (value !== this.loginList.password) {
					callback(new Error('两次输入的密码不一致'));
				} else {
					callback();
				}
			};
			var validateEmail = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入邮箱'));
				} else if (!Util.emailReg.test(this.loginList.email)){
					callback(new Error('请输入正确的邮箱'));
				} else {
					callback();
				}
			};
			var validatePhone = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入手机号'));
				} else if (!Util.phoneReg.test(this.loginList.phone)){
					callback(new Error('请输入正确的手机号'));
				} else {
					callback();
				}
			};
            return {
				loginList: {
					password: '',
					password2: '',
					email:'',
					phone:''
				},
				rules: {
					password: [
                        { validator: validatePass, trigger: 'blur'}
                    ],
                   password2: [
                        { validator: validatePass2, trigger: 'blur' }
					],
					email: [
                        { validator: validateEmail, trigger: 'blur' }
                    ],
                    phone: [
                        { validator: validatePhone, trigger: 'blur' }
                    ],
				}
			}
        },
        methods:{
        	onSubmit(formName) {
				const self = this;
				let formData = {
					username: sessionStorage.getItem('ms_username'),
					password: self.loginList.password,
					password2: self.loginList.password2,
					email: self.loginList.email,
					phone: self.loginList.phone
				};			
				console.log(formData,111)
				self.$refs[formName].validate((valid) => {
                    if (valid) {
                        self.$http.post('/api/user/updateUser',formData).then(function(response) {
												console.log(response);
												self.$message.success("更改成功！")
												sessionStorage.removeItem('ms_username')
                								sessionStorage.removeItem('ms_user')
												self.$router.push('/login');
												self.reload();
											}).then(function(error) {
												console.log(error);
											})
                    } else {
                        self.$message.warning('请将信息填写完毕！');
                        return false;
                    }
                });
        	},
        	onCancle() {
        		this.$router.push('/userCenter');
        	}        	
        }
	}
</script>

<style>
	.userContent {
		width: 400px;
		margin: 0 auto;
		margin-top:30px;
	}
</style>
   