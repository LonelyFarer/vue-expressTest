<template>
<div class="Home">
    <!-- <div class="headimg">
      <img src='../assets/health.png' alt="治未病">
    </div> -->
    <div class="body">
      <div class="block">
      <el-carousel height="250px" style="width:580px">
        <el-carousel-item v-for="img in imglist" :key = "img.url" >
          <img :src='img.url' alt="治未病">
        </el-carousel-item>
      </el-carousel>
      </div>
      <!-- 养生小知识 -->
      <div class="block">
        <div class="health-knowledge">
          <h2 class="knowledge-title" style="width:520px">养生小知识</h2>
           <ul >
              <li v-for="know in healthknowledge" :key = "know.href"> 
                <a :href="know.href" :title="know.title">{{know.title}}</a>
              </li>
            </ul>
          
        </div>
      </div>
      <!-- 膳食养生，运动养生，季节养生 -->
      <div class="card">
          <el-card class="diet-box" shadow="hover">
            <div slot="header" class="clearfix">
              <span class="diet-title">膳食养生</span>
              <!-- <a href="http://www.cnys.com/caipu/" style="float:right">更多</a> -->
            </div>
            <ul >
              <li v-for="diet in diethealth" :key = "diet.href"> 
                <a :href="diet.href" :title="diet.title">{{diet.title}}</a>
              </li>
            </ul>
          </el-card>
          <el-card class="diet-box" shadow="hover">
            <div slot="header" class="clearfix">
              <span class="diet-title">运动养生</span>
              <!-- <a href="http://www.cnys.com/caipu/" style="float:right">更多</a> -->
            </div>
             <ul >
              <li v-for="sport in sporthealth" :key = "sport.href"> 
                <a :href="sport.href" :title="sport.title">{{sport.title}}</a>
              </li>
            </ul>
          </el-card>
          <el-card class="diet-box" shadow="hover">
            <div slot="header" class="clearfix">
              <span class="diet-title">季节养生</span>
              <!-- <a href="http://www.cnys.com/caipu/" style="float:right">更多</a> -->
            </div>
            <ul >
              <li v-for="season in seasonhealth" :key = "season.href"> 
                <a :href="season.href" :title="season.title">{{season.title}}</a>
              </li>
            </ul>
          </el-card>
      </div>
      <!-- 养生焦点 -->
       <div class="health-information">
          <h1 class="knowledge-title" style="width:1150px">养生资讯</h1>
            <div class="information-left">
              <img :src='healthtimeurl' alt="养生时间段">
              <h2 class="knowledge-title" style="border:none;color:#000000;text-align:center;margin-bottom:0">养生有个好时间 掌握时间规律事半功倍！</h2>
              <a href="https://www.sandingtv.com/news/107.html">
                <div class="information">养生要看时间段？没错。什么时间该做什么，什么时候不能做什么，从养生角度来说这是非常有讲究。下面重点梳理日常养生的最佳时间段和注意事项。</div>
              </a>
            </div>
            <div class="information-right">
               <h2 class="knowledge-title" style="">营养搭配</h2>
               <ul >
                <li v-for="nutrition in nutritionlist" :key = "nutrition.href"> 
                  <a :href="nutrition.href" :title="nutrition.title">{{nutrition.title}}</a>
                </li>
              </ul>

              <h2 class="knowledge-title" style="">养生禁忌</h2>
               <ul >
                <li v-for="avoid in avoidlist" :key = "avoid.href"> 
                  <a :href="avoid.href" :title="avoid.title">{{avoid.title}}</a>
                </li>
              </ul>

              <h2 class="knowledge-title" style="">养生百科</h2>
               <ul >
                <li v-for="knowledge in knowledgelist" :key = "knowledge.href"> 
                  <a :href="knowledge.href" :title="knowledge.title">{{knowledge.title}}</a>
                </li>
              </ul>
            </div>
       </div>
      <!-- 养生食谱 -->
      <div class="recipe">
        <h1 class="knowledge-title" style="width:1150px">养生食谱</h1>
        <ul >
          <li v-for="img in imglist2" :key = "img.url"> 
            <a :href="img.href">
            <img :src='img.url' alt="食谱">
           <p>{{img.title}}</p></a>
           </li>
        </ul>
      </div>

    </div>
</div>
</template>

