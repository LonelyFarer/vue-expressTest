<template>
    <div class="population">
         <h2 class="title">人群养生</h2>
         
         
         <div class="populationhealth">
              <h3>男性</h3>
              <div class="diseasetype-title" style="clear:left;"></div>
               <ul >
                <li v-for="man in manlist" :key = "man.href"> 
                    <img :src='man.url' alt="春季养生">
                    <h3><a :href="man.href" :title="man.title">{{man.title}}</a></h3>
                    <div class="content">{{man.content}}</div>
                </li>
            </ul>
         </div>

        <div class="populationhealth">
              <h3>女性</h3>
              <div class="diseasetype-title" style="clear:left;"></div>
               <ul >
                <li v-for="woman in womanlist" :key = "woman.href"> 
                    <img :src='woman.url' alt="夏季养生">
                    <h3><a :href="woman.href" :title="woman.title">{{woman.title}}</a></h3>
                    <div class="content">{{woman.content}}</div>
                </li>
            </ul>
         </div>

         <div class="populationhealth">
              <h3>儿童</h3>
              <div class="diseasetype-title" style="clear:left;"></div>
               <ul >
                <li v-for="child in childlist" :key = "child.href"> 
                    <img :src='child.url' alt="秋季养生">
                    <h3><a :href="child.href" :title="child.title">{{child.title}}</a></h3>
                    <div class="content">{{child.content}}</div>
                </li>
            </ul>
         </div>

         <div class="populationhealth">
              <h3>两性</h3>
              <div class="diseasetype-title" style="clear:left;"></div>
               <ul >
                <li v-for="amphoteric in amphotericlist" :key = "amphoteric.href"> 
                    <img :src='amphoteric.url' alt="冬季养生">
                    <h3><a :href="amphoteric.href" :title="amphoteric.title">{{amphoteric.title}}</a></h3>
                    <div class="content">{{amphoteric.content}}</div>
                </li>
            </ul>
         </div>

         <div class="populationhealth">
              <h3>白领</h3>
              <div class="diseasetype-title" style="clear:left;"></div>
               <ul >
                <li v-for="whiteCollar  in whiteCollarlist" :key = "whiteCollar.href"> 
                    <img :src='whiteCollar.url' alt="冬季养生">
                    <h3><a :href="whiteCollar.href" :title="whiteCollar.title">{{whiteCollar.title}}</a></h3>
                    <div class="content">{{whiteCollar.content}}</div>
                </li>
            </ul>
         </div>

    </div>
