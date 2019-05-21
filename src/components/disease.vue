<template>
    <div class="disease">
        <h2 class="title">常见疾病</h2>
         <ul >
            <li v-for="disease in diseaselist" :key = "disease.href"> 
                <a :href="disease.href" :title="disease.title">{{disease.title}}</a>
            </li>
        </ul>
        <div class="prevent-disease">
            <h3 class="disease-title">疾病预防</h3>
            <ul >
                <li v-for="prevent in preventlist" :key = "prevent.href"> 
                    <img :src='prevent.url' alt="疾病预防">
                    <h3><a :href="prevent.href" :title="prevent.title">{{prevent.title}}</a></h3>
                    <div class="content">{{prevent.content}}</div>
                </li>
            </ul>
        </div>

        <div class="diseasetype">
            <h3 class="disease-title">疾病分类</h3>
            <ul>
                <h3>内科</h3>
                     <a  v-for="internal in internallist" :key = "internal.href" :href="internal.href" :title="internal.title" style="line-height:68px">{{internal.title}}</a>
                   <div class="diseasetype-title" style="clear:left;"></div>
                <li v-for="internalmessage in internalmessagelist" :key = "internalmessage.href"> 
                    <a :href="internalmessage.href" :title="internalmessage.title">{{internalmessage.title}}</a>
                </li>
            </ul>

            <ul>
                <h3>外科</h3>
                     <a  v-for="surgery in surgerylist" :key = "surgery.href" :href="surgery.href" :title="surgery.title" style="line-height:68px">{{surgery.title}}</a>
                   <div class="diseasetype-title" style="clear:left;"></div>
                <li v-for="surgerymessage in surgerymessagelist" :key = "surgerymessage.href"> 
                    <a :href="surgerymessage.href" :title="surgerymessage.title">{{surgerymessage.title}}</a>
                </li>
            </ul>

            <ul>
                <h3>妇产科</h3>
                     <a  v-for="gynaecology in gynaecologylist" :key = "gynaecology.href" :href="gynaecology.href" :title="gynaecology.title" style="line-height:68px">{{gynaecology.title}}</a>
                   <div class="diseasetype-title" style="clear:left;"></div>
                <li v-for="gynaecologymessage in gynaecologymessagelist" :key = "gynaecologymessage.href"> 
                    <a :href="gynaecologymessage.href" :title="gynaecologymessage.title">{{gynaecologymessage.title}}</a>
                </li>
            </ul>

            <ul>
                <h3>儿科</h3>
                     <a  v-for="paediatrics in paediatricslist" :key = "paediatrics.href" :href="paediatrics.href" :title="paediatrics.title" style="line-height:68px">{{paediatrics.title}}</a>
                   <div class="diseasetype-title" style="clear:left;"></div>
                <li v-for="paediatricsmessage in paediatricsmessagelist" :key = "paediatricsmessage.href"> 
                    <a :href="paediatricsmessage.href" :title="paediatricsmessage.title">{{paediatricsmessage.title}}</a>
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
            diseaselist:[
                {href:'https://www.cndzys.com/disease/detail-1274.html',title:'感冒'},
                {href:'https://www.cndzys.com/disease/detail-826.html',title:'头痛'},
                {href:'https://www.cndzys.com/disease/detail-2193.html',title:'失眠'},
                {href:'https://www.cndzys.com/disease/detail-1373.html',title:'鼻炎'},
                {href:'https://www.cndzys.com/disease/detail-660.html',title:'高血压'},
                {href:'https://www.cndzys.com/disease/detail-1540.html',title:'糖尿病'},
                {href:'https://www.cndzys.com/disease/detail-226.html',title:'痔疮'},
                {href:'https://www.cndzys.com/disease/detail-4006.html',title:'月经不调'},
                {href:'https://www.cndzys.com/disease/detail-10629.html',title:'口腔溃疡'},
                {href:'https://www.cndzys.com/disease/detail-8838.html',title:'贫血'},
                {href:'https://www.cndzys.com/disease/detail-3.html',title:'腹泻'},
                {href:'https://www.cndzys.com/disease/detail-27.html',title:'胃溃疡'}],
            preventlist:[
                { url:require('../assets/disease/autumnfood.png'),href:'http://www.ttys5.com/xinwen/xinwenhangye/2016-09-09/127288.html',title:'秋季养生保健的最佳食品',
                content:'秋季气候干燥，人体极易受燥邪侵袭损伤肺，出现各种秋燥病症。而秋季上市的果蔬，富含人体所需的多种营养物质，有滋阴养肺、润燥生津之功效，能治疗与肺有关的疾病，是秋季养生的最佳食品。'},
                { url:require('../assets/disease/autumn.png'),href:'http://www.ttys5.com/xinwen/xinwenhangye/2016-09-05/127072.html',title:'秋天洗澡的禁忌事宜',
                content:'一旦到了秋季，人们就会觉得洗澡是一件麻烦的事情，不但天气冷了，而且也不愿意天天洗澡了。下面我们就来告诉大家秋季洗澡的禁忌。'},
                { url:require('../assets/disease/tofu.png'),href:'http://www.ttys5.com/shanshi/yingyang/2014-04-30/91187.html',title:'养生提示：豆腐吃太多竟然会引发五种疾病',
                content:'豆腐是百姓桌上最常见的一道菜了，豆腐及豆腐制品的蛋白质含量比大豆高，而且豆腐蛋白属完全蛋白，不仅含有人体必需的八种氨基酸，而且其比例也接近人体需要，营养效价非常高。'},
                { url:require('../assets/disease/orange.png'),href:'http://www.ttys5.com/xinwen/xinwenhangye/2014-02-27/89857.html',title:'脐橙可以有效预防胆囊疾病',
                content:'橙子的营养价值是很高的，它富含维生素，能够为人体提供大量的营养。橙子不仅营养价值高，而且还有医用价值，最主要的它还有预防疾病的功效，它可以有效的预防胆囊疾病。'}],
            internallist:[
                {href:'https://www.cndzys.com/disease/list-2.html',title:'消化内科'},
                {href:'https://www.cndzys.com/disease/list-3.html',title:'心血管内科'},
                {href:'https://www.cndzys.com/disease/list-4.html',title:'神经内科'},
                {href:'https://www.cndzys.com/disease/list-5.html',title:'呼吸内科'},],
            internalmessagelist:[
                {href:'https://www.cndzys.com/yinshi/changshi/189742.html',title:'感冒嗓子疼吃什么水果'},
                {href:'https://www.cndzys.com/yinshi/changshi/187284.html',title:'肠胃炎不能吃什么'},
                {href:'https://www.cndzys.com/yinshi/changshi/194694.html',title:'头疼眼睛疼是什么原因'},],
            surgerylist:[
                {href:'https://www.cndzys.com/disease/list-13.html',title:'普通外科'},
                {href:'https://www.cndzys.com/disease/list-14.html',title:'神经外科'},
                {href:'https://www.cndzys.com/disease/list-15.html',title:'泌尿外科'},
                {href:'https://www.cndzys.com/disease/list-16.html',title:'肝胆外科'},],
            surgerymessagelist:[
                {href:'https://www.cndzys.com/lnbj/53139.html',title:'如何预防老年疾病:脑血栓'},
                {href:'https://www.cndzys.com/renqun/nanxing/232554.html',title:'男性尿道炎9种症状 男性尿道炎的治疗偏方'},
                {href:'https://www.cndzys.com/yinshi/changshi/241957.html',title:'肝硬化需慎防腹水 6大饮食妙招改善肝功能'},],
            gynaecologylist:[
                {href:'https://www.cndzys.com/disease/list-43.html',title:'妇科'},
                {href:'https://www.cndzys.com/disease/list-44.html',title:'产科'},
                {href:'https://www.cndzys.com/disease/list-45.html',title:'产前诊断科'},
                {href:'https://www.cndzys.com/disease/list-49.html',title:'遗传咨询科'},],
            gynaecologymessagelist:[
                {href:'https://www.cndzys.com/renqun/nvxing/190473.html',title:'伤害女人子宫的三大“杀手”'},
                {href:'https://www.cndzys.com/renqun/nvxing/189989.html',title:'女性经期的十个秘密！'},
                {href:'https://www.cndzys.com/renqun/nvxing/1580.html',title:'宫颈糜烂的预防，宫颈糜烂应注意七项原则'},],
            paediatricslist:[
                {href:'https://www.cndzys.com/disease/list-51.html',title:'儿科'},
                {href:'https://www.cndzys.com/disease/list-52.html',title:'小儿外科'},
                {href:'https://www.cndzys.com/disease/list-53.html',title:'新生儿科'},
                {href:'https://www.cndzys.com/disease/list-54.html',title:'小儿呼吸科'},],
            paediatricsmessagelist:[
                {href:'https://www.cndzys.com/ek/92866.html',title:'小儿麻痹症会遗传吗'},
                {href:'https://www.cndzys.com/zhongyi/changshi/225.html',title:'小儿咳嗽的病理及推拿治疗'},
                {href:'https://www.cndzys.com/renqun/ertong/1729.html',title:'儿童口吃的原因，家长们都重视了吗？'},],
       }
    },
    methods:{

    }
}
</script>
<style lang="scss" scoped>
.content{
    width:380px;
    margin-top:55px;
    margin-left:200px;
    margin-right:10px;
}
.disease{
    width:1200px;
    margin:auto;
    text-align:left;
    ul{
        height:140px;
        margin-bottom:20px;
        padding:0;
    }
    li{
        list-style: none;
        width:300px;
        margin-bottom:20px;
        float:left;
    }
    a{
        height:34px;
        margin-left:20px;
        color: #111;
        text-decoration: none;
        float: left;
    }
    a:hover{
        color:#f71505;
    }
}
.prevent-disease{
    height:380px;
    img{
        float:left;
    }
    li{
        width:600px;
        margin-top:10px;
        float:left;
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
.diseasetype{
    height:900px;
   
    ul{
        height:160px;
        width:1160px;
        margin-left:20px;
        margin-bottom:5px;
        h3{
        float:left;
        color:#f38c17;
    }
    }
    li{
        width:1160px;
        margin-left:20px;
        margin-bottom:5px;
    }
}
.diseasetype-title{
    margin-bottom:20px;
    color:#df7f11;
    border-bottom:2px solid #d3a21c;
    text-align:left;
}
.title{
    color:#000000;
   
    text-align:left;
}
.disease-title{
    height:34px;
    width:1200px;
    color:#17d14f;
    border-bottom:1px solid #cccccc;
    text-align:left;
}
</style>
