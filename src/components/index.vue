<template>
<div class="">
  
  <div class="loginRegister">
    <div class="logo"><span>中医治未病养生交流网</span></div>
    <div class="search">
      <el-input placeholder="请输入关键词" clearable v-model="searchValue">
      <el-button slot="append" icon="el-icon-search" @click="search"></el-button></el-input>
    </div>
    <a href="javascript:void(0)" @click="communicate()" style="margin-right:20px;">交流平台</a>
    <div style="display:inline-block" v-if="!username">
      <a href="javascript:void(0)" @click="login()">登录</a>/
      <a href="javascript:void(0)" @click="register()" style="margin-right:30px">注册</a>
    </div>
       
      <el-dropdown trigger="click" @command="handleCommand">
          <span style="font-size:18px;">
              {{username}}
          </span>
          <el-dropdown-menu slot="dropdown" style="width:100px">
              <el-dropdown-item command="userCenter">个人中心</el-dropdown-item>
              <el-dropdown-item command="collect">我的收藏</el-dropdown-item>
              <el-dropdown-item command="loginout">退出</el-dropdown-item>
          </el-dropdown-menu>
      </el-dropdown>

  </div>
<div class="navbg">
    <div class="myul">
      <ul class="mainul">
      <li :class="activeClass == index ? 'active':''" v-for="(item,index) in itemList" :key="index" @click="Home(index)"><a  href="javascript:void(0)" >{{item}}</a></li>
      <!-- <li><a href="javascript:void(0)" @click="nous()">常识</a></li>
      <li> -->
        <!-- <el-dropdown :hide-on-click="false"> -->
      <!-- <a href="javascript:void(0)" @click="diet()">膳食</a> -->
      <!-- <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>养生食谱</el-dropdown-item>
        <el-dropdown-item>养生问答</el-dropdown-item>
        <el-dropdown-item>养生科普</el-dropdown-item>
      </el-dropdown-menu>
      </el-dropdown>-->
      <!-- </li> 
      <li><a href="javascript:void(0)" @click="disease()">疾病</a></li> -->
      <!-- <li><el-dropdown :hide-on-click="false">
      <a href="javascript:void(0)" @click="health()">养生</a>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="diethealth()">饮食养生</el-dropdown-item>
        <el-dropdown-item @click.native="seasonhealth()">季节养生</el-dropdown-item>
        <el-dropdown-item @click.native="populationhealth()">人群养生</el-dropdown-item>
        <el-dropdown-item @click.native="sporthealth()">运动养生</el-dropdown-item>
        <el-dropdown-item @click.native="livinghealth()">生活养生</el-dropdown-item>
        <el-dropdown-item @click.native="healthcultivation()">中医养生</el-dropdown-item>
      </el-dropdown-menu></el-dropdown></li> -->
      <!-- <li> <a href="javascript:void(0)" @click="seasonhealth()">季节养生</a></li>
      <li> <a href="javascript:void(0)" @click="populationhealth()">人群养生</a></li>
      <li> <a href="javascript:void(0)" @click="sporthealth()">运动养生</a></li>
      <li> <a href="javascript:void(0)" @click="livinghealth()">生活养生</a></li>
      <li> <a href="javascript:void(0)" @click="healthcultivation()">中医养生</a></li>
      <li><a href="javascript:void(0)" @click="special()">专题</a></li>
       -->
    </ul>
    </div>
  </div>
    <!-- <div class="headimg">
      <img src='../assets/health.png' alt="治未病">
    </div> -->
    <div class="body">
      <router-view></router-view>
    </div>
    <div class="footer">
      <div class="foot_con">
        Copyrights © 2018 治未病养生交流 www.pdhc.com, All rights reserved. 
      </div>
    </div>
</div>
</template>

<script>

