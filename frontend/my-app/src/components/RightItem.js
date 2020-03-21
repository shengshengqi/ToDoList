import React from "react";

import { useState } from "react";
import "./RightItem.css";

import IconElement from "./IconElement/index";

// css bem 命名规范
export default props => {
  const [iconDone, setIconDone] = useState(false);
  const [iconStared, setIconStared] = useState(false);
  return (
    <div className="flex_item1">
      <IconElement
        type={iconDone ? "nike" : null}
        size={props.size}
        style={{
          borderColor: "#fff",
          marginLeft: "10px"
        }}
        onClick={() => {
          console.log("click");
          setIconDone(!iconDone);
        }}
      />

      <div className="all_text1">
        <input  type="text" defaultValue={props.p} style={{
          backgroundColor: "#a1a7b4",
          border: 0,
          fontSize:props.size,
        }}></input>
      </div>

      <IconElement
        type={props.i ? "null":"star2"}
        size={props.size}
        style={{
          border: "none",
          marginRight: "10px",
          ...(iconStared
            ? {
                svgBackgroundColor: "#abcdab"
              }
            : {})
        }}
        onClick={() => {
          console.log("click");
          setIconStared(!iconStared);
        }}
      />
    </div>
  );
};
