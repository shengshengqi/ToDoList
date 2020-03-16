import React from "react";

import "./LeftItem.css";

import IconElement from "./IconElement/index";

// css bem 命名规范
export default props => {
  return (
    <div className="left_item" onClick={props.onClick}>
      <IconElement
        type={props.item}
        size={30}
        color={props.fontColor}
        style={{
          borderColor: props.fontColor,
          border: "none"
        }}
      />

      <p
        className="text"
        style={{
          color: props.fontColor
        }}
      >
        {props.name}
      </p>
      <p
        className="text2"
        style={{
          color: props.fontColor
        }}
      >
        {props.number}
      </p>
    </div>
  );
};
