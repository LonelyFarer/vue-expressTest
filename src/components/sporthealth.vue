<template>
    <div class="sporthealth">
        <h2 class="title">运动养生</h2>
         <ul class="sportlist">
            <li v-for="sport in sporthealth" :key = "sport.href"> 
                <img :src='sport.url' alt="运动养生">
                <h3><a :href="sport.href" :title="sport.title">{{sport.title}}</a></h3>
                <div class="content">{{sport.content}}</div>
            </li>
        </ul>
        
    </div>
</template>
<script>
export default {
    name: 'sporthealth',
    data(){
        return{
            sporthealth:[
                { url:require('../assets/sporthealth/swim.png'),href:'http://www.ttys5.com/yundong/wushu/2014-12-15/95829.html',title:'快速瘦身的七个游泳动作',
                content:'众所周知游泳能减肥。但总是只是一味的从起点游到终点，又从终点游到起点，是否觉得乏味了呢？今天小编分享快速瘦身的七个游泳动作，让美女们快速有效的减肥瘦身，成为水中瘦美人，下面为你介绍快速瘦身的七个游泳动作。'},
                { url:require('../assets/sporthealth/yoga.png'),href:'http://www.cnys.com/article/73057.html',title:'瑜伽入门基本动作，每天10分钟，让你的身体更挺拔！ ',
                content:'瑜伽入门体式，从头做到尾，每个动作都连贯起来，快速达到入门级。话不多说，想要开始练习瑜伽的，赶紧跟着练起来吧。'},
                { url:require('../assets/sporthealth/muscular-soreness.png'),href:'http://www.cnys.com/article/69774.html',title:'讲真 训练后肌肉酸痛多久才能恢复',
                content:'很多朋友一定经历过肌肉酸痛的问题，这也是一些新手健身者无法坚持健身的重要原因。因为如果很长时间不运动，运动一次后，会身疼痛，就忍不住想要放弃，一般健身教练就会告诉你，如果疼能的话，就休息几天吧，然而，一休息就再也不想运动了。肌肉酸痛多久才能恢复呢...'},
                { url:require('../assets/sporthealth/run.png'),href:'http://www.cnys.com/article/70905.html',title:'夏日跑步的十个关键点！快来get！',
                content:'对于热爱户外跑步的人来说，夏天除了大汗淋漓，还有高温炙热的噩梦。炎炎夏日，烈日当头，除了运动，还要时刻提防中暑和晒伤的问题，简直是极大的考验。那么，夏日跑步怎样才能跑的更舒服呢?'},
                { url:require('../assets/sporthealth/daily-exercise.png'),href:'http://www.cnys.com/article/69690.html',title:'日常锻炼身体的方法 简单易行要牢记',
                content:'有些人说，我不是不锻炼身体，是因为没有时间和方便的地点。其实我们生活中，有很多很简单的方法，也可以运动养生。下面给大家介绍一些简单易行的日常运动养生法...'},
                { url:require('../assets/sporthealth/muscle-growth.png'),href:'http://www.cnys.com/article/68802.html',title:'增长肌肉的十种最佳食品,你知道几个',
                content:'健美的目的，是如何通过训练有效地增大身体各部位的肌肉块。对高级健美运动员来说，是要用顶峰收缩法、间歇控制、借力法则、特殊器械、复杂的食谱及新的、科学的训练方法对自已的身体进行精雕细刻，使之更加完善。...'},
                { url:require('../assets/sporthealth/taiji.png'),href:'http://www.cnys.com/article/68105.html',title:'太极拳养生需注意,什么时间练习最适宜',
                content:'经常在早晨的公园里面会看到一些老人，他们正在认真的打太极，这是老一辈们最爱的运动了。不过有一点要注意，什么时间练习太极拳是最适宜的？正确的时间做正确的事情，当然效果会更好...'},
                { url:require('../assets/sporthealth/exerice.png'),href:'http://www.cnys.com/article/69130.html',title:'不想去健身房锻炼,三种低成本运动推荐给你',
                content:'对于长期久坐在办公室的人来说，锻炼是一件很奢侈的事。长期的不运动，容易患鼠标手、肩周炎等疾病。有没有什么方法可以缓解?本文为你推荐三种方式，每天花点时间让自己动起来，低成本练出健康的身体...'},
                ]
        }
    },
    methods:{

    }
}
</script>
<style lang="scss" scoped>
.content{
    width:800px;
    margin-top:55px;
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
.sporthealth{
    
    width:1200px;
    margin:auto;
    text-align:left;
    
    .sportlist{
        width:1200px;
        padding:0;
       
    }
    img{
        float:left;
    }
    a{
        line-height:10px;
        margin-left:20px;
        color: #111;
        text-decoration: none;
        float: left;
    }
    a:hover{
        color:#f71505;
    }
}
</style>