<template>
    <div class="special">
         <h2 class="title">专题养生</h2>
         <div class="elderhealth">
              <h3>老年人养生</h3>
              <div class="diseasetype-title" style="clear:left;"></div>
              <div class="introduction">人们从60岁开始步入老年阶段，这一阶段有其独特的生理代谢特点。如基础代谢率下降，细胞的功能下降，同时器官的功能也有所改变。体内的细胞数量减少，矿物质慢慢流失，体内的水分也有所减少，各个系统的功能也有所降低。</div>
              <h4>老人适宜食材</h4>
              <div class="healthborder"></div>
              <div class="elderfood">
                <ul >
                <li v-for="elder in elderlist" :key = "elder.href"> 
                    <img :src='elder.url' alt="老人适宜食材">
                    <h3 style="margin-left:10px"><a :href="elder.href" :title="elder.title">{{elder.title}}</a></h3>
                </li>
              </ul>
               </div>
               <h4>老人养生</h4>
               <div class="healthborder"></div>
               <div class="elderly">
                <ul >
                    <li v-for="elderhealth in elderhealthlist" :key = "elderhealth.href"> 
                        <img :src='elderhealth.url' alt="老人养生">
                        <a :href="elderhealth.href" :title="elderhealth.title">{{elderhealth.title}}</a>
                    </li>
                </ul>
               </div>
              
         </div>

         <div class="elderhealth">
              <h3>孕妇养生</h3>
              <div class="diseasetype-title" style="clear:left;"></div>
              <div class="introduction">大多数准妈妈在确认自己怀孕后，便开始操心起自己的营养来。担心营养不够，怕宝宝发育不良。孕妇的营养问题成为了家人及朋友"万众瞩目"的焦点。在此期间，应注意饮食的合理搭配、饮食多样化</div>
              <h4>孕妇适宜食材</h4>
              <div class="healthborder"></div>
              <div class="elderfood">
                <ul >
                <li v-for="gravida in gravidalist" :key = "gravida.href"> 
                    <img :src='gravida.url' alt="孕妇适宜食材">
                    <h3 style="margin-left:10px"><a :href="gravida.href" :title="gravida.title">{{gravida.title}}</a></h3>
                </li>
              </ul>
               </div>
               <h4>孕妇养生</h4>
               <div class="healthborder"></div>
               <div class="elderly">
                <ul >
                    <li v-for="gravidahealth in gravidahealthlist" :key = "gravidahealth.href"> 
                        <img :src='gravidahealth.url' alt="孕妇养生">
                        <a :href="gravidahealth.href" :title="gravidahealth.title">{{gravidahealth.title}}</a>
                    </li>
                </ul>
               </div>
              
         </div>

       
        <div class="reduce-weight">
               <h3>减肥</h3>
              <div class="diseasetype-title" style="clear:left;"></div>
              <div class="introduction">当今社会，肥胖是一个无法令人忽视的健康隐患，还有很多爱美人士为了有一个健康美丽的身体坚持不懈地进行减肥，但是科学的减肥方式能让你事半功倍，错误的方法只会让你得不偿失。</div>
               <ul >
                <li v-for="reduce in reducelist" :key = "reduce.href"> 
                    <img :src='reduce.url' alt="减肥">
                    <h3><a :href="reduce.href" :title="reduce.title">{{reduce.title}}</a></h3>
                    <div class="content">{{reduce.content}}</div>
                </li>
            </ul>
         </div>
         
    </div>
