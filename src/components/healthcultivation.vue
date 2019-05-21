<template>
    <div class="diet">
         <h2 class="title">中医养生</h2>
         
         
         <div class="diet-collection">
              <h3>经络养生</h3>
              <div class="diseasetype-title" style="clear:left;"></div>
               <ul >
                <li v-for="meridian in meridianlist" :key = "meridian.href"> 
                    <img :src='meridian.url' alt="经络养生">
                    <h3><a :href="meridian.href" :title="meridian.title">{{meridian.title}}</a></h3>
                    <div class="content">{{meridian.content}}</div>
                </li>
            </ul>
         </div>

        <div class="diet-collection">
              <h3>针灸养生</h3>
              <div class="diseasetype-title" style="clear:left;"></div>
               <ul >
                <li v-for="acupuncture in acupuncturelist" :key = "acupuncture.href"> 
                    <img :src='acupuncture.url' alt="针灸养生">
                    <h3><a :href="acupuncture.href" :title="acupuncture.title">{{acupuncture.title}}</a></h3>
                    <div class="content">{{acupuncture.content}}</div>
                </li>
            </ul>
         </div>

         <div class="diet-collection">
              <h3>穴位养生</h3>
              <div class="diseasetype-title" style="clear:left;"></div>
               <ul >
                <li v-for="acupoint in acupointlist" :key = "acupoint.href"> 
                    <img :src='acupoint.url' alt="穴位养生">
                    <h3><a :href="acupoint.href" :title="acupoint.title">{{acupoint.title}}</a></h3>
                    <div class="content">{{acupoint.content}}</div>
                </li>
            </ul>
         </div>

         <div class="diet-collection">
              <h3>药膳养生</h3>
              <div class="diseasetype-title" style="clear:left;"></div>

              <h4>热门中草药</h4>
              <div class="healthborder"></div>
              <div class="chineseMmedicinal">
                <ul >
                <li v-for="chineseMmedicinal in chineseMmedicinallist" :key = "chineseMmedicinal.href"> 
                    <img :src='chineseMmedicinal.url' alt="热门中草药">
                    <h3 style="margin-left:10px"><a :href="chineseMmedicinal.href" :title="chineseMmedicinal.title">{{chineseMmedicinal.title}}</a></h3>
                </li>
              </ul>
               </div>

               <ul >
                <li v-for="medicinalDiet in medicinalDietlist" :key = "medicinalDiet.href"> 
                    <img :src='medicinalDiet.url' alt="药膳养生">
                    <h3><a :href="medicinalDiet.href" :title="medicinalDiet.title">{{medicinalDiet.title}}</a></h3>
                    <div class="content">{{medicinalDiet.content}}</div>
                </li>
            </ul>
         </div>

    </div>
