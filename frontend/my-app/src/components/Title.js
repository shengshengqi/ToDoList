import React from "react";

import IconElement from "./IconElement/index";

// css bem 命名规范
export default props => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "rgb(98, 127, 155)",
        //padding: "1em",
        margin: "35px"
      }}
    >
      <IconElement
        type={props.item}
        size={50}
        color={"#fff"}
        style={{
          borderColor: "#fff",
          // marginLeft: "10px",
          border: "none"
        }}
      />

      <p style={{
          textAlign: "left",
          marginLeft: "10px",
          fontSize: "30px",
          color: "#ffffff",
          flex: 1
      }}>{props.name}</p>
    </div>
  );
};
