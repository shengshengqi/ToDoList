import React from "react";

import { useState } from "react";
import LeftItem from "./LeftItem";
import LoginItem from "./Login";

export default props => {
  return (
    <div
      style={{
        color: "#000",
        //width: "30%",
        display: "flex",
        // height: "300PX",
        flexDirection: "column",
        justifyContent: "space-around"
        //alignItems: "stretch"
      }}
    >
        <p style={{
            textAlign: "left",
           // marginLeft: "10px",
            fontSize: "15px",
            color: "#ffffff",
            flex:1
        }}>To Do List</p>
      <LoginItem username="shengshengqi" />
      <LeftItem item="sun" name="我的一天" number="3" />
      <LeftItem item="star" name="重要" number="7" />
      <LeftItem item="house" name="任务" number="11" />
    </div>
  );
};
