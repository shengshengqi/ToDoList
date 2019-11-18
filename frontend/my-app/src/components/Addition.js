import React from "react";

import { useState } from "react";
import IconElement from "./IconElement/index";

// css bem 命名规范
export default props => {
  const [iconDone, setIconDone] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#345",
        padding: "5px",
        //margin: "35px"
        borderRadius: "5px"
      }}
    >
      <IconElement
        type={iconDone ? "circle" : "add"}
        size={30}
        style={{
          borderColor: "#fff",
          marginLeft: "10px",
          border: "none"
        }}
        onClick={() => {
          console.log("click");
          setIconDone(!iconDone);
        }}
      />

      <input
        type="text"
        defaultValue={props.p}
        style={{
          backgroundColor: "#345",
          border: 0,
          fontSize: "20px",
          marginLeft: "20px"
        }}
        onClick={() => {
            console.log("click");
            setIconDone(!iconDone);
          }}
      ></input>
    </div>
  );
};
