import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import { Greet } from "./components/Greet"; // import const
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBinding from "./components/EventBinding";
import ParentComponent from "./components/ParentComponent";
import NameList from "./components/NameList";

function App() {
  return (
    <div className="App">
      List Rendering
      <NameList />
      Methods as props
      <ParentComponent />
      Event Binding
      <EventBinding />
      Event Handing (Function click)
      <FunctionClick />
      Event Handing (Class click)
      <ClassClick />
      SetState(Counter)
      <Counter addValue="5" />
      State
      <Message />
      <Greet name="VoTuan">Nhân vật chính</Greet>
      <Greet name="HIep">
        <button>Action</button>
      </Greet>
      <Greet name="Binh" />
      <Welcome name="VoTuan" />
      {/*<Hello name="VoTuan">Nhân vật</Hello>
      <Hello name="Hiep">
        <button>Action</button>
      </Hello>
  <Hello name="Binh" /> */}
    </div>
  );
}

export default App;
