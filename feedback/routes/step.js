var express = require('express');
var router = express.Router();
var connection = require('../conf/mysql.js');
//新建子任务
router.post('/:id/step', function (req, res) {
    var taskId = req.params.id;
    var name = req.body.name;
    console.log('子任务：' + name);
    var sql = `insert into step(name,taskId) values("${name}","${taskId}") `
    connection.query(sql, function (err, result) {
        if (err) {
            console.log(err);
            res.send({
                status: -1,
                msg: "添加子任务失败",
            })
        } else {
            res.send({
                status: 1,
                msg: "添加子任务成功",
                stepId: result.insertId
            })
        }
    })
})

//删除子任务
router.delete('/:id/off', function (req, res) {
    var taskId = req.body.taskId;
    var stepId = req.params.id;
    console.log('任务：' + stepId);
    var sql = `delete from Step where taskId="${taskId}" and StepId="${stepId}"`;
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
router.put('/:id/finish', function (req, res) {
    var stepId = req.params.id
    console.log('任务：' + taskId);
    var sql = `update step set status=1 where StepId="${stepId}"`;
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
    var stepId = req.params.id;
    console.log('任务：' + taskId);
    var sql = `update task set status=0 where StepId="${stepId}"`;
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
    var taskId = req.query.taskId;
    console.log('任务：' + taskId);
    var sql = `select * from step where taskId="${taskId}"`;
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
            } else {
                res.send({
                    status: 1,
                    data: []
                })
            }

        }
    })
})
module.exports = router;