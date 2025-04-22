import React from "react";
import "./BgColorChange.css";
const BgColorChange = (props) => {
  return (
    <button
      onClick={() => props.setBgstyle(props.btnName)}
      style={{ backgroundColor: props.btnName }}
      type="button"
    >
      {props.btnName}
    </button>
  );
};

export default BgColorChange;
// onClick={() => props.setBgstyle(props.btnName)}