</template>
<script>
export default {
    name: 'healthcultivation',
    data(){
        return{
            meridianlist:[
                { url:require('../assets/healthcultivation/immunity.png'),href:'http://www.zhys.com/zixun/8246.html',title:'免疫力差揉揉这里！改善体质的好方法，简单有效',
                content:'“免疫力差”是很多都市人群的写照。虽然地球人都知道——运动使人体健。但是，总有不便运动的情形出现，难道就要这样放弃健康吗？不！天无绝人之路，采用“指甲按摩疗法”，同样能提升免疫力、铸就好身体，不仅简单方便，而且高效！'},
                { url:require('../assets/healthcultivation/foot.png'),href:'http://www.zhys.com/zixun/2501.html',title:'也许你不知道 没事动动你的小丫子可健脾养胃',
                content:'从经络看，胃经经过脚的第二趾和第三趾之间，管脾胃的内庭穴也在脚趾的部位。一般来说，胃肠功能强的人，站立时脚趾抓地也很牢固。因此，胃肠功能坂叹蝠咪较弱的人，不妨经常锻炼脚趾。'},
                { url:require('../assets/healthcultivation/fingers.png'),href:'http://www.zhys.com/zixun/2505.html',title:'五指养生手法 方便实用巧致病',
                content:'教你用五指，便能去疾病'},
                { url:require('../assets/healthcultivation/blockageChannels.png'),href:'http://www.zhys.com/zixun/2506.html',title:'​经络不通,十个小妙招让你全身通畅',
                content:'经络不通你会感觉到身体不舒服，身体会疼痛，感到冷，热等等，十个小妙招让你全身通畅'}],
            acupuncturelist:[
                { url:require('../assets/healthcultivation/moxibustion.png'),href:'http://www.zhys.com/zixun/6380.html',title:'灸透这6个穴位，可除一身湿气！太神奇了！',
                content:'10人9湿，寒湿缠身，百病生;春夏进入你身体里的重湿之气，你不逼它，它自己是不会跑出来的!带入秋冬必成大患!不过，老祖宗给你留了一物可以救你命---那就是艾灸。'},
                { url:require('../assets/healthcultivation/acupuncture.png'),href:'http://www.zhys.com/zixun/2323.html',title:'针灸可以治疗哪些疾病 什么人群可以做针灸',
                content:'针灸是中医文化中必不可少的一部分，那么针灸可以治疗哪些疾病，什么人群适合做针灸呢，下面一起来看看。'},
                { url:require('../assets/healthcultivation/removeAcne.png'),href:'http://www.zhys.com/zixun/2298.html',title:'针灸祛痘有哪些注意事项 这些人群适合针灸祛痘',
                content:'针灸疗法基本适用于各种类型的痤疮人群，尤其对于顽固性痤疮并伴有明显炎症的人群，体内热毒壅盛而致痤疮的人群，以及内分泌失调导致痤疮的人群效果比较好。但是，出血体质、疤痕体质人群、血液病患者、凝血机制有问题者不能用针灸；皮肤严重过敏、恶性皮肤肿瘤患者、局部破损溃烂或皮肤患有疥疮等传染性疾病者不宜针灸；妊娠期妇女，或经期妇女禁止在腹部，腰部进行针灸。'},
                { url:require('../assets/healthcultivation/weightLoss.png'),href:'http://www.zhys.com/zixun/2303.html',title:'针灸减肥有效吗 针灸减肥效果大起底',
                content:'针灸减肥对20～50岁的中青年肥胖者效果较好。因为在这个年龄阶段，人体发育比较成熟，各种功能也比较健全，通过针灸治疗，比较容易调整机体的各种代谢功能，促进脂肪分解，达到减肥降脂的效果。针刺后能够抑制胃肠的蠕动，并有抑制胃酸分泌的作用，从而减轻饥饿感，达到针灸减肥的目的。'}],
            acupointlist:[
                { url:require('../assets/healthcultivation/universal-acupoint.png'),href:'http://www.zhys.com/zixun/8642.html',title:'这个穴位是通调百病的“万能穴”',
                content:'这个穴位，称它为天下第一穴一点也不为过，因为几乎所有的病都可以用这一个穴直接或间接的帮助治疗，但是如果用按摩或针灸的方法错误是会大打折扣的。'},
                { url:require('../assets/healthcultivation/cazhong-point.png'),href:'http://www.zhys.com/zixun/8353.html',title:'一个穴位祛除腰背疼痛！99%的人不知道～',
                content:'委中穴，有人一辈子都没用过自己身体上的这个宝贝，却任由腰痛、背痛折磨，这真是太可惜了。它是我们身体里面的隐士，我们不妨三顾茅庐，把它请出来，让它帮我们挺起健康的脊梁。'},
                { url:require('../assets/healthcultivation/damp-toxin.png'),href:'http://www.zhys.com/zixun/8461.html',title:'如何排湿毒 这样推穴位能轻松去湿毒',
                content:'湿毒，并不是夏天才会有的，经常一坐就一天的上班族也会滋生湿毒，因此，久坐的人，必须要学会“排湿毒”这一招。'},
                { url:require('../assets/healthcultivation/golden-cavern.png'),href:'http://www.zhys.com/zixun/6172.html',title:'人体5大黄金穴：再不揉起就老了，一天五分钟效果难以置信！',
                content:'人体是这世界上最杰出的艺术品，按黄金分割点来找，有5大黄金穴。中医专家指出，常按摩这五个穴位可以抗衰老。'}],
            medicinalDietlist:[
                { url:require('../assets/healthcultivation/indigestion.png'),href:'http://www.zhys.com/zixun/8616.html',title:'四款专治消化不良的药膳 防护从饮食做起',
                content:'消化不良是由于先天妆磲裔香禀赋不足、饮食失节、外感湿邪等引起，轻症饮食治疗即可见良效。并且每天不进若益肽屙行有必要的防护，当消化不良时就会造成大麻烦，每天从防护做起，每天含食几颗芳雨天源青橄榄就有很好疗效。下面就来介绍四种调理药膳。'},
                { url:require('../assets/healthcultivation/chinese-medicine.png'),href:'http://www.zhys.com/zixun/5962.html',title:'秋季养生必备十款中药！滋阴养肺最适合煲汤！',
                content:'秋季除了燥热，还有一项重要的事情就是进补了。而药补就是秋季进补的一个重要方法。秋季养生小常识有哪些中药可以用来补身体呢，通过中药无论是煎煮、泡水还是熬汤，都是进补少不了的!'},
                { url:require('../assets/healthcultivation/tangpi.png'),href:'http://www.zhys.com/zixun/1964.html',title:'陈皮配一宝，补血养颜抗衰老~',
                content:'中医上常说，“百年陈皮，千年人参”;足可见陈皮有着非常高的药用功效。陈皮同补药一起用则补虚，同沉降药一起用则沉降， 跟不同食物的搭配，不但可以放大功效治疗百病，还能做成药膳，下面一起来看看陈皮的10款神奇妙用吧。'},
                { url:require('../assets/healthcultivation/angelica.png'),href:'http://www.zhys.com/zixun/6658.html',title:'它是女人的补血王、男人的回春宝！冬天吃最好了！',
                content:'自古以来养生注重女人补血，男人补气，只有气血充足，精力才旺盛，脸色才好看，也能延缓衰老。而一直以来补气、补血的也就那几样中药材，当归、人参、黄芪、枸杞等。我们今天就一同聊一聊具有补血之王称呼的当归，它还被称为“妇科圣药”。'}],
            chineseMmedicinallist:[
                { url:require('../assets/healthcultivation/ginseng.png'),href:'http://www.yswol.com/zhongyi/zhongyao/7707.shtml',title:'人参'},
                { url:require('../assets/healthcultivation/semenSojae.png'),href:'http://www.yswol.com/zhongyi/zhongyao/7708.shtml',title:'淡豆豉'},
                { url:require('../assets/healthcultivation/honeysuckle.png'),href:'http://www.yswol.com/zhongyi/zhongyao/527.shtml',title:'金银花'},
                { url:require('../assets/healthcultivation/cordateHouttuynia.png'),href:'http://www.yswol.com/zhongyi/zhongyao/360.shtml',title:'鱼腥草'},
                { url:require('../assets/healthcultivation/radicesRehmanniae.png'),href:'http://www.yswol.com/zhongyi/zhongyao/396.shtml',title:'熟地黄'},
                { url:require('../assets/healthcultivation/mum.png'),href:'http://www.yswol.com/zhongyi/zhongyao/63.shtml',title:'菊花'},
                { url:require('../assets/healthcultivation/ephedra.png'),href:'http://www.yswol.com/zhongyi/zhongyao/58.shtml',title:'麻黄'},
                { url:require('../assets/healthcultivation/duckweed.png'),href:'http://www.yswol.com/zhongyi/zhongyao/7710.shtml',title:'浮萍'}],
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
.diet{
    width:1200px;
    height:1000px;
    margin:auto;
    h3{
        
        color:#f38c17;
        text-align:left;
        float:left;
    }
     h4{
        margin-left:10px;
        color:#84cf0a;
        
    }
    .healthborder{
    width:1140px;
    margin-left:10px;
    margin-bottom:20px;
    border-bottom:1px solid #84cf0a;
    text-align:left;
}
    .chineseMmedicinal{
        height:150px;
        
        img{
            float:left;
        }
        ul{
            padding:0;
        }
        li{
            list-style: none;
            width:130px;
            margin-left:13px;
            float:left;
        }
}
.diet-collection{
    width:1160px;
    margin:auto;
    text-align:left;
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
        margin-left:30px;
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