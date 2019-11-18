var express = require('express');
var router = express.Router();
var connection = require('../conf/mysql.js');
//新建子任务
router.post('/:id/task', function (req, res) {
    var taskId = req.params.id;
    var name = req.body.name;
    var userId = req.body.userId;
    console.log('任务：' + name);
    var sql = `select * from task where taskId="${taskId}"`;//筛选用户
    connection.query(sql, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            if (result.length>0 && result[0].userId == userId) {
                var sql = `insert into task(name,subId) values("${name}","${taskId}") `;//筛选TaskId
                connection.query(sql, function (err, result) {
                    if (err) {
                        console.log(err);
                        res.send({
                            msg: '添加子任务失败'
                        })
                    } else {
                        console.log(result);
                        if (result.affectedRows > 0) {
                            res.send({
                                status: 1,
                                msg: "添加子任务成功",
                                subtaskId: result.insertId
                            })
                        } else {
                            res.send({
                                status: -1,
                                msg: "添加子任务失败",
                            })
                        }
                    }
                })
            }else{
                res.status(401).send({
                    status:-1,
                    msg:"任务不存在"
                })
            }
        }
    })

})
//删除子任务
router.delete('/:id/off', function (req, res) {
    var taskId = req.body.taskId;
    var userId = req.body.userId;
    var subtaskId=req.params.id;
    console.log('任务：' + subtaskId);
    var sql = `delete from task where taskId="${subtaskId}" and subId="${taskId}"`;
    connection.query(sql, function (err, result) {
        if (err) {
            console.log(err);
            res.send({
                msg: "删除任务失败"
            })
        } else {
            console.log(result);
            if (result.affectedRows > 0) {
                res.send({
                    status: 1,
                    msg: "删除成功",
                })
            } else {
                res.status(400).send({
                    status: -1,
                    msg: "该任务不存在",
                })
            }
        }
    })
})
//完成子任务
router.put('/:id/confirm', function (req, res) {
    var subtaskId=req.params.id
    var taskId = req.body.taskId;
    var userId = req.body.userId;
    console.log('任务：' + taskId);
    //userId的验证问题
    var sql = `update task set status=1 where taskId="${subtaskId}" and subId="${taskId}"`;
    connection.query(sql, function (err, result) {
        if (err) {
            console.log(err);
            res.send({
                msg: "完成任务失败"
            })
        } else {
            console.log(result);
            if (result.affectedRows > 0) {
                res.send({
                    status: 1,
                    msg: "完成任务成功",
                })
            } else {
                res.status(400).send({
                    status: -1,
                    msg: "该任务不存在",
                })
            }
        }
    })
})
//取消完成子任务
router.put('/:id/cancel', function (req, res) {
    var subtaskId=req.params.id;
    var taskId = req.body.taskId;
    var userId = req.body.userId;
    console.log('任务：' + taskId);
    var sql = `update task set status=0 where subId="${taskId}" and taskId="${subtaskId}"`;
    connection.query(sql, function (err, result) {
        if (err) {
            console.log(err);
            res.send({
                msg: "取消完成任务失败"
            })
        } else {
            console.log(result);
            if (result.affectedRows > 0) {
                res.send({
                    status: 1,
                    msg: "取消完成任务成功",
                })
            } else {
                res.status(400).send({
                    status: -1,
                    msg: "该任务不存在",
                })
            }
        }
    })
})
//获取子任务
router.get('/list', function (req, res) {
    var userId = req.body.userId;
    var taskId=req.body.taskId;
    console.log('任务：' + userId);
    var sql = `select * from task where subId="${taskId}"`;
    connection.query(sql, function (err, result) {
        if (err) {
            console.log(err);
            res.send({
                msg: "获取任务失败"
            })
        } else {
            if (result.length > 0) {
                var datas = [{}];
                console.log(result.length);
                console.log(result[0].taskId);
                res.send({
                    status: 1,
                    data: result
                })
            }else{
                res.send({
                    status: 1,
                    data:[]
                })
            }

        }
    })
})
module.exports = router;