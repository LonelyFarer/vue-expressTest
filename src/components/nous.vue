<template>
<div>
    <div class="nous">
        <h2 class="title">常识</h2>
     <div class="diet-collection">
         <h3>养生常识</h3>
        <div class="diseasetype-title" style="clear:left;"></div>
         <ul>
            <li v-for="nous in healthnous" :key = "nous.href"> 
                <img :src='nous.url' alt="养生常识">
                <h3><a :href="nous.href" :title="nous.title">{{nous.title}}</a></h3>
                <div class="content">{{nous.content}}</div>
            </li>
        </ul>
     </div>
    </div>

    <div class="diet-collection">
              <h3>养生禁忌</h3>
              <div class="diseasetype-title" style="clear:left;"></div>
               <ul >
                <li v-for="taboos in taboosList" :key = "taboos.href"> 
                    <img :src='taboos.url' alt="养生禁忌">
                    <h3><a :href="taboos.href" :title="taboos.title">{{taboos.title}}</a></h3>
                    <div class="content">{{taboos.content}}</div>
                </li>
            </ul>
    </div>

    <div class="diet-collection">
              <h3>养生心得</h3>
              <div class="diseasetype-title" style="clear:left;"></div>
               <ul >
                <li v-for="care in carelist" :key = "care.href"> 
                    <img :src='care.url' alt="养生心得">
                    <h3><a :href="care.href" :title="care.title">{{care.title}}</a></h3>
                    <div class="content">{{care.content}}</div>
                </li>
            </ul>
         </div>
