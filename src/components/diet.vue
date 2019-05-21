<template>
    <div class="diet">
         <h2 class="title">膳食</h2>
         
         <div class="nutrition">
              <h3>营养饮食</h3>
              <div class="diseasetype-title" style="clear:left;"></div>
              <div class="diet-left">
                 <h4>饮食小贴士</h4>
                <ul >
                <li v-for="diettips in diettipslist" :key = "diettips.href"> 
                    <a :href="diettips.href" :title="diettips.title">{{diettips.title}}</a>
                </li>
              </ul>
              </div>
              <div class="diet-right">
              <ul >
                <li v-for="nutrition in nutritionlist" :key = "nutrition.href"> 
                    <img :src='nutrition.url' alt="疾病预防">
                    <h3 style="margin-left:80px"><a :href="nutrition.href" :title="nutrition.title">{{nutrition.title}}</a></h3>
                </li>
              </ul>
              </div>
         </div>
         <div class="diet-collection">
              <h3>饮食搭配</h3>
              <div class="diseasetype-title" style="clear:left;"></div>
               <ul >
                <li v-for="diet in dietlist" :key = "diet.href"> 
                    <img :src='diet.url' alt="饮食搭配">
                    <h3><a :href="diet.href" :title="diet.title">{{diet.title}}</a></h3>
                    <div class="content">{{diet.content}}</div>
                </li>
            </ul>
         </div>

        <div class="diet-collection">
              <h3>饮食禁忌</h3>
              <div class="diseasetype-title" style="clear:left;"></div>
               <ul >
                <li v-for="diettaboo in diettaboolist" :key = "diettaboo.href"> 
                    <img :src='diettaboo.url' alt="饮食搭配">
                    <h3><a :href="diettaboo.href" :title="diettaboo.title">{{diettaboo.title}}</a></h3>
                    <div class="content">{{diettaboo.content}}</div>
                </li>
            </ul>
         </div>

    </div>
