import React from "react";
import "./App.css";
import { Grid } from "antd";
import Background from "./Components/Background/Background";
import Main from "./Components/Main/Main";
import CursorFollower from "./Components/Cursor/CursorFollower";
const { useBreakpoint }=Grid;
const App = () => {
  const screens = useBreakpoint();
  return (
    <>
      <CursorFollower/>
      <Background/>
      <div className={`main-content${screens.lg ? "container" : ""}`}>
        <Main />
      </div>
    </>
  );
};

export default App;
