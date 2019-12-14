import React from "react";

import { useState,useEffect } from "react";
import LeftItem from "./LeftItem";
import LoginItem from "./Login";
const emptyCallback = () => { }
export default props => {
  const [columns, setColumns] = useState([])
  useEffect(()=>{
    setColumns(props.columns)
  }, [props.columns])

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
      <LoginItem username={props.user.userName || ''} />
      {/* 渲染元素 */}
      {columns.map(
        column =>
          <LeftItem
            {...column}
            key={column.name}
            onClick={() => {
              const callback = props.update || emptyCallback
              callback(column)
            }}
          />
      )}
    </div>
  );
};
