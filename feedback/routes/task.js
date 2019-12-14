var express = require('express');
var router = express.Router();
var connection = require('../conf/mysql.js');
//新建任务
router.post('/task', function (req, res) {
    var name = req.body.name;
    var oneday = req.body.oneday;
    var userId = req.body.userId;
    console.log('任务：' + name);
    var sql = `insert into task(name,oneday,userId) values("${name}","${oneday}","${userId}")`;
    connection.query(sql, function (err, result) {
        if (err) {
            console.log(err);
            res.send({
                status:-1,
                msg: '添加任务失败'
            })
        } else {
            res.send({
                status: 1,
                msg: "添加成功",
                taskId: result.insertId
            })
        }
    })
})
//删除任务
router.delete('/:id', function (req, res) {
    var taskId = req.params.id;
    var userId = req.body.userId;
    console.log('任务：' + taskId);
    var sql = `delete from task where taskId="${taskId}" and userId="${userId}"`;
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
//完成任务
router.put('/:id/confirm', function (req, res) {
    var taskId = req.params.id;
    var userId = req.body.userId;
    console.log('任务：' + taskId);
    var sql = `update task set status=1 where taskId="${taskId}" and userId="${userId}"`;
    connection.query(sql, function (err, result) {
        if (err) {
            console.log(err);
            res.send({
                msg: "完成任务失败"
            })
        } else {
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
//取消完成任务
router.put('/:id/cancel', function (req, res) {
    var taskId = req.params.id;
    var userId = req.body.userId;
    console.log('任务：' + taskId);
    var sql = `update task set status=0 where taskId="${taskId}" and userId="${userId}"`;
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
//将任务添加到我的一天
router.post('/:id/oneday', function (req, res) {
    var taskId = req.params.id;
    var userId = req.body.userId;
    console.log('任务：' + taskId);
    var sql = `update task set oneday=1 where taskId="${taskId}" and userId="${userId}"`;
    connection.query(sql, function (err, result) {
        if (err) {
            console.log(err);
            res.send({
                msg: "添加到我的一天失败"
            })
        } else {
            console.log(result);
            if (result.affectedRows > 0) {
                res.send({
                    status: 1,
                    msg: "添加到我的一天成功",
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
//将任务从我的一天中移除
router.post('/:id/offoneday', function (req, res) {
    var taskId = req.params.id;
    var userId = req.body.userId;
    console.log('任务：' + taskId);
    var sql = `update task set oneday=0 where taskId="${taskId}" and userId="${userId}"`;
    connection.query(sql, function (err, result) {
        if (err) {
            console.log(err);
            res.send({
                msg: "移除我的一天失败"
            })
        } else {
            console.log(result);
            if (result.affectedRows > 0) {
                res.send({
                    status: 1,
                    msg: "从我的一天成功移除成功",
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
//收藏任务
router.post('/:id/importance', function (req, res) {
    var taskId = req.params.id;
    var userId = req.body.userId;
    console.log('任务：' + taskId);
    var sql = `update task set important=1 where taskId="${taskId}" and userId="${userId}"`;
    connection.query(sql, function (err, result) {
        if (err) {
            console.log(err);
            res.send({
                msg: "收藏失败"
            })
        } else {
            console.log(result);
            if (result.affectedRows > 0) {
                res.send({
                    status: 1,
                    msg: "标记为重要",
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
//取消收藏任务
router.post('/:id/unimportance', function (req, res) {
    var taskId = req.params.id;
    var userId = req.body.userId;
    console.log('任务：' + taskId);
    var sql = `update task set important=0 where taskId="${taskId}" and userId="${userId}"`;
    connection.query(sql, function (err, result) {
        if (err) {
            console.log(err);
            res.send({
                msg: "取消收藏失败"
            })
        } else {
            console.log(result);
            if (result.affectedRows > 0) {
                res.send({
                    status: 1,
                    msg: "取消标记为重要",
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
//获取所有任务
router.get('/list', function (req, res) {
    var userId = req.query.userId;
    console.log('任务：' + userId);
    var sql = `select * from task where userId="${userId}"`;
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