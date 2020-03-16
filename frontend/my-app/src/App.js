import React from "react";
import { useState, useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";
import LeftLan from "./components/LeftLan";
import MiddleLan from "./components/MiddleLan";
import LoginMask from "./components/LoginMask";
import { getTask } from "./actions";
// import RightLan from "./components/RightLan";

function App() {
  const [pageData, setPageData] = useState({});
  const [pageListData, setPageListData] = useState([]);
  const [currentPage, setCurrentPage] = useState(null);
  const [user, setUser] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [background,setBackground] = useState("#fff");
  const [fontColor,setFontColor] = useState("#000");

  const freshList = user => {
    getTask({ userId: user.userId }).then(({ data: taskListData }) => {
      const data = [
        {
          important: false,
          oneday: true,
          item: "sun",
          name: "我的一天",
          number: (taskListData.filter(e => e.oneday === 1)).length
        },
        {
          important: true,
          oneday: false,
          item: "star",
          name: "重要",
          number: (taskListData.filter(e => e.important === 1)).length
        },
        {
          important: false,
          oneday: false,
          item: "house",
          name: "任务",
          number: taskListData.length
        }
      ];

      setPageListData(data);
      setCurrentPage(0);
      setPageData(data[0]);

      setTaskList(taskListData);
    });
  };

  useEffect(() => {
    freshList(user);
  }, [user]);

  const getColor=(res)=>{
    if(res.target.value==="light"){
      setBackground("#fff")
      setFontColor("#000")
    }else if(res.target.value==="dark"){
      setBackground("#345");
      setFontColor("#fff");
    } 
  }

  return (
    <div className="App">
      {!Boolean(user) && (
        <LoginMask
          handleLogin={user => {
            setUser(user);
          }}
        />
      )}

      <div
        style={{
          width: "300px",
          backgroundColor: background
          //  display:"flex"
        }}
      >
        <LeftLan
          user={user}
          columns={pageListData}
          fontColor={fontColor}
          getColor={getColor}
          update={data => {
            let nextIndex = pageListData.findIndex(
              elem => elem.name === data.name
            );

            if (nextIndex !== currentPage) {
              setCurrentPage(nextIndex);
              setPageData(pageListData[nextIndex]);
            }
          }}
        />
      </div>
      <div
        style={{
          backgroundColor: "rgb(98, 127, 155)",
          alignItems: "center",
          flex: 1,
          color: background,
          overflowY: "auto",
          overflowX: "hidden"
        }}
      >
        <MiddleLan
          data={pageData}
          user={user}
          taskList={taskList}
          update={() => {
            freshList(user);
          }}
          fontColor={fontColor}
          background={background}
        />
      </div>
      {/* <div
        style={{
          width: "400px",
          backgroundColor: "#a1a7b4",
         // display:"flex"
        }}
      >
        <RightLan />
      </div> */}
    </div>
  );
}

export default App;
