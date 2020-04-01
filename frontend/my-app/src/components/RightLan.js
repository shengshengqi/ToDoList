import React from "react";
import { useRef, useState, useEffect} from "react";

// import { useState } from "react";
import RightItem from "./RightItem";
import Addition from "./AdditionStep";
import { addStep, finishStep, cancelStep, getStep } from "../actions";

export default props => {
  const additionElement = useRef();
  const [stepList, setStepList] = useState([]);
  // const [taskId, setTaskId] = useState(null);
  const handleAdd = stepName => {
    addStep(props.taskId,{
      name: stepName
    }).then(({ status }) => {
      if (status === 1) {
        // 重置Add组件
        additionElement.current.reset();
        freshStep(props.taskId);
      }
    });
  };

  const freshStep = taskId => {
    getStep({taskId: props.taskId}).then(({data: stepListData})=>
    {
        setStepList(stepListData||[])
    })
  }

  // useCallback(freshStep(props.taskId),[props.taskId])
  // freshStep(props.taskId);
  useEffect(() => {
    freshStep(props.taskId)
    // eslint-disable-next-line
  },[props.taskId]);

  return (
    <div>
    <RightItem  p="写个组件" size="25px"/>
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
      {stepList&&stepList.map(step =>(
      <RightItem 
      p={step.name} 
      key={step.stepId}
      id={step.stepId}
      fontColor={props.fontColor}
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
      }}/>
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
    <Addition p="下一步" ref={additionElement} onAdd={handleAdd}/>
    </div>
  </div>
  );
};
