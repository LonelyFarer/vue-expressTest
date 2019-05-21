<template>
    <div class="season">
         <h2 class="title">季节养生</h2>
         
         
         <div class="seasonhealth">
              <h3>春季养生</h3>
              <div class="diseasetype-title" style="clear:left;"></div>
               <ul >
                <li v-for="spring in springlist" :key = "spring.href"> 
                    <img :src='spring.url' alt="春季养生">
                    <h3><a :href="spring.href" :title="spring.title">{{spring.title}}</a></h3>
                    <div class="content">{{spring.content}}</div>
                </li>
            </ul>
         </div>

        <div class="seasonhealth">
              <h3>夏季养生</h3>
              <div class="diseasetype-title" style="clear:left;"></div>
               <ul >
                <li v-for="summer in summerlist" :key = "summer.href"> 
                    <img :src='summer.url' alt="夏季养生">
                    <h3><a :href="summer.href" :title="summer.title">{{summer.title}}</a></h3>
                    <div class="content">{{summer.content}}</div>
                </li>
            </ul>
         </div>

         <div class="seasonhealth">
              <h3>秋季养生</h3>
              <div class="diseasetype-title" style="clear:left;"></div>
               <ul >
                <li v-for="autumn in autumnlist" :key = "autumn.href"> 
                    <img :src='autumn.url' alt="秋季养生">
                    <h3><a :href="autumn.href" :title="autumn.title">{{autumn.title}}</a></h3>
                    <div class="content">{{autumn.content}}</div>
                </li>
            </ul>
         </div>

         <div class="seasonhealth">
              <h3>冬季养生</h3>
              <div class="diseasetype-title" style="clear:left;"></div>
               <ul >
                <li v-for="winter in winterlist" :key = "winter.href"> 
                    <img :src='winter.url' alt="冬季养生">
                    <h3><a :href="winter.href" :title="winter.title">{{winter.title}}</a></h3>
                    <div class="content">{{winter.content}}</div>
                </li>
            </ul>
         </div>

    </div>
