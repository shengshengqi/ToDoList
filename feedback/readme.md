启动
- npm run dev
- localhost:3000
### API文档
1. 用户登录(已经测试过了）
   `POST /account/login`

   ```
    params:
   {
   "username":"sqy",
   "password":"123456"
   }
   返回:
   200
   {
   status:1,
   data:{
   	userId:4,
   	msg:"sign in successfully",
   	avatar:""
   }
   }
   401
   {
   data:账号不存在/密码错误（会根据数据库情况判断）
   status:-1
   }
   
   ```

2. 用户注册(测试过了）
   `POST /account/user`
   ```
   params:
   {
   	"username":"myn",
   	"password":"123456",
   	"email":"myn@163.com"
   }
   返回:
   {
       "status": 1,
       "data": {
           "userId": 11,
           "msg": "register successfully",
           "avatar": ""
       }
   }
   用户名重复或者邮箱重复
   {
       "status": -1,
       "msg": "注册失败"
   }
   ```
```
3. 新建任务(测试完成）
  `POST /task/task`
  params:
  {
  "name":"完成作业",
  "oneday":1,
  "userId":1
  }
  返回
  {
   "status": 1,
   "msg": "添加成功",
   "taskId": 12
  }

4. 完成任务
  `PUT /task/`{taskId}`/confirm`
  params:
  {
   "userId":1
  }
  返回:
  {
   "status": 1,
   "msg": "完成任务成功"
  }

5. 新建子任务（测试完成)
  `POST /subtask/`{taskId}`/task`
  params:
  {
   "userId":1,
   "name":"创新实践1"
  }
  返回：
  {
   "status": 1,
   "msg": "添加子任务成功",
   "subtaskId": 13
  }

6. 完成子任务（测试完成）
  ` POST /subtask/`{subtaskId}`/confirm`
  params:
  {
   "userId":1,
   "taskId":12
  }
  返回：
  {
   "status": 1,
   "msg": "完成任务成功"
  }

7. 取消完成子任务（测试完成）
  ` POST /subtask/`{subtaskId}`/concel`
  params:
  {
   "userId":1,
   "taskId":12
  }
  返回：
  {
   "status": 1,
   "msg": "取消完成任务成功"
  }

8. 删除子任务（测试完成）
  ` POST /subtask/`{subtaskId}`/off`
  params:
  {
   "userId":1,
   "taskId":12
  }
  返回：
  {
   "status": 1,
   "msg": "删除成功"
  }

9. 取消完成任务
  ` PUT /task/id/cancel`
  params:
  {
   "userId":1
  }
  返回：
  {
   "status": 1,
   "msg": "取消完成任务成功"
  }

10. 把任务添加到我的一天
    ` POST /task/id/oneday`
    params：
    {
     "userId":1
    }
    返回：
    {
    "status": 1,
    "msg": "添加到我的一天成功"
    }

11. 取消添加到我的一天
    ` POST /task/id/offoneday`
    params：
    {
     "userId":1
    }
    返回：
    {
    "status": 1,
    "msg": "从我的一天成功移除成功"
    }

12. 收藏任务
    ` POST /task/id/importance`
    params：
    {
     "userId":1
    }
    返回：
    {
    "status": 1,
    "msg": "标记为重要"
    }

13. 取消收藏任务
    ` POST /task/id/unimportance`
    params：
    {
     "userId":1
    }
    返回：
    {
    "status": 1,
    "msg": "取消标记为重要"
    }

14. 获取所有任务
    ` GET /task/list`
    params:
    {
     "userId":1
    }
    返回:
    {
    "status": 1,
    "data": [
        {
            "name": "test",
            "taskId": 5,
            "oneday": 1,
            "important": 0,
            "userId": 1,
            "taskIndex": null,
            "onedayIndex": null,
            "importantIndex": null,
            "status": 0,
            "subId": null
        },
        {
            "name": "完成作业",
            "taskId": 12,
            "oneday": 0,
            "important": 0,
            "userId": 1,
            "taskIndex": null,
            "onedayIndex": null,
            "importantIndex": null,
            "status": 0,
            "subId": null
        }
    ]
    }

15. 获取子任务
    ` GET /subtask/list`
    params:
    {
     "userId":1,
     "taskId":5
    }
    返回：
    {
    "status": 1,
    "data": [
        {
            "name": "testSub",
            "taskId": 6,
            "oneday": 0,
            "important": 0,
            "userId": null,
            "taskIndex": null,
            "onedayIndex": null,
            "importantIndex": null,
            "status": 0,
            "subId": 5
        },
        {
            "name": "testsub",
            "taskId": 8,
            "oneday": 0,
            "important": 0,
            "userId": null,
            "taskIndex": null,
            "onedayIndex": null,
            "importantIndex": null,
            "status": 0,
            "subId": 5
        },
        {
            "name": "testsub",
            "taskId": 9,
            "oneday": 0,
            "important": 0,
            "userId": null,
            "taskIndex": null,
            "onedayIndex": null,
            "importantIndex": null,
            "status": 0,
            "subId": 5
        }
    ]
    }

```