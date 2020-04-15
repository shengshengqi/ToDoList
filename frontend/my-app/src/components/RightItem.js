import React from "react";

import { useState, useEffect } from "react";
import "./RightItem.css";

import IconElement from "./IconElement/index";
import { reTaskName,reStepName} from "../actions";
// css bem 命名规范
export default props => {
  const [name, setName] = useState(props.p);
  const [iconDone, setIconDone] = useState(props.status === 1);
  useEffect(() => {
    setIconDone(props.status === 1)
    setName(props.p)
  }, [props.status, props.p]);

  function change(e) {
    // console.log("eeee",e.target.value
    setName(e.target.value)
  }

  return (
    <div className="flex_item_r" >
      <IconElement
        type={iconDone ? "nike" : null}
        size={20}
        style={{
          marginLeft: "10px",
          verticalAlign: "top",
        }}
        onClick={() => {
          if (props.status !== 1) {
            props.finish(props.id, () => {
              setIconDone(!iconDone);
            });
          } else {
            props.cancel(props.id, () => {
              setIconDone(!iconDone);
            });
            console.log(props.id);
          }
          props.ifupdate(true);
        }}
      />
      <div className="all_text">
        <input type="text" value={name} style={{
          border: 0,
          fontSize: props.size,
          backgroundColor: "transparent",
        }}
          onChange={change.bind(this)}
          onKeyDown={(e) => {
            if(e.keyCode === 13){
              if(props.size=="25px"){
                reTaskName((props.id), {
                  name: name
                })
              }else{
                reStepName((props.id),{
                  name:name
                })
              }
            }
          }}
        ></input>
      </div>
    </div>
  );
};