export default {
  name: 'index',
  inject:['reload'],
 data() {
      return {
         searchValue:'',
         activeClass: 0, 
         itemList:['首页','常识','膳食','疾病','季节养生','人群养生','运动养生','生活养生','中医养生','专题'],
         routerList:['Home','nous','diet','disease','seasonhealth','populationhealth','sporthealth','livinghealth','healthcultivation','special']
      }
     
    },
     
     computed:{
            username(){
                let username = sessionStorage.getItem('ms_username');
               
                return username
            },
            user(){
               let user = sessionStorage.getItem('ms_user');
               return user
            }
        },
    
     methods: {
        handleCommand(command) {
            if(command == 'loginout'){
                sessionStorage.removeItem('ms_username')
                sessionStorage.removeItem('ms_user')
                this.$router.push('/login');
                this.reload();
            } 
            else if (command == 'userCenter') {
                this.$router.push('/userCenter');
            }
            else if (command == 'collect') {
                this.$router.push('/collect');
            }
        },

      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      Home(index){
        this.activeClass = index;
        this.$router.push('/'+this.routerList[index])
      },
      nous(){
        this.$router.push('/nous')
      },
      diet(){
        this.$router.push('/diet')
      },
      disease(){
        this.$router.push('/disease')
      },
      special(){
        this.$router.push('/special')
      },
      sporthealth(){
        this.$router.push('/sporthealth')
      },
      seasonhealth(){
        this.$router.push('/seasonhealth')
      },
      livinghealth(){
        this.$router.push('/livinghealth')
      },
      populationhealth(){
        this.$router.push('/populationhealth')
      },
      healthcultivation(){
        this.$router.push('/healthcultivation')
      },
      register(){
        this.$router.push('/register')
      },
      login(){
        this.$router.push('/login')
      },
      
      communicate(){
        this.$router.push('/communicate')
      },
      search(){
        if(this.searchValue=="运动养生"||this.searchValue=="运动"){
          this.$router.push('/sporthealth')
        }
         if(this.searchValue=="人群养生"||this.searchValue=="人群"){
          this.$router.push('/populationhealth')
        }
         if(this.searchValue=="季节养生"||this.searchValue=="季节"){
          this.$router.push('/seasonhealth')
        }
         if(this.searchValue=="中医养生"||this.searchValue=="中医"){
          this.$router.push('/healthcultivation')
        }
         if(this.searchValue=="生活养生"||this.searchValue=="生活"){
          this.$router.push('/livinghealth')
        }
        if(this.searchValue=="常识"){
          this.$router.push('/nous')
        }
         if(this.searchValue=="疾病"){
          this.$router.push('/disease')
        }
        if(this.searchValue=="膳食"||this.searchValue=="饮食"){
          this.$router.push('/diet')
        }
        if(this.searchValue=="老年人"||this.searchValue=="孕妇"||this.searchValue=="减肥"){
          this.$router.push('/special')
        }
      }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.logo{
  float:left;
  span{
    font-family: "cursive";
    font-size: 35px;
    font-style:italic;
    font-weight:bold;
    color:#63c414;
  }
}
.search{
  width:400px;
  display:inline-block;
  margin-right:30px;
 .el-button:hover{
   background:#bbebbb;
 }
}
.loginRegister{
  width:1200px;
  margin:auto;
  margin-bottom:10px;
  font-size:20px;
  text-align:right;
  a{
    color: #000000;
    text-decoration: none;
  }
  a:hover{
    color: #18c460;
  }
}
.active {
    background-color:rgb(65, 164, 245);
}
.body{
    height:100%;
}
.navbg{
    position: relative;
    height:53px;
    background-color: #17d14f;
}
.myul {
    position: relative;
    height:53px;
    margin:0 auto;
}
.mainul{
    list-style-type: none;
    height:53px;
    width: 1200px;
    margin:0 auto;
    padding:0;
    background-color: #17d14f;
    li {
    float: left;
    a {
    font-family: "MicrosoftYaHei-Bold";
    font-size: 18px;
    height:13px;
    line-height:13px;
    display: block;
    color: #ffffff;
    text-align: center;
    padding: 20px 30px 20px 30px;
    text-decoration: none;
    &:hover{
      background-color:rgb(50, 187, 221);
    }
    }
  }
}
.footer{
   background:#F8F8F8;
   height:100px;
   clear: both;
 }
 .foot_con{
   width:1200px;
   margin:auto;
   padding-top:40px;
   text-align:center;
 }
</style>