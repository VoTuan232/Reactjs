import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HookCount from "./components/useState/HookCount";
import HookCountWithPreviousState from "./components/useState/HookCountWithPreviousState";
import StateWithObject from "./components/useState/StateWithObject";
import StateWithArray from "./components/useState/StateWithArray";
import ClassCounterOne from "./components/useEffect/ClassCounterOne";
import HookCounterOne from "./components/useEffect/HookCounterOne";
import ClassMouse from "./components/useEffect/ClassMouse";
import HookMouse from "./components/useEffect/HookMouse";
import MouseContainer from "./components/useEffect/MouseContainer";
import IntervalClassCounter from "./components/useEffect/IntervalClassCounter";
import IntervalHookCounter from "./components/useEffect/IntervalHookCounter";
import DataFetching from "./components/useEffect/DataFetching";

function App() {
  return (
    <div className="App">
      <HookCount />
      <HookCountWithPreviousState />
      <StateWithObject />
      <StateWithArray />
      <ClassCounterOne />
      <HookCounterOne />
      <ClassMouse />
      {/*<HookMouse />*/}
      <MouseContainer />
      <IntervalClassCounter />
      <IntervalHookCounter />
      <DataFetching />
    </div>
  );
}

export default App;
