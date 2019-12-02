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
          backgroundColor: "rgb(98, 127, 155)",
          alignItems: "center",
          flex: 1,
          color:"#ffffff"
        }}
      >
        <MiddleLan />
      </div>
      <div
        style={{
          width: "400px",
          backgroundColor: "#a1a7b4",
         // display:"flex"
        }}
      >
        <RightLan />
      </div>
    </div>
  );
}

export default App;