</template>
<script>
export default {
    name: 'special',
    data(){
        return{
            elderhealthlist:[
                { url:require('../assets/special/morning-exercise.png'),href:'http://www.zhys.com/zixun/183.html',title:'老人冬季晨练学问多 6个方面需注意',},
                { url:require('../assets/special/fruits.png'),href:'http://www.zhys.com/zixun/192.html',title:'冬天寒冷潮湿 老人吃什么水果最好',},
                { url:require('../assets/special/healthfood.png'),href:'http://www.zhys.com/zixun/228.html',title:'老人必吃的六种养生食物',},
                { url:require('../assets/special/healthhead.png'),href:'http://www.zhys.com/zixun/236.html',title:'​老人脑供血不足头晕 4个方法可改善',}],
            elderlist:[
                { url:require('../assets/special/soybean.png'),href:'http://www.zhys.com/shicai/363.html',title:'豆浆'},
                { url:require('../assets/special/chestnut.png'),href:'http://www.zhys.com/shicai/612.html',title:'板栗'},
                { url:require('../assets/special/wolfberry.png'),href:'http://www.zhys.com/shicai/313.html',title:'枸杞子'},
                { url:require('../assets/special/tofu-skin.png'),href:'http://www.zhys.com/shicai/318.html',title:'豆腐皮'},
                { url:require('../assets/special/chives.png'),href:'http://www.zhys.com/shicai/698.html',title:'莼菜'},
                { url:require('../assets/special/nest.png'),href:'http://www.zhys.com/shicai/293.html',title:'燕窝'},
                { url:require('../assets/special/broad-bean.png'),href:'http://www.zhys.com/shicai/351.html',title:'蚕豆'},
                { url:require('../assets/special/flammulina.png'),href:'http://www.zhys.com/shicai/721.html',title:'金针菇'}],
            gravidahealthlist:[
                { url:require('../assets/special/innutrition.png'),href:'http://www.zhys.com/zixun/826.html',title:'造成孕妇营养不良原因,你一定要看',},
                { url:require('../assets/special/dietary.png'),href:'http://www.zhys.com/zixun/779.html',title:'孕妇吃东西注意事项 孕期饮食禁忌',},
                { url:require('../assets/special/setting-up.png'),href:'http://www.zhys.com/zixun/3680.html',title:'孕妇保健操 准妈妈们动起来',},
                { url:require('../assets/special/breakfast.png'),href:'http://www.zhys.com/zixun/4562.html',title:'​精心挑选 五款营养孕妇早餐食谱',}],
            gravidalist:[
                { url:require('../assets/special/raisin.png'),href:'http://www.zhys.com/shicai/581.html',title:'葡萄干'},
                { url:require('../assets/special/cabbage.png'),href:'http://www.zhys.com/shicai/676.html',title:'卷心菜'},
                { url:require('../assets/special/day-lily.png'),href:'http://www.zhys.com/shicai/713.html',title:'黄花菜'},
                { url:require('../assets/special/millet.png'),href:'http://www.zhys.com/shicai/357.html',title:'小米'},
                { url:require('../assets/special/grape.png'),href:'http://www.zhys.com/shicai/560.html',title:'提子'},
                { url:require('../assets/special/skullcap.png'),href:'http://www.zhys.com/shicai/267.html',title:'黄芩'},
                { url:require('../assets/special/shrimp.png'),href:'http://www.zhys.com/shicai/461.html',title:'虾'},
                { url:require('../assets/special/jackfruit.png'),href:'http://www.zhys.com/shicai/572.html',title:'菠萝蜜'}],
            reducelist:[
                { url:require('../assets/special/coup.png'),href:'https://fitness.pclady.com.cn/184/1840911.html',title:'有效减肥瘦身小妙招 怎样减肥最快最有效?',
                content:'运动是肥胖的克星，那么，那些运动减肥方式瘦身最快最有效呢？下面，为你盘点8个最有利于减肥的运动方式，帮你加快新陈代谢，燃烧脂肪，成功瘦下来。'},
                { url:require('../assets/special/potato-salad.png'),href:'http://www.ttys5.com/shanshi/shipu/2014-06-12/92067.html',title:'女性减肥食谱土豆优格沙拉',
                content:'土豆的吃法有多种，一般炒吃、炖吃，拌吃，今天小编我用它做沙拉，不仅健康还有减肥的作用，每天坚持一餐，不用花钱都能达到减肥的作用哟。'},
                { url:require('../assets/special/expulsion-toxin.png'),href:'https://fitness.pclady.com.cn/184/1840772.html',title:'减肥瘦身最快最有效 排毒大法让你减肥超有效',
                content:'夏季想要保持体型完美，必须要经常排毒，体内毒素过多的话，会导致浮肿，身材看起来会很胖。那排毒应该怎么做呢？小编为大家介绍9种排毒大法，让你健康瘦身，保持好身材。'},
                { url:require('../assets/special/slimming.png'),href:'https://fitness.pclady.com.cn/182/1824142.html',title:'​常跳减肥操的好处 这几种减肥操很有效',
                content:'爱美之心人皆有之，但是通常情况下，大多数人都是一胖毁所有，所以有很多人想法设法地减肥，减肥操就是其中一种。我们知道跳减肥操可以减肥，那么经常跳减肥操还有哪些好处呢?接下来让小编为你一一道来。'},
                { url:require('../assets/special/hydromel.png'),href:'https://health.pclady.com.cn/182/1825950.html',title:'怎么喝蜂蜜水减肥有效',
                content:'蜂蜜是最简单有效的减肥品，无论是上班族、家庭主妇、懒人们都很适合，只要每天坚持喝蜂蜜，拥有好身材不是梦，那怎么喝蜂蜜水才可以减肥呢?小编告诉你。'},
                { url:require('../assets/special/reduce.png'),href:'https://fitness.pclady.com.cn/181/1812425.html',title:'减肥方法哪种最有效 5种有氧运动快速减肥',
                content:'什么减肥方法最有效呢？8款快速减肥的有氧运动介绍给正在减肥的你。'},],
        }
    },
    methods:{

    }
}
</script>
<style lang="scss" scoped>
.content{
    width:900px;
    margin-top:55px;
    margin-left:200px;
    margin-right:10px;
}
.healthborder{
    width:1140px;
    margin-left:10px;
    margin-bottom:20px;
    border-bottom:1px solid #84cf0a;
    text-align:left;
}
    h3{
        color:#f38c17;
        text-align:left;
        float:left;
    }
    h4{
        margin-left:10px;
        color:#84cf0a;
        
    }
    .introduction{
        width:1100px;
        margin:auto;
        text-indent: 2em;
        text-align:left;
    }
