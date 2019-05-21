var models = require('../db/db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../db/sqlMap');

var conn = mysql.createConnection(models.mysql);

conn.connect();

var jsonWrite = function(res, ret) {
    if(typeof ret === 'undefined') {
        res.send('err');
    } else {
        console.log(ret);
        res.send(ret);
    }
}


// 增加用户接口
router.post('/addUser', (req, res) => {
    var sql = $sql.user.add;
    var params = req.body;
    console.log(params);
   
    conn.query(sql, [params.username, params.password, params.password2, params.email, params.phone], function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});
// 增加留言接口
router.post('/addWords', (req, res) => {
    var sql = $sql.words.add;
    var params = req.body;
    console.log(params);
   
    conn.query(sql, [params.username, params.words, params.likes, params.nolike, params.time], function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});
//查找用户接口
router.post('/login', (req, res) => {
    var sql_name = $sql.user.select_name;
    // var sql_password = $sql.user.select_password;
    var params = req.body;
    var keywords = JSON.parse(Object.keys(params)[0]);
    if (keywords.username) {
        sql_name += " where username ="+ keywords.username +"";
        console.log(sql_name);
    }    
    conn.query(sql_name, keywords.username, function(err, result) {
        if (err) {
            console.log(err);
        }
        // console.log(result);
        if (result[0] === undefined) {
            res.send('-1')   //查询不出username，data 返回-1
        } else {
            var resultArray = result[0];
            console.log(resultArray);
            console.log(keywords);
            if(resultArray.password === keywords.password) {
                jsonWrite(res, result);
            } else {
                res.send('0')   //username
            }
        }
    })
});

// 获取留言接口
router.get('/getWord', (req, res) => {
    var sql = $sql.words.select_all;
    // var sql_password = $sql.user.select_password;
    var params = req.body;
    console.log(params);
   
    conn.query(sql, params, function(err, result) {
        if (err) {
            console.log(err);
        }
        // console.log(result);
        if (result[0] === undefined) {
            res.send('-1')   //查询不出username，data 返回-1
        } else {
            jsonWrite(res, result);
        }
    })
});
//获取用户信息
router.get('/getUser', (req, res) => {
    var sql_name = $sql.user.select_name;
    // var sql_password = $sql.user.select_password;
    var params = req.body;
    console.log(params);
    if (params.username) {
        sql_name += " where username ="+ params.username +"";
    }
    conn.query(sql_name, params.username, function(err, result) {
        if (err) {
            console.log(err);
        }
        // console.log(result);
        if (result[0] === undefined) {
            res.send('-1')   //查询不出username，data 返回-1
        } else {
            jsonWrite(res, result);
        }
    })
});

//更新用户信息
router.post('/updateUser', (req, res) => {
    var sql_update = $sql.user.update_user;
    var params = req.body;
    console.log(params);
    if (params.username) {
        sql_update +=  " password = " + params.password +
                        ",password2 = " + params.password2 +
                        ",email = '" + params.email +
                        "',phone = " + params.phone +
                        " where username ="+ params.username + "";
    }    
    conn.query(sql_update, params.username, function(err, result) {
        if (err) {
            console.log(err);
        }
        console.log(result);
        if (result.affectedRows === undefined) {
            res.send('更新失败，请联系管理员')   //查询不出username，data 返回-1
        } else {
            res.send('ok'); 
        }
    })
});

//更改密码
router.post('/modifyPwd', (req, res) => {
    var sql_modify = $sql.user.update_user;
    var params = req.body;
    console.log(params);
    if (params.username) {
        sql_modify +=  " password = " + params.password +
                        ",password2 = " + params.password2 +
                        " where username ="+ params.username + "";
    }
    conn.query(sql_modify, params.username, function(err, result) {
        if (err) {
            console.log(err);
        }
        // console.log(result);
        if (result.affectedRows === undefined) {
            res.send('修改密码失败，请联系管理员')   //查询不出username，data 返回-1
        } else {
            res.send('ok'); 
        }
    })
});
// 增加点赞
router.post('/likes', (req, res) => {
    var sql = $sql.words.likecount;
    var params = req.body;
    if (params.username) {
        sql+=  " where username ="+ params.username + "";
    }
    conn.query(sql, params.username, function(err, result) {
        if (err) {
            console.log(err);
        }
        // console.log(result);
        if (result.affectedRows === undefined) {
            res.send('修改密码失败，请联系管理员')   //查询不出username，data 返回-1
        } else {
            res.send('ok'); 
        }
    })
});



module.exports = router;
