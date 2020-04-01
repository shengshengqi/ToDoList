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
- 组件<strong>子传父</strong>，从 setting 组件将设置的颜色传回 app.js
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

>2020 年 3 月 29 日 完成第二次修改 加入选择阴影效果、右侧栏

（1）flex不能使用绝对定位
  ```
  <div style={{
    display: "flex",
    flexDirection: "column",
    height:"100%"
  }}>
    <div style={{
      height:"90%"
      overflow:"auto"
    }}>
    </div>
    <div style={{
      height:"10%"
    }}>
    </div>
  </div>
  ```

  - (此处感谢阿毛)

>2020 年 4 月 

（1）
  点击子级div触发父级div的onclick事件问题，我们的实际需求是只想要触发点击的那个div上绑定的事件，即如何阻止事件冒泡？  
  ```
  if(e && e.stopPropagation){
      e.stopPropagation()
  }
  ```
  - [JS阻止事件冒泡和默认事件](https://blog.csdn.net/xiasohuai/article/details/86496745?tdsourcetag=s_pctim_aiomsg)    
  - (阿毛真是个小天才啊，差点我就要做出叠加透明图层进行裁剪的蠢事了)
