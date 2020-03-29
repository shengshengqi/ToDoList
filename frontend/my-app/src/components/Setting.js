import React from "react";

import "./Setting.css";
class Setting extends React.Component {
  render() {
    return (
      <div className="setting-box">
        <p
          style={{
            textAlign: "left",
            color: "#ffffff",
            fontSize: "20px"
          }}
        >
          Setting
        </p>
        <div className="iradio">
          <input
            type="radio"
            value="light"
            name="theme"
            id="light"
            // checked={this.state.theme === "light"}
            onChange={this.props.getColor}
            style={{
              zoom: "150%",
              verticalAlign: "middle"
            }}
          />
          <label
            htmlFor="light"
            style={{
              fontSize: "20px",
              color: "#ffffff"
            }}
          >
            浅色主题
          </label>
        </div>
        <div className="iradio">
          <input
            type="radio"
            value="dark"
            name="theme"
            id="dark"
            // checked={this.state.theme === "dark"} 
            onChange={this.props.getColor}
            style={{
              zoom: "150%"
            }}
          />
          <label
            htmlFor="dark"
            style={{
              fontSize: "20px",
              color: "#ffffff"
            }}
          >
            深色主题
          </label>
        </div>
      </div>
    );
  }
}

export default Setting;
