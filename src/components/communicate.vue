<template>
<div class="communicate">
        <!--评论-->
    <div class="commentbox">
        <div class=" commemtlist ">
        <div class="wordsbox ">
                <el-input type="textarea" :rows="5" placeholder="请输入留言 " v-model="content"></el-input>
            
                <el-button type="primary" value="提交 " @click="subCommont()" >提问</el-button>
            </div>
        </div>
        
        <div class="commemtlist">
            <dl v-for="(value, index) in comments" :key="value.username" >
                <dt>
                    用户：<span>{{value.username}}</span>
                </dt>
                <dd class="commentwords "><i class="icon-style icon-file-alt "></i>{{value.words}}</dd>
                <dd class="btbar ">
                    <span class="like red "><i class="icon-style icon-thumbs-up "></i>点赞(<strong @click="like(index) ">{{value.likes}}</strong>)</span>
                    <span class="notlike red "><i class="icon-style icon-thumbs-down "></i>点踩(<strong @click="notlike(index) ">{{value.nolike}}</strong>)</span>
                    <span class="data red "><i class="icon-style icon-calendar "></i>时间<strong>{{format(value.time,'yyyy-MM-dd HH:mm:ss')}}</strong></span>
                </dd>
            </dl>
            
        </div>
    </div>
</div>
    
</template>

<script>
Date.prototype.format = function(fmt) {
        var o = {
            "M+": this.getMonth() + 1, //月份 
            "d+": this.getDate(), //日 
            "H+": this.getHours(), //小时 
            "m+": this.getMinutes(), //分 
            "s+": this.getSeconds(), //秒 
            //"q+": Math.floor((this.getMonth() + 3) / 3), //季度 
            //"S": this.getMilliseconds() //毫秒 
        };
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            }
        }
        return fmt;
}



export default {
    inject:['reload'],
    //创建vue实例
    data(){
        return{
        //原始用户评论信息
        username:'',
        password:'',
        username2:'',
        password2:'',
        content:'',
        comments:[],
        // comments: [{
        //         username: "张三",
        //         userimg: require("../assets/user/img_01.png"),
        //         words: "您好！老师：我想配点补肾的药泡酒。谢谢！",
        //         like: 87,
        //         nolike: 53,
        //         time: "2018-05-17 09:15:25"
        //     }, {
        //         username: "李四",
        //         userimg: require("../assets/user/img_02.png"),
        //         words: "体检报告中：两肺肺纹理增多、紊乱是什么情况，和抽烟有关系吗！",
        //         like: 23,
        //         nolike: 63,
        //         time: "2018-6-27 10:12:34"
        //     }, {
        //         username: "王五",
        //         userimg: require("../assets/user/img_03.png"),
        //         words: "风湿骨痛吃葡萄糖胺可以治疗吗？",
        //         like: 27,
        //         nolike: 33,
        //         time: "2018-07-02 03:26:54"
        //     },{
        //         username: "刘六",
        //         userimg: require("../assets/user/img_04.png"),
        //         words: "甲状腺左叶结节是什么情况",
        //         like: 103,
        //         nolike: 12,
        //         time: "2018-07-30 15:20:25"
        //     }, ],
        
        }
   
    },
     created:function(){ 
        this.getWords()
    },
    methods: {
        format(time, format) {
                var t = new Date(time);
                var tf = function (i) { return (i < 10 ? '0' : '') + i };
                return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
                    switch (a) {
                        case 'yyyy':
                            return tf(t.getFullYear());
                            break;
                        case 'MM':
                            return tf(t.getMonth() + 1);
                            break;
                        case 'mm':
                            return tf(t.getMinutes());
                            break;
                        case 'dd':
                            return tf(t.getDate());
                            break;
                        case 'HH':
                            return tf(t.getHours());
                            break;
                        case 'ss':
                            return tf(t.getSeconds());
                            break;
                    }
                })
            },

        //获取留言信息
        getWords(){
             const self = this;
             self.$http.get('/api/words/getWord',{}).then((response) => {
                 self.comments=[];
                 response.data.forEach(function(item,index){
                    self.comments.push({
                            'username':item.username,
                            'words':item.words,
                            'likes':item.likes,
                            'nolike':item.nolike,
                            'time':item.time
                    });
                });

            }).then((error) => {
                console.log(error);
            })
        },
        //点赞
        like(index) {
            // const self=this;
            // self.$http.post('/api/words/likes',sessionStorage.getItem('ms_username')).then(function(response) {
                
            //             self.reload();
            //         }).then(function(error) {
            //             console.log(error);
            //         })
            this.comments[index].likes+=1;   
        },
        //点踩
        notlike(index) {
            this.comments[index].nolike+=1;
        },
      
        //编辑用户心情
        editUserWords() {
            var wordsObj = $(".commentbox").find(".userword");
            var edit = wordsObj.attr("contenteditable"); //获取元素的H5可编辑属性

            if (edit == "false") {
                //打开可编辑功能
                wordsObj.attr("contenteditable", "true");
            } else {
                for (var i = 0, len = this.users.length; i < len; i++) {

                    //查找对应用户名
                    if (this.users[i].username === this.currentUser.username) {
                        //改变用户信息里面的words数据
                        this.currentUser.words = $(".commentbox").find(".userword").text();
                        this.users[i].words = this.currentUser.words;
                        //关闭可编辑功能
                        wordsObj.attr("contenteditable", "false");
                        this.$message.success("保存成功！");
                    }
                }
            }
        },
        //点击提交评论
        subCommont() {
             let username = sessionStorage.getItem('ms_username');
             if (!username) {
                this.$message.warning("登录之后才可以评论！");
                this.loginStatus = true;
            }
             else {
                if (this.content == "") {
                    this.$message.warning("请先填写评论内容！");
                } 
                else{
                    const self = this;
            
                var params = {
                     username: sessionStorage.getItem('ms_username'),
                     words: self.content,
                     likes:0,
                     nolike:0,
                     time: new Date().format("yyyy-MM-dd HH:mm:ss"),
                }
               console.log(JSON.stringify(params),111)
                self.$http.post('/api/words/addWords',params).then(function(response) {
                        self.$message.success('评论成功！')
                        self.reload();
                    }).then(function(error) {
                        console.log(error);
                    })
                } 

                // else {
                //     var obj = {}; //评论信息对象的容器
                //     obj.username = username;
                //     //obj.userimg = this.currentUser.userimg;
                //     obj.words = this.content;
                //     obj.like = 0;
                //     obj.nolike = 0;
                //     obj.time = new Date().format("yyyy-MM-dd hh:mm:ss");

                //     //将评论信息压入评论信息列表
                //     this.comments.push(obj);
                //     this.$message.success("评论成功！");
                //     this.content
                // }
            }
        }
    }

}
</script>