</template>
<script>
export default {
    name: 'seasonhealth',
    data(){
        return{
            springlist:[
                { url:require('../assets/seasonhealth/springfruit.png'),href:'http://www.yswol.com/jijie/chunji/7758.shtml',title:'春天吃这些水果，美容养颜，气色好',
                content:'春天是合适养颜、养肝和养生的季节。春季很多当季的水果蔬菜都纷纷上市，我们在食疗进行美容养颜的时候，选择也不断扩大了。那么吃什么最合适春天美容养颜呢？下面就给大家介绍几样养颜效果好的水果。'},
                { url:require('../assets/seasonhealth/springgreens.png'),href:'http://www.yswol.com/jijie/chunji/7670.shtml',title:'春天多吃这4种蔬菜，好吃更健康',
                content:'春天是养生的好时段，吃对了，身体才会更健康。春季养生，大家可以多吃这4种蔬菜，不仅好吃，对身体的益处也很多。'},
                { url:require('../assets/seasonhealth/cure-cold.png'),href:'http://www.yswol.com/jijie/chunji/5229.shtml',title:'春季感冒咳嗽多发 民间三款润肺止咳方推荐',
                content:'春季是流感的多发季节，伴随着流感而来的是一声声咳嗽，有什么快速又有效的止咳秘方呢？今天中医师为大家介绍三款润肺止咳的民间方法'},
                { url:require('../assets/seasonhealth/clearing-damp.png'),href:'http://www.yswol.com/jijie/chunji/4963.shtml',title:'​春日湿气重 不如喝碗“祛湿汤”',
                content:'在春天这样潮湿的天气，祛湿怎能少了一碗“祛湿汤”。春季煲祛湿汤的食材丰富多样，主料包括薏米、扁豆、南北杏、川贝、五指毛桃、赤小豆等，配上猪肉和茨实、莲子等其他的药材。不同食材配搭着煲，祛湿汤就有了多种多样的配方。'}],
            summerlist:[
                { url:require('../assets/seasonhealth/rhombus.png'),href:'http://www.yswol.com/jijie/xiaji/8693.shtml',title:'夏季养生 莫忘“水中四宝”！',
                content:'提到夏季养生食物，很多人首先想到的是西瓜、苦瓜或绿豆，有一类食物常常被忽视，那就是生长在水里的“四宝”——茭白、莲藕、芡实、菱角。它们的营养价值如何?对夏季养生又有什么好处呢?'},
                { url:require('../assets/seasonhealth/summerfruit.png'),href:'http://www.yswol.com/jijie/xiaji/8687.shtml',title:'炎热夏季，水果怎么吃既解暑又养生！',
                content:'夏天是水果种类最多的的季节，但是对于不同的体质的人来说，并不是所有的水果都适合每个人吃。而且针对不同人的体质，同一种水果食用过量会出现不同的效果，有些水果会可使身体产生热量，有些寒凉水果则可以解燥热，若不了解不能合理食用，则会出现反作用，伤害身体。所以在夏天吃水果的时候要根据自己的体质，要选择对自己身体有益的水果。'},
                { url:require('../assets/seasonhealth/mung.png'),href:'http://www.yswol.com/jijie/xiaji/8679.shtml',title:'6种防暑降温的食物',
                content:'炎炎夏日，吃什么东西能防暑降温呢，下面给大家介绍六种食物。'},
                { url:require('../assets/seasonhealth/watermelon.png'),href:'http://www.yswol.com/jijie/xiaji/8520.shtml',title:'夏季吃西瓜解暑，要注意这几个时间段',
                content:'西瓜是夏天最常吃的水果之一，水分多、口感脆甜，很适合消暑。但是大家知道西瓜要怎么吃、什么时间吃才好吗？今天给大家讲解！'}],
            autumnlist:[
                { url:require('../assets/seasonhealth/autumngreens.png'),href:'http://www.yswol.com/jijie/qiuji/9254.shtml',title:'秋天最适合吃的蔬菜，6种功效让你更长寿',
                content:'夏天炎热的天气渐渐减少，已经开始出现早晚温差较大的趋势了。秋天养生应该怎么吃呢？推荐一种蔬菜给大家，这种蔬菜起码有6种功效，很适合秋天的适合吃，越吃越长寿。'},
                { url:require('../assets/seasonhealth/autumnfruit.png'),href:'http://www.yswol.com/jijie/qiuji/8641.shtml',title:'秋季养生水果有哪些？一些平价水果效果就不错',
                content:'入秋后，时常感到干燥，对水却没什么欲望，所以喝水也会忘记。秋季容易心浮气躁，这个时候除了多喝水，还有必要多吃点水果，毕竟水水甜甜的水果还可以当零食解馋呢!'},
                { url:require('../assets/seasonhealth/mung.png'),href:'http://www.yswol.com/jijie/qiuji/8103.shtml',title:'秋季润肺清肺吃什么好？这3种方法，确实不错，润肺养颜',
                content:'随着秋天的到来，气候虽凉爽却十分干燥，人很容易出现“秋燥”的现象。比如嗓子难受、鼻咽干燥、干咳少痰、皮肤干燥等。要防“秋燥”，还需学会养肺，其中食疗法就是一个不错的选择。在我们的生活中，有许多常见的食物都能起到良好的清肺润肺功效。比如以下3种食材，大家应该多吃。'},
                { url:require('../assets/seasonhealth/chestnut.png'),href:'http://www.yswol.com/jijie/qiuji/5994.shtml',title:'金秋板栗正当时，做菜这么吃还能补肾',
                content:'民谚说，“七月杨桃八月楂，九月栗子笑哈哈”。新上市的栗子号称“千果之王”，经常食用有补肾、健脾胃的奇效。今天一起跟着大厨来做几道补肾降血压的栗子佳肴吧。'}],
            winterlist:[
                 { url:require('../assets/seasonhealth/winter.png'),href:'http://www.yswol.com/jijie/dongji/7971.shtml',title:'冬季进补吃这些，一个冬天不生病',
                content:'冬季寒风呼啸，肺部容易受风寒，而且胃部一定要注意保暖，一旦受到寒气袭击很容易引起胃痛。因此可以趁着寒冬适当进补，比如吃一些温补的食物。吃什么进补好呢？冬季进补有也是有讲究的。下面给大家推荐一些食材，它们都是进补很不错的选择。'},
                { url:require('../assets/seasonhealth/skin-care.png'),href:'http://www.yswol.com/jijie/dongji/7866.shtml',title:'冬天护肤吃什么最好？推荐5种美味食物',
                content:'冬天是一个干燥的季节，加上长期处在有暖气的室内，让很多人的皮肤状况变得很差，因此日常的皮肤保养是重要的一步。保养一定要买很多化妆品吗？答案是不一定的，因为在我们生活中有一些食物就是天然的护肤品，多吃它们就能帮你省下一大笔化妆品钱！'},
                { url:require('../assets/seasonhealth/keepout-cold.png'),href:'http://www.yswol.com/jijie/dongji/7814.shtml',title:'4招提高御寒能力，冬天再也不怕冷！',
                content:'想要度过寒冷的冬天靠得不仅是坚强的毅力，更需要一副可以抵御寒冬的身体。同样的天气，有些人很怕冷，有些人却不怎么怕，那是因为身体素质不一样，御寒能力也不一样。如何提高身体御寒能力？下面几种办法可以试一试！'},
                { url:require('../assets/seasonhealth/chicken-soup.png'),href:'http://www.yswol.com/jijie/dongji/6615.shtml',title:'冬天鸡汤加点这个，补血补肾，增强免疫力！',
                content:'人们一向将乌骨鸡视为养生食物，尤其是添加中药材的乌骨鸡汤，更是冬天补身的首选！一般认为，乌骨鸡的营养超过普通鸡只，中医师表示，乌骨鸡的优势在于脂肪和胆固醇较低，而且黑色食物入肾，具有补肾和强壮身体的功能，搭配当归煮成鸡汤，更是女性补血的好选择！'}],

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
.season{
    width:1200px;
    height:1000px;
    margin:auto;
    h3{
        
        color:#f38c17;
        text-align:left;
        float:left;
    }
.seasonhealth{
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
}
.title{
    color:#17d14f;
    text-align:left;
}
</style>