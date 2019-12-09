import React from "react";
import {useRef} from 'react';

import Title from "./Title";
import TodoItem from "./ToDoItem2";
import Addition from "./Addition";

import addTask from '../actions/addTask'

export default props => {
  const additionElement = useRef()
  const handleAdd = (taskName) => {
    // 正式使用
    // addTask({
    //   name: taskName,
    //   oneday: '1', //#TODO: 添加oneday
    //   userId: '1'
    // }).then(()=>{
    //   additionElement.reset()
    // })
    console.log(taskName, addTask)
    // 重置Add组件
    additionElement.current.reset()
    // 向父级通知更新
    props.update !== undefined && props.update()
  }

  return (
    <div>
      <Title {...props.data} />
      <div
        style={{
          color: "#000",
          //width: "90%",
          display: "flex",
          // height: "300PX",
          //alignItems: "center",
          flexDirection: "column",
          justifyContent: "space-around",
          marginLeft: "30px",
          marginRight: "30px",
         // alignSelf:"flex-start",
          flex:1
          //alignItems: "stretch"
        }}
      >
        <TodoItem p="写个组件" steps={{ current: 1, total: 3 }} />
        <TodoItem p="写个组件" steps={{ current: 1, total: 3 }} />
        <TodoItem p="写个组件" steps={{ current: 1, total: 3 }} />
      </div>
      <div
      className="newtask"
      style={{
        backgroundColor: "#a00 !important",
        display: "flex",
        flexDirection: "column",
        marginLeft: "30px",
        marginRight: "30px",
        alignSelf:"flex-end",
      }}>
      <Addition p="添加任务" ref={additionElement} onAdd={handleAdd}></Addition>
      </div>
    </div>
  );
};
