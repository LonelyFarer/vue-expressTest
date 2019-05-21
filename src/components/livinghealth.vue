<template>
    <div class="livinghealth">
        <h2 class="title">生活养生</h2>
         <ul class="livinglist">
            <li v-for="living in livinghealth" :key = "living.href"> 
                <img :src='living.url' alt="生活养生">
                <h3><a :href="living.href" :title="living.title">{{living.title}}</a></h3>
                <div class="content">{{living.content}}</div>
            </li>
        </ul>
        
    </div>
</template>
<script>
export default {
    name: 'livinghealth',
    data(){
        return{
            livinghealth:[
                { url:require('../assets/livinghealth/tickle.png'),href:'https://www.cndzys.com/shenghuoyangsheng/changshi/1657299.html',title:'洗完澡身上奇痒无比',
                content:'很多人都有这样的情况，洗完澡身上奇痒无比十分难受，这种情况与皮肤干燥有关。尤其是到了秋天，天气干燥，如果有天天洗澡的习惯就要注意，在洗完之后涂一些护肤霜，不要让皮肤变得越来越干。除了皮肤干燥引起的痒，也不能忽视某些皮肤病的问题，如果有疙瘩出现，最好先去看看医生。'},
                { url:require('../assets/livinghealth/fruit.png'),href:'https://www.cndzys.com/shenghuoyangsheng/jianfei/1658268.html',title:'吃什么水果减肥快又不反弹？ ',
                content:'人们好像永远都在热关注减肥的那些事，不管是否肥胖，哪怕看起来比较瘦人也想减肥，仿佛不减肥就没有安全感，减肥要选择正确的方法，否则就会起反作用，减肥可以通过饮食来调理改善，比如吃一些有利于减肥的水果，补充营养的同时也能减肥，吃什么水果减肥快又不反弹？接下来我们来看看吧。'},
                { url:require('../assets/livinghealth/hair.png'),href:'https://www.cndzys.com/shenghuoyangsheng/changshi/1658250.html',title:'掉头发跟什么有关系？',
                content:'掉发很多人平时都会遇见的现象，掉发是可以发生于任何年龄阶段的，一般情况下，引起脱发的原因是非常多的，精神压力大，睡眠不足，营养不良等都是会引起脱发的，现在的年轻人，很多人为了工作经常加班熬夜，而且有些人经常处于精神紧绷的状态，压力不能得到释放，时间久了是很容易引起脱发的。'},
                { url:require('../assets/livinghealth/wine.png'),href:'https://www.cndzys.com/shenghuoyangsheng/changshi/1658191.html',title:'葡萄酒配什么菜比较好',
                content:'葡萄酒是大家在日常生活中一种十分常见的酒的品种，因为它的颜色和口感还有一些营养元素，小孩和老人喝了对身体都是非常好的。葡萄酒严格意义上来说应该是一种果酒，因为它主要是由葡萄长时间发酵而制成的。喝葡萄酒也是有一定注意事项的，最好用高脚杯喝，那么喝葡萄酒的话和什么菜配会比较好呢？'},
                { url:require('../assets/livinghealth/black-eye.png'),href:'https://www.cndzys.com/shenghuoyangsheng/meirong/1658176.html',title:'黑眼圈与什么有关',
                content:'每个女生都希望自己早上起来面部红润有光泽，但是常常事与愿违，有些女性早上起来发现自己黑眼圈非常的严重，让自己看起来没有精神，状态非常的不好。很多女性都不太了解黑眼圈与什么有关，下面是黑眼圈的成因，女性朋友可以来了解一下，这样才能知道如何避免黑眼圈的出现。'},
                { url:require('../assets/livinghealth/pepper.png'),href:'https://www.cndzys.com/shenghuoyangsheng/changshi/1551347.html',title:'花椒泡白酒有什么作用',
                content:'花椒不仅可以做调料，花椒的枝叶还可以做药材，能和白酒一起泡药酒，能很好的治疗蛀牙、冻疮和脱发，下面给大家详细介绍花椒泡白酒得具体有什么作用。'},
                { url:require('../assets/livinghealth/cake.png'),href:'https://www.cndzys.com/shenghuoyangsheng/changshi/1550835.html',title:'吃完蛋糕后怎样不发胖?',
                content:'在现实生活中蛋糕是属于一种十分常见的甜品，蛋糕的主要成分是鸡蛋以及面粉和白糖所制作而成，加上奶油，蛋糕的热量非常高，经常食用会容易增加身体脂肪，容易导致身体出现肥胖的现象，而食用蛋糕后不发胖的方法也有很多种，可以在吃完蛋糕后喝一些柠檬水，或者是食用一些低脂食物。'},
                { url:require('../assets/livinghealth/black-head.png'),href:'https://www.cndzys.com/shenghuoyangsheng/meirong/1550654.html',title:'去鼻子黑头的小妙招',
                content:'如果长时间导致面部皮肤受到电脑、手机等电子设备辐射的话，很容易出现毛孔粗大的情况。尤其是鼻头的位置，不注意护理，更是会长出很多的小黑点，也就是黑头。现在市场上去黑头的护肤产品有很多，但是使用效果并不明显。其实一些小技巧，也行可以帮助我们消灭黑头。'},
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
.livinghealth{
    
    width:1200px;
    margin:auto;
    text-align:left;
    
    .livinglist{
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