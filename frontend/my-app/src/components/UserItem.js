import React from "react";

import IconElement from "./IconElement/index";
// css bem 命名规范
export default props => {
  return (
    <div
      onClick={props.onClick}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        // backgroundColor: "#345",
        padding: "1em"
      }}
    >
      <IconElement
        type="circle"
        size={50}
        style={{
          borderColor: props.fontColor,
          // marginLeft: "10px",
          border: "none"
        }}
      />

      <p
        style={{
          textAlign: "left",
          marginLeft: "10px",
          fontSize: "20px",
          color: props.fontColor,
          flex: 1
        }}
      >
        {props.username}
      </p>
    </div>
  );
};
