var express = require('express');
 var router = express.Router();
 var connection = require('../conf/mysql.js');
 var uuid=require('node-uuid')
//登录代码
router.post('/login',function(req,res){
    var username=req.body.username;
    var password=req.body.password;
    console.log(username);
    var sql=`select * from user where username="${username}"`;
    connection.query(sql,function(err,result){
      if (err) {
        console.log(err);
          res.send({
            status:-1,
            data:"系统错误"
          })
      }else{ 
        if(result.length<1){
          res.status(401).send({
            data:"账号不存在",
            status:-1
          });
        }else{
          if(password==result[0].password){
            req.app.locals['userinfo']=username;
            res.send({
              status:1,
              data:{
                userId:result[0].userId,
                msg:"sign in successfully",
                avatar:''  
              }
            })
           }else{
              res.status(401).send({
              data:"密码错误",
              status:-1
            });
           }
        }
      
      }
    });
  }); 
//用户注册
router.post('/user',function(req,res){
    var username=req.body.username;
    var password=req.body.password;
    var email=req.body.email;
    console.log('账号：'+username);
    connection.query(`insert into user(username,password,email) values("${username}","${password}","${email}")`,function(err,result){
      if(err){
        res.status(401).send({
          status:-1,
          msg:'注册失败'
        })
      }else{
        res.send({
            status:1,
            data:{
              userId:result.insertId,
              msg:"register successfully",
              avatar:'',
            }
          })
        }
       
    }) 
 })



 module.exports = router;