.elderhealth{
    width:1160px;
    margin:auto;
    text-align:left;
    img{
        float:left;
    }
    li{
        list-style: none;
        width:200px;
        margin-top:10px;
        float:left;
        text-align:left;
    }
    a{
        line-height:5px;
        margin-left:20px;
        color: #111;
        text-decoration: none;
        float: left;
    }
    a:hover{
        color:#f71505;
    }
}
.elderfood{
        height:150px;
        
        img{
            float:left;
        }
        li{
            list-style: none;
            width:100px;
            margin-left:30px;
            float:left;
        }
}
.elderly{
    ul{
            height:180px;
        }
   img{  
       border-radius:8px;
   }
    li{
        width:250px;
        margin-left:20px;
    }
    a{
        font-size:14px;
        width:234px;
        line-height:25px;
        margin:0;
        text-align:center;
    }
}

.reduce-weight{
    width:1160px;
    margin:auto;
    img{
        float:left;
    }
    li{
        list-style: none;
        margin-top:10px;
        margin-bottom:20px;
        float:left;
        text-align:left;
    }
    a{
        line-height:5px;
        margin-left:20px;
        color: #111;
        text-decoration: none;
        float: left;
    }
    a:hover{
        color:#f71505;
    }
}
.diseasetype-title{
    margin-bottom:20px;
    color:#df7f11;
    border-bottom:1px solid #df7f11;
    text-align:left;
}
.special{
    width:1200px;
    margin:auto;
}
.title{
    color:#17d14f;
    text-align:left;
}
</style>
