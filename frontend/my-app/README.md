### 启动

- cd my-app
- npm start

### notes

> 2020 年 3 月 16 日，完成第一次修改，加入主题设置面板，全局控制各个模块的颜色

（1）设置卡片浮于左侧栏上方  
`.setting-box{position:absolute;}`  
`.leftLan{position:relative;}`  
将 setting 组件放入 leftLan，通过点击昵称栏触发

（2）设置卡片滑入效果

```
.setting-box{
  animation:show .5s;
  transform-origin: top;
}
@keyframes show{
  from{
    opacity: 0;
    transform: scaleY(0);
  }
  to{
    opacity: 1;
    transform: scaleY(1);
  }
}
```

（3）设置卡片阴影效果  
`.setting-box{box-shadow: 0px 0px 5px #888888;}`

（4）设置全局颜色控制

- 取消组件的背景颜色
- 组件子传父，从 setting 组件将设置的颜色传回 app.js
- 通过 app.js 传参控制其他组件的颜色

```
//app.js
  const getColor=(res)=>{
    if(res.target.value==="light"){
      setBackground("#fff")
      setFontColor("#000")
    }else if(res.target.value==="dark"){
      setBackground("#345");
      setFontColor("#fff");
    }
  }
  return(
    <div>
      <LeftLan
        fontColor={fontColor}
      />
    </div>
  )

//leftLan.js
 {!openSetting ? null : <Setting getColor={props.getColor} />}

//setting.js
  <input
    type="radio"
    value="light"
    name="theme"
    id="light"
    onChange={this.props.getColor}
  />
```
(5) 最终的效果
- 点击昵称打开，再次点击关闭
![settingBox](https://github.com/shengshengqi/ToDoList/blob/master/frontend/my-app/asset/settingBox.png)