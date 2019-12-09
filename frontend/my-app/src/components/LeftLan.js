import React from "react";

// import { useState } from "react";
import LeftItem from "./LeftItem";
import LoginItem from "./Login";
const emptyCallback = () => { }
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
        flex: 1
      }}>
        To Do List
      </p>

      <LoginItem username="shengshengqi" />
      {/* 渲染元素 */}
      {props.columns.map(
        column =>
          <LeftItem
            {...column}
            key={column.number}
            onClick={() => {
              const callback = props.update || emptyCallback
              callback(column)
            }}
          />
      )}
    </div>
  );
};
