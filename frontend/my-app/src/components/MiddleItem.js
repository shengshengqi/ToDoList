import React from "react";

import { useState, useEffect} from "react";
import "./MiddleItem.css";

import IconElement from "./IconElement/index";
import { getStep} from "../actions";
// css bem 命名规范
export default props => {
  const [iconDone, setIconDone] = useState(props.status === 1);
  const [iconStared, setIconStared] = useState(props.important === 1);
  const [current, setCurrent] = useState(0);
  const [total, setTotal] = useState(0);

  const getStepNum = (taskId)=>{
    getStep({ taskId: taskId }).then(({ data: stepListData }) => {
      setCurrent(((stepListData || []).filter(e => e.status === 1)).length)
      setTotal((stepListData || []).length)
      // console.log(stepListData)
    })
  }

  useEffect(() => {
    getStepNum(props.id);
  }, [props.id,props.fresh]);

  return (
    <div className="flex_item" style={{
      backgroundColor:props.background,
    }} onClick={props.onClick}>
      <IconElement
        type={iconDone ? "nike" : null}
        size={30}
        style={{
          borderColor: "#000",
          marginLeft: "20px"
        }}
        onClick={(e) => {
          if(e && e.stopPropagation){
            e.stopPropagation()
          }
          if (props.status !== 1) {
            props.finish(props.id, () => {
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
        <p className="step_text">{props.p}</p>
          <p
            //if(props.steps)
            style={{
              fontSize: 11
              //color:"#ffffff"
            }}
          >
            第 {current} 步，共 {total} 步
          </p>
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
        onClick={(e) => {
          if(e && e.stopPropagation){
            e.stopPropagation()
          }
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
