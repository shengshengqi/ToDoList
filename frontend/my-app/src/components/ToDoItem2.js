import React from "react";

export default props => {
  return (
    <div style={{
        background: "#fff",
        color: "#000",
        width: "100%",
        display: "flex",
        flexDirection: "row"
    }}>
      <div>{props.p}</div>
      <div>{props.d}</div>
    </div>
  );
};