</template>
<script>
export default {
    name: 'diet',
    data(){
        return{
            dietlist:[
                { url:require('../assets/diet/fruit.png'),href:'https://www.cndzys.com/yinshi/dapei/1652067.html',title:'哪些水果不能混合吃',
                content:'大部分人都知道多吃水果对身体健康非常有帮助,但并不是所有的水果都适合混着吃，有些水果由于特性不同，混着吃会给身体造成一些负担，出现不适等症状，要想水果吃的更有价值，就得了解哪些水果可以一起吃，哪些不能。'},
                { url:require('../assets/diet/reddates.png'),href:'https://www.cndzys.com/yinshi/dapei/1646733.html',title:'红枣藏红花泡水',
                content:'藏红花作为一种药材，很受女性朋友的欢迎，通常都是单独泡水饮用。作为天然维生素的红枣也是经常出现人们的视野里，虽然藏红花比较适合单独冲泡，但是这两种东西的成分之间并没有相互冲突，也是可以一起冲泡的，而且还有很好的功效，甚至可以起到防病的效果。'},
                { url:require('../assets/diet/silkie.png'),href:'https://www.cndzys.com/yinshi/dapei/1641386.html',title:'乌鸡不能和什么一起吃',
                content:'生活各方面经济压力大导致现代很多人的体力严重透支，原来食补是老年人需要的，现在年轻人也加入了进补的行列。食补主要的原料就是各种家禽，尤其是农家自养的家禽，比如乌鸡，自养的营养价值比市场买的更高。乌鸡可炖可煮，但是吃乌鸡的时候需要注意不要吃到相克的食物。那乌鸡不能和什么一起吃呢？'},
                { url:require('../assets/diet/lotus-seed.png'),href:'https://www.cndzys.com/yinshi/dapei/1456988.html',title:'​莲子银耳红枣汤的功效，食补粥品要常喝',
                content:'女性朋友平时都应该多喝一些养生的粥，特别是莲子银耳红枣汤，补气血的效果很好，气血对女性来说是很重要的，常喝这道汤肯定能够让你越来越年轻漂亮。'}],
            diettaboolist:[
                { url:require('../assets/diet/sanqi.png'),href:'https://www.cndzys.com/yinshi/jinji/1652064.html',title:'哪些人不宜服三七 ',
                content:'三七是一种药材，在生活中比较常见，合理的服用三七能够很好的调理身体，改善身体的状态，降低血压血糖等。但是再好的东西，也有一些人不能食用，不然会影响身体的健康，一般血糖低，血压低，血脂低的人群就不适合吃三七。'},
                { url:require('../assets/diet/soybean.png'),href:'https://www.cndzys.com/yinshi/jinji/1548403.html',title:'每天喝豆浆好吗 吃豆浆有哪四忌',
                content:'豆浆都是人人爱的食物，尤其是作为早餐搭配馒头、面包或是包子，这种比较传统的吃法及营养又方便，而且老少皆宜，豆浆的营养价值也很高，能很好的降低胆固醇，预防衰老，防止骨质疏松等,虽然营养价值高，但喝豆浆也有禁忌。'},
                { url:require('../assets/diet/haw.png'),href:'https://www.cndzys.com/yinshi/jinji/1545556.html',title:'山楂枸杞茶的禁忌有哪些',
                content:'大家都知道山楂不仅是一种具有很好保健效果的食材，而且还是一种具有促进消耗功效的药材，长期的食用或者是泡茶可以有效的预防心脑血管疾病，而且还可以预防癌症的发生，但并不是所有人群都适合饮用。'},
                { url:require('../assets/diet/millet.png'),href:'https://www.cndzys.com/yinshi/jinji/1540235.html',title:'小米山药粥禁忌是什么?',
                content:'小米山药粥是日常饮食上比较常见的一道美食，小米山药粥其中的营养价值丰富，富含多种矿物质以及多种营养元素，可以补充身体所需要的营养成分，而长期食用小米山药粥也有一定的禁忌，由于山药其中富含大量的淀粉，食用过多可能会导致腹胀的情况。'}],
            nutritionlist:[
                { url:require('../assets/diet/nut.png'),href:'https://www.cndzys.com/baike/hetao/',title:'核桃'},
                { url:require('../assets/diet/milk.png'),href:'https://www.cndzys.com/baike/niunai/',title:'牛奶'},
                { url:require('../assets/diet/red-dates.png'),href:'https://www.cndzys.com/shuiguoshicai/hongzao/',title:'红枣'},
                { url:require('../assets/diet/red-wine.png'),href:'https://www.cndzys.com/baike/hongjiu/',title:'红酒'},
                { url:require('../assets/diet/Sea-cucumber.png'),href:'https://www.cndzys.com/yulei/haishen/',title:'海参'},
                { url:require('../assets/diet/cubilose.png'),href:'https://www.cndzys.com/yinshi/yanwo.html',title:'燕窝'},
                { url:require('../assets/diet/abalone.png'),href:'https://www.cndzys.com/yulei/baoyu/',title:'鲍鱼'},
                { url:require('../assets/diet/litchi.png'),href:'https://www.cndzys.com/shuiguoshicai/lizhi/',title:'荔枝'}],
            diettipslist:[
                {href:'https://www.cndzys.com/yinshi/cunchu/1637453.html',title:'枸杞的存放方法是什么？'},
                {href:'https://www.cndzys.com/yinshi/cunchu/1631698.html',title:'西瓜放保鲜可以放多久？'},
                {href:'https://www.cndzys.com/yinshi/cunchu/1437157.html',title:'土豆怎样保存不发芽，这些方法有用'},
                {href:'https://www.cndzys.com/yinshi/cunchu/1379284.html',title:'荔枝保鲜方法，你了解了吗?'},
                {href:'https://www.cndzys.com/yinshi/cunchu/1379017.html',title:'苹果怎么存放比较好？'},
                {href:'https://www.cndzys.com/yinshi/cunchu/1376963.html',title:'胡萝卜的营养，意想不到'},
                {href:'https://www.cndzys.com/yinshi/cunchu/1653140.html',title:'螃蟹活的放到冰箱里吗?'},
                {href:'https://www.cndzys.com/yinshi/cunchu/1625452.html',title:'老姜和嫩姜的区别'},]
                
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
    .nutrition{
        width:1160px;
        margin:auto;
        
        a{
            height:34px;
            line-height:30px;
            color: #111;
            text-decoration: none;
           
            overflow:hidden;
        }
        a:hover{
            color:#f71505;
        }
        .diet-left{
            width:300px;
            height:400px;
            float:left;
            h4{
                text-align:left;
                margin-top:5px;
                margin-left:10px;
                color:#84cf0a;
            }
            ul{
                padding:0;
            }
            li{
                font-size:18px;
                line-height:8px;
                height:34px;
                margin-top:5px;
                margin-left:12px;
                text-align:left;
                overflow: hidden;
                
            }
             a:before {
                border: 1px solid #ddd;
                border-radius: 50%;
                content: "";
                display: inline-block;
                width: 7px;
                height: 7px;
                margin: 0 8px 0 0;
                vertical-align: middle;
                }
        }
        .diet-right{
            height:400px;
        img{
            float:left;
        }
        li{
            list-style: none;
            width:200px;
            height:165px;
            margin-left:15px;
            margin-bottom:20px;
            float:left;
        }
        }
}
.diet-collection{
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
