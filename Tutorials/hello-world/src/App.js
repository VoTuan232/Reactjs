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
import StyleSheet from "./components/StyleSheet";
import Inline from "./components/Inline";
import "./appStyles.scss";
import styles from "./appStyles.module.css";
import Form from "./components/Form";
import LifeCycleA from "./components/LifeCycleA";
import FragmentDemo from "./components/FragmentDemo";
import ParentComp from "./components/ParentComp";
import MemoParentComp from "./components/MemoParentComp";
import Refs from "./components/Refs";
import RefDemo from "./components/RefDemo";
import FocusInput from "./components/FocusInput";
import FRParentInput from "./components/FRParentInput";
import PortalDemo from "./components/PortalDemo";
import HeroError from "./components/HeroError";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <HeroError name="Error Boudary" />
      </ErrorBoundary>
      <ErrorBoundary>
        <HeroError name="joker" />
      </ErrorBoundary>
      <PortalDemo />
      <FRParentInput />
      <FocusInput />
      <RefDemo />
      <Refs />
      <MemoParentComp />
      <ParentComp />
      Fragment
      <FragmentDemo />
      LifeCycle A
      <LifeCycleA />
      Form
      <Form />
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1>
      Inline
      <Inline />
      Style sheet
      <StyleSheet primary={true} />
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
