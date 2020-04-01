import React from "react";
import { useRef, useState, useEffect } from "react";

import Title from "./Title";
import MiddleItem from "./MiddleItem";
import Addition from "./Addition";

import { addTask, finishTask, cancelTask, starTask, unStarTask } from "../actions";
export default props => {
  const [taskList, setTaskList] = useState([]);
  const additionElement = useRef();
  const handleAdd = taskName => {
    addTask({
      oneday: props.data.oneday ? 1 : 0,
      important: props.data.important ? 1 : 0,
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
    if (props.data.important) {
      setTaskList(props.taskList.filter(task => task.important === 1));
      return
    } else if (props.data.oneday) {
      setTaskList(props.taskList.filter(task => task.oneday === 1))
      return
    } else {
      setTaskList(props.taskList)
    }

  }, [props.taskList, props.data]);

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      paddingLeft: "30px",
      paddingRight: "30px",
      height:"100%"
    }}>
      <Title {...props.data} />
      <div
        style={{
          color: "#000",
          height:"90%",
          overflow:"auto"
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
            finish={(payload, callback) => {
              finishTask(payload, {
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
            onClick={() => {
              props.OpenRightLan(task.taskId);
            }}
          />
        ))}
      </div>
        <div
          style={{
            backgroundColor: "#a00 !important",
            height:"10%"
          }}
        >
          <Addition p="添加任务" ref={additionElement} onAdd={handleAdd} />
        </div>
      </div>
  );
};