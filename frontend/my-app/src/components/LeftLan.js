import React from "react";

import { useState,useEffect } from "react";
import LeftItem from "./LeftItem";
import UserItem from "./UserItem";
import Setting from "./Setting";
const emptyCallback = () => { }
export default props => {
  const [columns, setColumns] = useState([])
  const [openSetting, setOpenSetting] = useState(false);
  useEffect(()=>{
    setColumns(props.columns)
  }, [props.columns])

  return (
    <div
      style={{
        color: props.fontColor,
        //width: "30%",
        display: "flex",
        // height: "300PX",
        flexDirection: "column",
        justifyContent: "space-around",
        //alignItems: "stretch"
        position: "relative"
      }}
    >
      <p
        style={{
          textAlign: "left",
          // marginLeft: "10px",
          fontSize: "15px",
          color: props.fontColor,
          flex: 1
        }}
      >
        To Do List
      </p>
      <UserItem
        username={props.user.userName || ""}
        onClick={() => {
          setOpenSetting(!openSetting);
        }}
        fontColor={props.fontColor}
      />
      {!openSetting ? null : <Setting getColor={props.getColor} />}
      {/* 渲染元素 */}
      {columns.map(column => (
        <LeftItem
          {...column}
          key={column.name}
          onClick={() => {
            const callback = props.update || emptyCallback;
            callback(column);
          }}
          fontColor={props.fontColor}
        />
      ))}
    </div>
  );
};
