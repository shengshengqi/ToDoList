import React from "react";

import { useState } from "react";
import "./todoItem2.css";

import IconElement from "./IconElement/index";

// css bem 命名规范
export default props => {
  const [iconDone, setIconDone] = useState(props.status === 1);
  const [iconStared, setIconStared] = useState(props.important === 1);
  return (
    <div className="flex_item" style={{
      backgroundColor:props.background,
    }}>
      <IconElement
        type={iconDone ? "nike" : null}
        size={30}
        style={{
          borderColor: "#000",
          marginLeft: "20px"
        }}
        onClick={() => {
          if (props.status !== 1) {
            props.confirm(props.id, () => {
              setIconDone(!iconDone);
            });
          } else {
            props.cancel(props.id, () => {
              setIconDone(!iconDone);
            });
          }
        }}
      />
      <div className="all_text">
        <input className="text1" type="text" defaultValue={props.p} style={{
          backgroundColor:props.background,
        }}></input>
        {props.steps && (
          <p
            //if(props.steps)
            style={{
              fontSize: 16
              //color:"#ffffff"
            }}
          >
            第 {props.steps.current} 步，共 {props.steps.total} 步
          </p>
        )}
      </div>

      <IconElement
        type={props.i ? "null" : "star2"}
        size={25}
        style={{
          border: "none",
          marginRight: "20px",
          ...(iconStared
            ? {
                svgBackgroundColor: "#FFCC33"
              }
            : {})
        }}
        onClick={() => {
          if (props.important !== 1) {
            props.star(props.id, () => {
              setIconStared(!iconStared);
            });
          } else {
            props.unstar(props.id, () => {
              setIconStared(!iconStared);
            });
          }
        }}
      />
    </div>
  );
};