<style lang="scss" scoped>
body{
    width:1920px;
}
.communicate{
    width:1200px;
    margin:auto;
    height:100%;
    margin-top:20px;
    margin-bottom:20px;
}
.icon-style {
    margin-right: 5px;
    color: #999;
}
.loginbox {
    position: fixed;
    z-index: 99999;
    width: 1200px;
    height: 100%;
    background: rgba(0, 0, 0, .85);
.box {
    height: 300px;
    width: 300px;
    padding: 40px 20px 20px 20px;
    margin: 100px auto;
    background: #fff;


h3 {
    font-size: 16px;
    font-family: "微软雅黑";
    text-align: center;
}

 input {
    height: 40px;
    width: 100%;
    border: 1px solid red;
    margin: 10px 0;
    border-radius: 2px;
}

 input[type="button"] {
    background: red;
    color: #fff;
    font-family: "微软雅黑";
}
}
}

body .loginbox .box .blueBtn {
    background: #0089FF;
    border: 1px solid #0089FF;
}
.userbar {
    height: 200px;
    padding: 10px;
    text-align: center;
.userimg {
    height: 100px;
    width: 100px;
    margin-left:55px;
    border-radius: 50px;
}
.username {
    display: block;
    padding: 10px 0;
    font-size: 18px;
    color: red;
    font-weight: bolder;
}
}

.commentbox {
    position: relative;
    width: 1000px;
    padding: 20px 20px 30px 20px;
    background: #ecffe7;
    margin: 0 auto;
.loginout {
    display: block;
    color: blue;
    cursor: pointer;
}

.userword {
    outline: none;
}
}
.commemtlist {
    padding: 10px;
 dl {
    padding: 20px 0;
    border-bottom: 1px solid #D2D2D2;
    dt {
            float: left;
            text-align: center;
            margin-right: 15px;
        img {
            height: 50px;
            width: 50px;
            border-radius: 25px;
        }
    }
    dd {
            padding-bottom: 10px;
            text-align:left;
    }
    }

.btbar {
    span {
    margin-right: 15px;
    font-size: 10px;
}
.red strong {
    color: red;
    margin: 0 3px;
    font-weight: normal;
    cursor: pointer;
}
}

}
 .wordsbox  {
     .el-textarea{
         margin-bottom:20px;
         
     }
     .el-textarea__inner{
         border-color:#0089FF;
     }
    .el-button{
        float:right;
        span{
            font-size:16px;
            margin:0;
            color:#fff;
            
        }
    }
    span {
    font-size: 13px;
    margin-right: 15px;
    
    color: blue;
    cursor: pointer;
}
}
</style>
