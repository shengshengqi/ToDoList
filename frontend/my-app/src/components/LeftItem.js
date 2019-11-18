import React from "react";

import "./LeftItem.css";

import IconElement from "./IconElement/index";

// css bem 命名规范
export default props => {
  return (
    <div className="left_item">
      <IconElement
        type={props.item}
        size={30}
        style={{
          borderColor: "#fff",
         // marginLeft: "10px",
          border: "none"
        }}
      />

      <p className="text">{props.name}</p>
      <p className="text2">{props.number}</p>
    </div>
  );
};
