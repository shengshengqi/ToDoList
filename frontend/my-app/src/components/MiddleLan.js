import React from "react";
import { useRef, useState, useEffect } from "react";

import Title from "./Title";
import MiddleItem from "./MiddleItem";
import Addition from "./Addition";
import RightLan from "./RightLan";

import { addTask, confirmTask, cancelTask, starTask, unStarTask } from "../actions";
export default props => {
  const [taskList, setTaskList] = useState([]);
  const [rightLan, setRightLan] = useState(false);
  const additionElement = useRef();
  const handleAdd = taskName => {
    addTask({
      oneday: props.data.oneday ? 1 : 0,
      userId: props.user.userId,
      name: taskName
    }).then(({ status }) => {
      if (status === 1) {
        // 重置Add组件
        additionElement.current.reset();
        // 向父级通知更新
        props.update !== undefined && props.update();
      }
    });
  };

  useEffect(() => {
    if(props.data.important) {
      setTaskList(props.taskList.filter(task => task.important === 1));
      return  
    } else if(props.data.oneday) {
      setTaskList(props.taskList.filter(task => task.oneday === 1))
      return
    } else {
      setTaskList(props.taskList)
    }
    
  }, [props.taskList, props.data]);

  return (
    <div style={{
      height:"100vh"
    }}>
      <Title {...props.data} />
      <div
        style={{
          color: "#000",
          //width: "90%",
          display: "flex",
          // height: "300PX",
          //alignItems: "center",
          flexDirection: "column",
          justifyContent: "space-around",
          marginLeft: "30px",
          marginRight: "30px",
          // alignSelf:"flex-start",
          flex: 1
          //alignItems: "stretch"
        }}
      >
        {taskList.map(task => (
          <MiddleItem
            p={task.name}
            key={task.taskId}
            id={task.taskId}
            status={task.status}
            important={task.important}
            background={props.background}
            fontColor={props.fontColor}
            confirm={(payload, callback) => {
              confirmTask(payload, {
                userId: props.user.userId
              }).then(({ status }) => {
                status === 1 && callback();
              });
            }}
            cancel={(payload, callback) => {
              cancelTask(payload, {
                userId: props.user.userId
              }).then(({ status }) => {
                status === 1 && callback();
              });
            }}
            star={(payload, callback) => {
              starTask(payload, {
                userId: props.user.userId
              }).then(({ status }) => {
                status === 1 && callback();
              });
            }}
            unstar={(payload, callback) => {
              unStarTask(payload, {
                userId: props.user.userId
              }).then(({ status }) => {
                status === 1 && callback();
              });
            }}
            OnClick={()=>{
              setRightLan(!rightLan);
            }}
          />
        ))}
      </div>
      <div
        className="newtask"
        style={{
          backgroundColor: "#a00 !important",
          display: "flex",
          flexDirection: "column",
          marginLeft: "30px",
          marginRight: "30px",
          alignSelf: "flex-end"
        }}
      >
        <Addition p="添加任务" ref={additionElement} onAdd={handleAdd} />
      </div>
    </div>
  );
};
