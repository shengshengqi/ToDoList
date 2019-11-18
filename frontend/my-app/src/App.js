import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LeftLan from "./components/LeftLan";
import MiddleLan from "./components/MiddleLan";
import RightLan from "./components/RightLan";
function App() {
  return (
    <div className="App">
      <div
        style={{
          width: "300px",
          backgroundColor: "#345",
        //  display:"flex"
        }}
      >
        <LeftLan />
      </div>
      <div
        style={{
          backgroundColor: "#abc",
          alignItems: "center",
          flex: 1
        }}
      >
        <MiddleLan />
      </div>
      <div
        style={{
          width: "450px",
         // display:"flex"
        }}
      >
        <RightLan />
      </div>
    </div>
  );
}

export default App;
