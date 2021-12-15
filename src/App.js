import React from "react";
import Timer from "./components/Timer";
import Controllers from "./components/Controllers";
import Buttons from "./components/Buttons";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <h1 className="title">25 + 5 Clock</h1>
      <Controllers />
      <Timer />
      <Buttons />
    </div>
  );
};

export default App;
