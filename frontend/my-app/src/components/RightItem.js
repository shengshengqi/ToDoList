import React from "react";

import { useState } from "react";
import "./RightItem.css";

import IconElement from "./IconElement/index";

// css bem 命名规范
export default props => {
  const [iconDone, setIconDone] = useState(false);
  return (
    <div className="flex_item_r" >
      <IconElement
        type={iconDone ? "nike" : null}
        size={props.size}
        style={{
          marginLeft: "10px",
          verticalAlign: "top",
        }}
        onClick={() => {
          console.log("click");
          setIconDone(!iconDone);
        }}
      />
        <div className="all_text">
        <input  type="text" defaultValue={props.p} style={{
          border: 0,
          fontSize:props.size,
          backgroundColor:"transparent",
          // width:"200px",
          // display:"block",
          // flex:1,
        }}></input>
      </div>
      </div>
  );
};
