import React from "react";
import {useState, useEffect} from 'react'
// import logo from "./logo.svg";
import "./App.css";
import LeftLan from "./components/LeftLan";
import MiddleLan from "./components/MiddleLan";
import RightLan from "./components/RightLan";

function App() {
  const [pageData, setPageData] = useState({})
  const [pageListData, setPageListData] = useState([])
  const [currentPage, setCurrentPage] = useState(null)
  // 只会运行一次
  useEffect(()=>{
    let data = [
      {item: "sun", name: "我的一天", number: 3},
      {item: "star", name: "重要", number: 7},
      {item: "house", name: "任务", number: 11}
    ]
    setPageListData(data)
    setCurrentPage(0)
    setPageData(data[0])
  },[])

  return (
    <div className="App">
      <div
        style={{
          width: "300px",
          backgroundColor: "#345",
        //  display:"flex"
        }}
      >
        <LeftLan columns={pageListData}
          update={(data) => {
            let nextIndex = pageListData.findIndex(elem => elem.name === data.name)
            console.log(nextIndex, currentPage)
            if(nextIndex !== currentPage){
              setCurrentPage(nextIndex)
              setPageData(pageListData[nextIndex])
            }
          }}
        />
      </div>
      <div
        style={{
          backgroundColor: "rgb(98, 127, 155)",
          alignItems: "center",
          flex: 1,
          color:"#ffffff"
        }}
      >
        <MiddleLan data={pageData}/>
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