<script>
import index from '@/components/index'
export default {
  name: 'Home',
   components:{
     index
   },
 data() {
      return {
        
          healthtimeurl:require('../assets/Home/healthtime.png'),
          imglist:[
            { url: require('../assets/Home/prevent-disease.png')},
            { url: require('../assets/Home/medical-diet.png')},
            { url: require('../assets/Home/healthy.png')}],
          imglist2:[
            { url: require('../assets/Home/ege.png'),title: '花蚬蒸蛋',href:'http://www.zhys.com/caipu/6083.html'},
            { url: require('../assets/Home/luobo.png'),title: '三鲜萝卜卷',href:'http://www.zhys.com/caipu/6081.html'},
            { url: require('../assets/Home/juanbao.png'),title: '香肠卷包',href:'http://www.zhys.com/caipu/6025.html'},
            { url: require('../assets/Home/nut.png'),title: '核桃酥',href:'http://www.zhys.com/caipu/6017.html'},
            { url: require('../assets/Home/soup.png'),title: '雪梨银耳莲子羹',href:'http://www.zhys.com/caipu/5991.html'},
            { url: require('../assets/Home/congee.png'),title: '海参瘦肉粥',href:'http://www.zhys.com/caipu/5920.html'},
            { url: require('../assets/Home/chickensoup.png'),title: '野山笋炖乌鸡汤',href:'http://www.zhys.com/caipu/5894.html'},
            { url: require('../assets/Home/lemontea.png'),title: '蜂蜜柠檬茶',href:'http://www.zhys.com/caipu/5866.html'}],
          nutritionlist:[
            { href:"https://www.sandingtv.com/news/365.html", title:"适合高血脂患者的营养搭配，在饮食上应该注意些什么"},
            { href:"https://www.sandingtv.com/news/311.html", title:"人一天所需要的营养搭配，这些营养物质都不能少"},
            { href:"https://www.sandingtv.com/news/283.html", title:"早中晚营养餐的黄金搭配方案，这样吃越来越健康！"}],
          avoidlist:[
            { href:"http://www.cnys.com/article/75075.html", title:"皮肤过敏不能吃什么 皮肤过敏千万别碰这六类食物"},
            { href:"http://www.cnys.com/article/74978.html", title:"近视眼饮食有什么禁忌吗 近视眼的饮食禁忌"},
            { href:"http://www.cnys.com/article/75108.html", title:"小心中毒！DIY(自己动手制作)这些食品请慎重！"}],
          knowledgelist:[
            { href:"https://www.sandingtv.com/baike/sg/4126.html", title:"晚上睡觉之前可以吃苹果吗，什么时间吃苹果吸收最好"},
            { href:"https://www.sandingtv.com/baike/rl/3995.html", title:"带鱼的食用功效以及方法有哪些，食用带鱼需要注意哪些方面"},
            { href:"https://www.sandingtv.com/baike/nai/1374.html", title:"牛奶的美味不止在于喝，牛奶的各种饮食搭配"}],
          healthknowledge:[
            { href:"http://www.yswol.com/zixun/yangsheng/yinshi/9259.shtml", title:"食疗瓜皮酱的做法,夏天西瓜皮的妙用"},
            { href:"http://www.yswol.com/zixun/yangsheng/jinji/8651.shtml", title:"晚餐影响寿命，晚上少吃4种食物，你会更健康"},
            { href:"http://www.yswol.com/zixun/yangsheng/jiankang/8649.shtml", title:"脸上长痘，这几种食物能帮你缓解，值得尝试"},
            { href:"http://www.yswol.com/zixun/yangsheng/jiankang/8644.shtml", title:"胃不好，常用这几种东西泡水，多喝一口胃好一寸"},
            { href:"http://www.yswol.com/zixun/yangsheng/yinshi/8629.shtml", title:"6种有益健康的调料，常吃能消炎、杀菌、促消化"},
            { href:"http://www.yswol.com/zixun/yangsheng/yinshi/8623.shtml", title:"3种水果是“天然的减肥药”，很多人吃都瘦下来了"}],
          diethealth:[
            { href:"http://www.cnys.com/article/75564.html", title:"不能再全的肾病饮食指南 肾病注意事项"},
            { href:"http://www.cnys.com/article/75528.html", title:"六种容易中毒的食物 吃不对就是吃“砒霜”"},
            { href:"http://www.cnys.com/article/75315.html", title:"冬季养生进补，这四款养生粥必不可少"},
            { href:"http://www.cnys.com/article/75238.html", title:"痛风最容易找上这几类人，经常熬夜、压力过大的人上榜！"},
            { href:"http://www.cnys.com/article/75127.html", title:"这八大顶级食物是营养冠军！每个人都吃得起！"},
            { href:"http://www.ttys5.com/shanshi/shipu/2018-08-13/157832.html", title:"消暑又安神甜品芋圆绿豆莲子羹"},
            { href:"http://www.ttys5.com/shanshi/shipu/2018-08-13/157831.html", title:"消食减肥晚餐腐乳蒸鸡"},
            { href:"http://www.ttys5.com/shanshi/shipu/2018-08-13/157824.html", title:"伏天消暑冰品苏式绿豆汤"}],
          sporthealth: [
            { href:"https://www.cndzys.com/yundong/changshi/1640652.html", title:"打完篮球后喝什么最好"},
            { href:"https://www.cndzys.com/yundong/changshi/1639591.html", title:"女生早上晨跑有哪些注意事项？"},
            { href:"https://www.cndzys.com/yundong/changshi/1539671.html", title:"增强肾功能的运动有哪些"},
            { href:"https://www.cndzys.com/yundong/changshi/1534928.html", title:"初学者哑铃的训练方法"},
            { href:"http://www.cnys.com/article/73660.html", title:"教你8式瑜伽，减肥、解压、养性三不误！ "},
            { href:"http://www.cnys.com/article/72517.html", title:"俯卧撑的6大错误动作，每个都能毁掉你的胸！ "},
            { href:"http://www.cnys.com/article/69690.html", title:"日常锻炼身体的方法 简单易行要牢记"},
            { href:"http://www.cnys.com/article/68993.html", title:"经常跑步的好处,不看不知道一看吓一跳"}],
          seasonhealth:[
            { href:"http://www.zhys.com/zixun/6650.html", title:"秋冬季节，五脏六腑上火怎么灭？一穴一汤就搞定！"},
            { href:"http://www.zhys.com/zixun/6583.html", title:"秋天浑身无力、无精打采还容易长斑？都是湿气造成的！"},
            { href:"http://www.zhys.com/zixun/6550.html", title:"秋冬养生滋补全靠它，5大给力炖汤营养又好喝~"},
            { href:"http://www.zhys.com/zixun/6476.html", title:"中医推荐秋季“四大名补”，几道菜把补肾止泻养脾胃全包了 ！"},
            { href:"http://www.zhys.com/zixun/8562.html", title:"春季天气渐暖 要注意躲过这四种“开春病”"},
            { href:"http://www.zhys.com/zixun/8489.html", title:"春分时节 注意防病毒、防过敏"},
            { href:"http://www.zhys.com/zixun/2817.html", title:"夏日女人喝这些茶最好  解暑养颜两不误"},
            { href:"http://www.zhys.com/zixun/2862.html", title:"夏季炎热上火怎么办 多吃它可清热解暑"}]
      };
    },
     methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      Home(){
        this.$router.push('/Home')
      },
      nous(){
        this.$router.push('/nous')
      }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
a{
     color: #111;
     text-decoration: none;
}
a:hover{
        color:#f71505;
    }
 .body{
   height:100%;
   width:1200px;
   margin:0 auto;
   text-align:left;
   
 }
 .block{
   display:inline-block;
   width:585px;
   margin-top:20px;
   vertical-align: top
 }
 .card{
   height:445px;
 }
 .diet-box{
   width:380px;
   
   .diet-title{
      font-size:25px;
      color:#17d14f;
   }
   a{
     overflow: hidden;
   }
     a:hover{
        color:#f71505;
    }
    ul{
      padding:0;
      margin:0;
    }
    li{
      list-style: none;
      margin-top:5px;
       a{
          display: block;
          clear: both;
          width: 100%;
          height: 34px;
          line-height: 34px;
          font-size:16px;
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
    }
 .el-card{
   //display:inline-block;
   margin-top:20px;
   margin-right:15px;
   text-align:left;
   overflow: hidden;
   float:left;
 }
 
 .health-information{
   height:520px;
   .information-left{
     width:500px;
     height:470px;
     margin-left:20px;
     border:1px solid #cccccc;
     border-radius: 5px;
     float:left;
    
     .information{
       text-indent:2em;
       padding:20px;
     }
   }
   .information-right{
     height:500px;
     width:600px;
     margin-left:570px;
     ul{
       list-style-image: url('../assets/Home/arrow.png');
     }
     li{
       list-style-type: none;
       margin-top:8px;
       border-bottom: 1px dotted #cfcdcd;
     }
   }
 }
 .knowledge-title{
     margin-left:15px;
     color:#0c5020;
     border-bottom:1px solid #16cc52;
  }
 .health-knowledge{
   height:250px;
   margin-left:20px;
   background:rgb(255, 246, 246);
   border:1px solid #45d0f3;
   border-radius: 4px;
   li{
     margin-top:5px;
   }
   a{
     overflow: hidden;
   }
 }
.recipe{
  height:500px;
  width:1200px;
  li{
    list-style: none;
    float:left;
    margin-top:10px;
    margin-right:30px;
    position: relative; 
  }
  p{
    position: absolute;
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    background: rgba(7,17,27,.4);
    color: #fff;
    top: 135px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    text-align:center;
  }
  img{
    width: 250px;
    height: 190px;
    position: relative;
    border-radius: 8px;
    overflow: hidden;
  }
}
</style>
