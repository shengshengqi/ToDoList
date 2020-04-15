import React from "react";
import { useRef} from "react";

// import { useState } from "react";
import RightItem from "./RightItem";
import Addition from "./AdditionStep";
import {
  addStep, finishStep, cancelStep,finishTask, cancelTask
} from "../actions";

export default props => {
  const additionElement = useRef();
  const handleAdd = stepName => {
    addStep(props.task.id, {
      name: stepName
    }).then(({ status }) => {
      if (status === 1) {
        // 重置Add组件
        additionElement.current.reset();
        // freshStep(props.taskId);
        // 向父级通知更新
        props.update !== undefined && props.update();
      }
    });
  };
  // console.log("rl",props.task)
  // useEffect(() => {
  //   freshStep(props.taskId)
  // }, [props.taskId]);
  const ifupdate=(res)=>{
    if(res){
      props.update();
    }
  }
  return (
    <div>
      <RightItem p={props.task.name}
        size="25px"
        id={props.task.id}
        status={props.task.status}
        fontColor={props.fontColor}
        finish={(payload, callback) => {
          finishTask(payload, {
          }).then(({ status }) => {
            status === 1 && callback();
          });
        }}
        cancel={(payload, callback) => {
          cancelTask(payload, {
          }).then(({ status }) => {
            status === 1 && callback();
          });
        }}
      />
      <div
        style={{
          color: "#000",
          //width: "90%",
          display: "flex",
          // height: "300PX",
          //alignItems: "center",
          flexDirection: "column",
          justifyContent: "space-around",
          //flex:1
          alignItems: "stretch"
        }}
      >
        {props.stepList && props.stepList.map(step => (
          <RightItem
            p={step.name}
            size="22px"
            key={step.stepId}
            id={step.stepId}
            status={step.status}
            fontColor={props.fontColor}
            ifupdate={ifupdate}
            finish={(payload, callback) => {
              finishStep(payload, {
                taskId: props.taskId
              }).then(({ status }) => {
                status === 1 && callback();
              });
            }}
            cancel={(payload, callback) => {
              cancelStep(payload, {
                taskId: props.taskId
              }).then(({ status }) => {
                status === 1 && callback();
              });
            }} />
        ))
        }
      </div>
      <div
        style={{
          color: "#000",
          display: "flex",
          flexDirection: "column",
          // position: "absolute",
          // bottom:"0"
          //alignSelf:"flex-end"
          //  marginTop: "-50px"
        }}>
        <Addition p="下一步" ref={additionElement} onAdd={handleAdd} />
      </div>
    </div>
  );
};
