<template>
    <div class="collect">
        <h2 class="title">我的收藏</h2>
         <ul class="sportlist">
            <li v-for="(collect,index) in collectList" :key = "collect.href"> 
                <img :src='collect.url' alt="运动养生">
                <div class="delbtn">
                    <el-button type="primary" @click="del(index)" >删除</el-button>
                </div>
                <div class="content">
                <h3><a :href="collect.href" :title="collect.title">{{collect.title}}</a></h3>
                {{collect.content}}</div>
               
            </li>
        </ul>
        
    </div>
</template>
<script>
export default {
    name: 'collect',
    data(){
        return{
            collectList:[
                { url:require('../assets/livinghealth/cake.png'),href:'https://www.cndzys.com/shenghuoyangsheng/changshi/1550835.html',title:'吃完蛋糕后怎样不发胖?',
                content:'在现实生活中蛋糕是属于一种十分常见的甜品，蛋糕的主要成分是鸡蛋以及面粉和白糖所制作而成，加上奶油，蛋糕的热量非常高，经常食用会容易增加身体脂肪，容易导致身体出现肥胖的现象，而食用蛋糕后不发胖的方法也有很多种，可以在吃完蛋糕后喝一些柠檬水，或者是食用一些低脂食物。'},
                { url:require('../assets/sporthealth/exerice.png'),href:'http://www.cnys.com/article/69130.html',title:'不想去健身房锻炼,三种低成本运动推荐给你',
                content:'对于长期久坐在办公室的人来说，锻炼是一件很奢侈的事。长期的不运动，容易患鼠标手、肩周炎等疾病。有没有什么方法可以缓解?本文为你推荐三种方式，每天花点时间让自己动起来，低成本练出健康的身体...'},
                { url:require('../assets/healthcultivation/indigestion.png'),href:'http://www.zhys.com/zixun/8616.html',title:'四款专治消化不良的药膳 防护从饮食做起',
                content:'消化不良是由于先天妆磲裔香禀赋不足、饮食失节、外感湿邪等引起，轻症饮食治疗即可见良效。并且每天不进若益肽屙行有必要的防护，当消化不良时就会造成大麻烦，每天从防护做起，每天含食几颗芳雨天源青橄榄就有很好疗效。下面就来介绍四种调理药膳。'},
                { url:require('../assets/populationhealth/feelsleepy.png'),href:'http://www.zhys.com/zixun/163.html',title:'每天睡不醒上班无精神 怎样缓解犯困',
                content:'每个人容易犯困的时间节点不一样，有些人容易在上午犯困，有些人是下午犯困，而有些人则容易在晚上犯困，无论你是哪一种，都可以找到方法缓解犯困的问题。'},
                { url:require('../assets/seasonhealth/winter.png'),href:'http://www.yswol.com/jijie/dongji/7971.shtml',title:'冬季进补吃这些，一个冬天不生病',
                content:'冬季寒风呼啸，肺部容易受风寒，而且胃部一定要注意保暖，一旦受到寒气袭击很容易引起胃痛。因此可以趁着寒冬适当进补，比如吃一些温补的食物。吃什么进补好呢？冬季进补有也是有讲究的。下面给大家推荐一些食材，它们都是进补很不错的选择。'},
                 { url:require('../assets/diet/soybean.png'),href:'https://www.cndzys.com/yinshi/jinji/1548403.html',title:'每天喝豆浆好吗 吃豆浆有哪四忌',
                content:'豆浆都是人人爱的食物，尤其是作为早餐搭配馒头、面包或是包子，这种比较传统的吃法及营养又方便，而且老少皆宜，豆浆的营养价值也很高，能很好的降低胆固醇，预防衰老，防止骨质疏松等,虽然营养价值高，但喝豆浆也有禁忌。'},
                ],

        }
    },
    methods:{
        del(index){
            this.collectList.splice(index,1);
            this.$message.success('删除成功！')
        }
    }
}
</script>
<style lang="scss" scoped>
.content{
    width:800px;
  
    margin-left:200px;
}
li{
    list-style: none;
    width:1200px;
    margin-bottom:20px;
    float:left;
}
.title{
    color:#17d14f;
    text-align:left;
}
.collect{
    
    width:1200px;
    margin:auto;
    text-align:left;
    .delbtn{
        float:right;
        height:130px;
        display:flex;
        align-items: center;
    }
    .sportlist{
        width:1200px;
        padding:0;
       
    }
    img{
        float:left;
    }
    a{
        line-height:10px;
        color: #111;
        text-decoration: none;
        float: left;
    }
    a:hover{
        color:#f71505;
    }
    h3{
    height:15px;
    }
    .el-button{
        height:40px;
    }
}
</style>
<style lang="scss">
.body{
    height:100%;
    min-height:800px;
}
</style>