</div>
</template>
<script>
export default {
    name: 'nous',
    data(){
        return{
             taboosList:[
                { url:require('../assets/nous/woman.png'),href:'https://www.cndzys.com/zyys/zyyswq/mrwq/67249.html',title:'让女人变丑的7个养生禁忌',
                content:'爱美是女人的天性，美丽可以让女性变得更加自信。现代科技这么发达，激光，微整形等等都可以让女性变得更加漂亮与完美。当然也有一些因素可能让女人在不知不觉中慢慢变丑。所以女人要想保持美丽的容貌就要避开让女人变丑的七大养生禁忌。'},
                { url:require('../assets/nous/ahypnosis.png'),href:'http://www.cnys.com/article/74841.html',title:'常常夜不能寐，可能是犯了这“七个忌讳”！ ',
                content:'睡觉是每个人人生生活中的重要一环、如何依据中国传统的阴阳五行理论、提高我们的睡觉质量呢?这里小编提示各位晚上睡觉必须注意的“七个忌讳”。'},
                { url:require('../assets/nous/soak-foot.png'),href:'http://www.cnys.com/article/74611.html',title:'不是人人都适合热水泡脚，这几类人泡脚需谨慎！ ',
                content:'泡脚可以驱除寒冷、促进血液循环、加快新陈代谢等，睡前泡一泡，那感觉简直就要上天了，但并不是每个人都适合泡上一泡的!'},
                { url:require('../assets/nous/exerice.png'),href:'http://www.cnys.com/article/73166.html',title:'​这样锻炼是在“找病”！一天有这两个“最佳锻炼时间” ！',
                content:'“管住嘴、迈开腿”是众所周知的养生准则，少吃一点容易理解，学会锻炼中的门道则比较复杂。晨起锻炼空气中二氧化碳浓度高，容易惹上心梗、卒中;晚上锻炼损伤阳气，堪比慢性自杀……关于锻炼的传闻源源不断，到底哪个有科学依据?'}],
            carelist:[
                { url:require('../assets/nous/maintenance.png'),href:'http://www.cnys.com/article/75346.html',title:'中医如何进行养生 谨记5字养生决 ',
                content:'养生在中医看来比治病更为重要，在《黄帝内经》中提到“上工治未病，不治已病，此之谓也”，所以在中医看来未病预防比生病再求医更为重要。那么自古以来中医们又是如何进行养生的呢？带着这个问题我们一同来了解中医的养生方法，为什么这些养生方法有效果。'},
                { url:require('../assets/nous/garlic.png'),href:'http://www.cnys.com/article/75178.html',title:'秋冬养生有四宝，驱寒暖胃妙用多！每家厨房都有！',
                content:'在入正题前，小编请大家猜个谜，谜底正跟今天要说的主题有关：弟兄七八个，围着圆柱坐。大家一分手，衣服都扯破。'},
                { url:require('../assets/nous/influenza.png'),href:'http://www.cnys.com/article/73375.html',title:'你又感冒、发烧、流鼻涕了？快来看看怎么办！ ',
                content:'感冒算得上是老百姓最熟悉的小病了。一旦症状出现，几乎不需要医生，多数人都能凭经验自行做出感冒的诊断。接下来，就会翻箱倒柜地找各种五花八门的中药、西药吃，还有人咬牙扛着，直到痊愈或扛不住为止;更会有人迫不及待地去找医生开抗生素服用或干脆挂吊瓶。'},
                { url:require('../assets/nous/pot.png'),href:'http://www.cnys.com/article/74802.html',title:'这样用锅，真的等于在吃毒！90%的人炒菜都中招了，千万别忽视~ ',
                content:'大约一万年前，我们的老祖宗就发明了锅，从此锅就成为了我们最常用的厨具之一，还衍生出许许多多的“兄弟姐妹”，比如陶瓷锅、高压锅、不粘锅、铁锅……'}],
            healthnous:[
                { url:require('../assets/nous/greens.png'),href:'http://www.yswol.com/zixun/yangsheng/yinshi/9306.shtml',title:'常吃4种食物，身体毒素排干净，把疾病赶走',
                content:'为什么有些人特别容易生病？有相关的病理学家有过研究，说疾病不一定都是细菌、病毒这些原因引起的，而是我们身体内的毒素。这些毒素被吸收吸收之后就会导致身体出现疾病、衰老等。'},
                { url:require('../assets/nous/forwoman.png'),href:'http://www.yswol.com/zixun/yangsheng/yinshi/9305.shtml',title:'适合女性的食物，常吃能滋润肌肤有光泽',
                content:'都说爱美是女性的天性，拥有白嫩光滑的肌肤，是很多女性的心愿，但是现实却是残酷的，生活不规律、经常熬夜、饮食不注意的女性比比皆是，这样一来，就很容易伤害自己的皮肤，总显得暗黄，没有光泽，更上去好像老了好几岁。'},
                { url:require('../assets/nous/expulsion.png'),href:'http://www.yswol.com/zixun/yangsheng/yinshi/9257.shtml',title:'14种清肠排毒的食物',
                content:'你还在为小肚子的问题而烦恼吗?不用担心，下面这14种清肠排毒的食物可以帮助你解决这个问题!它们能够帮助你促进肠道蠕动、扫除体内的毒素，还你平坦小腹!'},
                { url:require('../assets/nous/chimatlon.png'),href:'http://www.cnys.com/article/75541.html',title:'冬日防治冻疮必备：教你如何选择冻疮膏？',
                content:'冻疮膏是最常见的治冻疮的，也是冬日必备的单品。对于冻疮来说，要么是膏，要么是水，目前来看冻疮膏种类繁多，冻疮膏哪种好呢，下面教你如何选择冻疮膏?'},
                { url:require('../assets/nous/sport.png'),href:'http://www.ttys5.com/yundong/wushu/2015-06-14/105672.html',title:'五种运动帮你轻松变瘦美',
                content:'做什么运动最减肥，通过运动减肥是最科学的减肥方法，通过一定的运动，消化体内的多月脂肪，加快身体的新陈代谢，从而达到减肥的目的。'},
                { url:require('../assets/nous/throat.png'),href:'http://www.yswol.com/zixun/yangsheng/yinshi/8659.shtml',title:'喉咙有痰不舒服？这几种食物能帮你改善',
                content:'进入立秋后，天气难免有点干燥，有些人不注重喝水、补充水分就算了，还会大吃大喝，专吃一些热气、油腻的食物，这样往往很容易导致喉咙干燥、疼痛，久而久之，有些人还有喉咙有痰等症出现。'},
                { url:require('../assets/nous/cucumber.png'),href:'http://www.yangsheng.com/read/23/66791/',title:'黄瓜除了能美容，竟还有这作用！',
                content:'黄瓜除有特殊的减肥美容作用外，还具有防治疾病的作用。下面就让我们一起来看看。'},
                { url:require('../assets/nous/snore.png'),href:'http://www.yangsheng.com/read/23/66467/',title:'4种治疗打呼噜的小妙招，你一定不知道',
                content:'提到打呼噜，确实不是什么好事。不仅会打扰同床共枕的人，严重的话还会影响身体健康。长此以往甚至能增加患心脏疾病的风险，那为什么会有人经常打呼噜？打呼噜会引起哪些疾病？我们又该如何治疗呢？'},
                ]
        }
    },
    methods:{

    }
}
</script>
<style lang="scss" scoped>
.diet-collection{
    width:1160px;
    margin:auto;
    h3{
        
        color:#f38c17;
        text-align:left;
        float:left;
    }
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
.nous{
    width:1200px;
    margin:auto;
    text-align:left;
}
</style>
