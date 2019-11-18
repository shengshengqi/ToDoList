import React from "react";

import { useState } from "react";
import "./todoItem2.css";

import IconElement from "./IconElement/index";

// css bem 命名规范
export default props => {
  const [iconDone, setIconDone] = useState(false);
  const [iconStared, setIconStared] = useState(false);
  return (
    <div className="flex_item">
      <IconElement
        type={iconDone ? "nike" : null}
        size={30}
        style={{
          borderColor: "#fff",
          marginLeft: "20px"
        }}
        onClick={() => {
          console.log("click");
          setIconDone(!iconDone);
        }}
      />

      <div className="all_text">
        <input className="text1" type="text" defaultValue={props.p}></input>
          <p
            //if(props.steps)
            style={{
              fontSize: 16
            }}
          >
            第 {props.steps.current} 步，共 {props.steps.total} 步
          </p>
      </div>

      <IconElement
        type={props.i ? "null":"star2"}
        size={25}
        style={{
          border: "none",
          marginRight: "20px",
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
