import React, { useState } from "react";
import BgColorChange from "./components/BgColorChange";
import "./App.css";

const App = () => {
  const [bgStyle, setBgstyle] = useState("#F7F7F7");

  return (
    <div className="box" style={{ backgroundColor: bgStyle }}>
      <BgColorChange setBgstyle={setBgstyle} btnName="pink" />
      <BgColorChange setBgstyle={setBgstyle} btnName="yellow" />
      <BgColorChange setBgstyle={setBgstyle} btnName="red" />
      <BgColorChange setBgstyle={setBgstyle} btnName="blue" />
      <BgColorChange setBgstyle={setBgstyle} btnName="purple" />
      <BgColorChange setBgstyle={setBgstyle} btnName="#19393b" />
    </div>
  );
};

export default App;
