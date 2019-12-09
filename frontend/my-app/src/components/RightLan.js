import React from "react";

// import { useState } from "react";
import TodoItem from "./ToDoItem";
import Addition from "./Addition";

export default props => {
  return (
    <div>
    <TodoItem  p="写个组件" size="25px"/>
    <div
      style={{
        color: "#000",
        //width: "90%",
        display: "flex",
        // height: "300PX",
        //alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-around",
        //flex:1
        alignItems: "stretch"
      }}
    >
      <TodoItem p="小步骤" i="1" size="20px"/>
      <TodoItem p="小步骤" i="1" size="20px"/>
      <TodoItem p="小步骤" i="1" size="20px"/>
    </div>
    <div
    style={{
      color: "#000",
      display: "flex",
      flexDirection: "column",
      //alignSelf:"flex-end"
    //  marginTop: "-50px"
    }}>
    <Addition p="添加任务"></Addition>
    </div>
  </div>
  );
};