</template>
<script>
export default {
    name: 'populationhealth',
    data(){
        return{
            manlist:[
                { url:require('../assets/populationhealth/oyster.png'),href:'https://www.sandingtv.com/rq/nx/4200.html',title:'男人吃牡蛎对身体有什么好处，男性食用牡蛎具有补肾的作用吗',
                content:'牡蛎是一种味道鲜美的海鲜产品，通过盐焗或者炭烤，可以将牡蛎的中的鲜美味道充分地激发出来，芳香四溢。很多人都知道，男性食用牡蛎具有补肾壮阳的功效，事实上，真是有这样的效果吗？今天就了解下牡蛎的相关知识。'},
                { url:require('../assets/populationhealth/kidney.png'),href:'http://www.cnys.com/article/70097.html',title:'男人肾虚怎么办  要改变六大饮食习惯',
                content:'肾不好怎么办？现代社会很多人饮食不规律，养成很多不良的饮食习惯，导致肾脏不好。哪些饮食习惯容易伤肾？肾对男人尤为重要，男人肾虚吃什么食物好？快来看看吧'},
                { url:require('../assets/populationhealth/man.png'),href:'http://www.cnys.com/article/67725.html',title:'男性增强性能力,九个方法教你做真男人',
                content:'男性整日忙碌奔波，没有时间关注自己的身体健康，直到有一天你们温存时发现他的性能力面临着危机，才引起你和他的紧张。其实，在日常生活中有男性增加性能力的九个方法...'},
                { url:require('../assets/populationhealth/semen.png'),href:'https://www.sandingtv.com/rq/nx/4033.html',title:'影响男性精子活性的因素都有哪些，有哪些食物可以提高男性精子活性',
                content:'精子活性直接影响着女性怀孕的首要条件，但是，随着社会的压力过大，男性在工作的过程中，身体在不同程度上都会存在一定的亚健康状态，也导致男性的精子活性下降了很多。那么影响男性精子活性的因素都有哪些呢？有哪些食物可以提高男性精子活性呢？'}],
            womanlist:[
                { url:require('../assets/populationhealth/food.png'),href:'http://www.zhys.com/zixun/5575.html',title:'7种食物最“滋养”女人，白菜价却比保养品还管用！',
                content:'女人如花，鲜艳绚烂却总有凋零时，留住青春是每个女人的梦想。最好的保养品不在美容院，而是藏在菜市场中。'},
                { url:require('../assets/populationhealth/stomachCold.png'),href:'https://www.sandingtv.com/rq/nxys/4209.html',title:'女人胃寒以后要如何调理，胃寒的人群在日常生活中的注意事项',
                content:'很多女性总是认为自己身材消瘦比较健康美丽，就会通过饮食控制来降低自身体重，长时间的饮食不规律，很容易就会导致女性的胃肠道代谢发生异常，进而导致女性脾胃出现了虚寒的症状。那么女人胃寒以后要如何调理？胃寒的人群在日常生活中的注意事项？'},
                { url:require('../assets/populationhealth/enrichBlood.png'),href:'http://www.zhys.com/zixun/897.html',title:'补血养颜有妙招，5招帮你恢复红润气色',
                content:'一些人常出现脸色苍白的现象，这是因气血不足造成。尤其是对于女性朋友而言，气血不足更是常见。因此，及时补血变得非常重要!那么，补血要吃一些什么食物才好呢?'},
                { url:require('../assets/populationhealth/preparationPregnancy.png'),href:'http://www.zhys.com/zixun/800.html',title:'备孕妈妈必看,女人生二胎的极限年龄是几岁',
                content:'二胎时代到了，相信宝妈们最关心的一定是女人最晚的生育年纪是几岁!女人过了35岁，就踏入高龄产妇行列了?高龄产妇就是生孩子的风险比平常高，还有人说年纪大了，可能会怀不上孩子了!'}],
            childlist:[
                { url:require('../assets/populationhealth/calcium.png'),href:'https://www.cndzys.com/renqun/ertong/1660261.html',title:'婴幼儿补钙的最佳时间',
                content:'钙是人体生长发育最为重要的东西，不管是孩子还是成人，钙对于我们来说都是非常重要的，宝宝在成长的过程中，是需要不断的吸收钙质的，这样才能够有效的帮助骨骼的发育，如果宝宝不及时补钙的话，是很容易导致缺钙的，那婴幼儿要补钙的最佳时间是什么时候呢？'},
                { url:require('../assets/populationhealth/immunity.png'),href:'http://www.zhys.com/zixun/711.html',title:'小孩如何增加免疫力 简单的生活习惯是法宝',
                content:'现在不少家长为了提高孩子的免疫力，给孩子服用一些价格昂贵的保健品或使用抗生素，殊不知，最健康的方式，还是通过培养孩子良好的生活习惯来提高免疫力。'},
                { url:require('../assets/populationhealth/diarrhea.png'),href:'https://www.sandingtv.com/rq/fy/3491.html',title:'适合小儿腹泻的几种比较常见的食疗方法',
                content:'夏季时间，由于气温比较高，空气比较湿润，特别适合各种细菌或者微生物的滋生繁殖，而宝宝在接触到细菌或者有害物质的时候，通过玩耍或者吃手，很容易就会把这些细菌带到体内，而宝宝的胃肠道代谢功能还不完善，很容易就会引起小儿腹泻。今天小编就推荐几种比较常见的具有辅助治疗小儿腹泻的食疗方法。'},
                { url:require('../assets/populationhealth/allergy.png'),href:'https://www.cndzys.com/renqun/ertong/1660094.html',title:'小孩身上过敏起红疙瘩怎么办',
                content:'小孩过敏在平时是比较常见的疾病，如果身体起了很多的小红疙瘩，那就一定要引起重视了，过敏引起的疙瘩是会引起瘙痒的，而且痒的时候，还不能用手去抓挠，因此小孩会不停的哭闹，小孩出现过敏，家长要引起重视，及时的给孩子进行治疗，尽快的帮助孩子快速的治愈过敏。'}],
            amphotericlist:[
                 { url:require('../assets/populationhealth/stayingPower.png'),href:'https://www.cndzys.com/liangxingyangsheng/jiankang/1660472.html',title:'怎样增加性持久力',
                content:'大多数男性不仅会很在意自己的阴茎大小，还会很在意自己在进行性生活时的持久能力，因为在现代社会，早泄成为了一个困扰很多男性的一个重要难题。如果男性较为持久的话，能够给性伴侣带来更好的体验，保持住良好的性生活关系。那么男性应该怎样增加自己的性持久的能力呢？'},
                { url:require('../assets/populationhealth/time.png'),href:'https://www.cndzys.com/liangxingyangsheng/shengli/1657637.html',title:'性生活多少时间才算正长呢',
                content:'不管是男性还是女性都会非常的关注性生活时间的，因为长时间的性交可以让性质量得到保证，其实真正衡量性生活质量的方式是不通过时间的，只要双方都得到满足就可以了，调查发现健康的男性性生活的时间一般都是在六分钟左右，身体素质特别好的除外，那么性生活多少时间才算正长呢?'},
                { url:require('../assets/populationhealth/sleep.png'),href:'https://www.cndzys.com/liangxingyangsheng/shengli/1484839.html',title:'备孕同房要注意这几个禁忌',
                content:'大部分的夫妻在备孕前的同房，都是和平时的性生活一样，有属于自己的规律，但要注意备孕前的同房，是需要制造生命的，稍有不慎可能会导致自己的宝宝不健康，备孕前的同房要注意几个点，不能过度疲劳，情绪不能不好，患病期间不能同房以及多项注意事项。'},
                { url:require('../assets/populationhealth/infertility.png'),href:'https://www.cndzys.com/liangxingyangsheng/jiankang/1484439.html',title:'导致不孕不育的原因会有什么呢?',
                content:'不孕不育的情况在现在的生活里是越来越多的，因为许多朋友对自己的身体健康不重视，导致身体过度的透支和出现异常，所以出现不孕不育也就有更高的几率。引起不孕不育的原因会有遗传因素、环境因素、疾病因素、心理因素等等，所以各位患者要做好治疗的准备。'}],
            whiteCollarlist:[
                 { url:require('../assets/populationhealth/feelsleepy.png'),href:'http://www.zhys.com/zixun/163.html',title:'每天睡不醒上班无精神 怎样缓解犯困',
                content:'每个人容易犯困的时间节点不一样，有些人容易在上午犯困，有些人是下午犯困，而有些人则容易在晚上犯困，无论你是哪一种，都可以找到方法缓解犯困的问题。'},
                { url:require('../assets/populationhealth/healthtea.png'),href:'http://www.cnys.com/article/72435.html',title:'上班族养生调理，就喝这些茶！ ',
                content:'每日面对电脑屏幕，每日久坐不动，每日不出办公室……研究显示，上班族已经成为现在最容易患癌的人群。今天，小编为大家介绍7种养生茶，可以有效防癌防病，上班族赶快喝起来吧'},
                { url:require('../assets/populationhealth/badhabit.png'),href:'http://www.cnys.com/article/69386.html',title:'上班族要注意,十大饮食坏习惯你有吗',
                content:'上班族整天忙忙碌碌，但是却忽视了自身的健康，导致上班族患病的几率增加。很多上班族都有致命的饮食习惯，不信你看...'},
                { url:require('../assets/populationhealth/subhealthy.png'),href:'http://www.cnys.com/article/68986.html',title:'上班族如何对抗亚健康,这里有妙招请收下',
                content:'亚健康状态的人虽然没有明确的疾病，但却容易出现精神活力和适应能力的下降。如果这种情况不注意改善的话，就很容易引起身心疾病。上班族是亚健康的重灾区，他们通常都会有情绪低落、易疲惫、失眠、头痛等症状，那么如何有效对抗亚健康...'}],

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
.population{
    width:1200px;
    height:1000px;
    margin:auto;
    h3{
        
        color:#f38c17;
        text-align:left;
        float:left;
    }
.populationhealth{
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