import React from "react";
import { useState, useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";
import LeftLan from "./components/LeftLan";
import MiddleLan from "./components/MiddleLan";
import LoginMask from "./components/LoginMask";
import { getTask } from "./actions";
import RightLan from "./components/RightLan";

function App() {
  const [pageData, setPageData] = useState({});
  const [pageListData, setPageListData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [user, setUser] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [backColor, setBackColor] = useState("#fff");
  const [fontColor, setFontColor] = useState("#000");
  const [rightLan, setRightLan] = useState(false);
  const [taskId, setTaskId] = useState(null);

  const freshList = user => {
    return getTask({ userId: user.userId }).then(({ data: taskListData }) => {
      const data = [
        {
          important: false,
          oneday: true,
          item: "sun",
          name: "我的一天",
          number: ((taskListData || []).filter(e => e.oneday === 1)).length
        },
        {
          important: true,
          oneday: false,
          item: "star",
          name: "重要",
          number: ((taskListData || []).filter(e => e.important === 1)).length
        },
        {
          important: false,
          oneday: false,
          item: "house",
          name: "任务",
          number: (taskListData || []).length
        }
      ];
      setPageListData(data);
      setTaskList(taskListData || []);
      return data
    });
  };

  useEffect(() => {
    freshList(user).then((data)=>{
        setPageData(data[currentPage]);
      }
    );

  }, [user,currentPage]);

  const getColor = (res) => {
    if (res.target.value === "light") {
      setBackColor("#fff")
      setFontColor("#000")
    } else if (res.target.value === "dark") {
      setBackColor("#345");
      setFontColor("#fff");
    }
  }

  const OpenRightLan = (res) => {
    if (res === taskId) {
      setRightLan(!rightLan)
    } else {
      setRightLan(true)
      setTaskId(res)
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
          flex: "0 0 200px",
          // width: "300px",
          backgroundColor: backColor,
          order: -1,
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
              setRightLan(false);
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
          color: backColor,
          // overflowY: "auto",
          // overflowX: "hidden"
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
          background={backColor}
          OpenRightLan={OpenRightLan}
        />
      </div>
      {!rightLan ? null :
        <div
          style={{
            flex: "0 0 300px",
            backgroundColor: backColor
            //  display:"flex"
          }}
        >
          <RightLan
            taskId={taskId}
            data={pageData}
            fontColor={fontColor}
          />
        </div>}
    </div>
  );
}

export default App;
