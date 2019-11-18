import React from "react";

import Title from "./Title";
import TodoItem from "./ToDoItem2";
import Addition from "./Addition";

export default props => {
  return (
    <div>
      <Title item="sun" name="我的一天" />
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
        //border:"1px solid black",
        backgroundColor: "#a00 !important",
        display: "flex",
        flexDirection: "column",
        marginLeft: "30px",
        marginRight: "30px",
        alignSelf:"flex-end",
        //margintop: "500px"
      }}>
      <Addition p="添加任务"></Addition>
      </div>
    </div>
  );
};
