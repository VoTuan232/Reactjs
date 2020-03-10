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
import ClickCounter from "./components/higher_order_component/ClickCounter";
import MouseHover from "./components/higher_order_component/MouseHover";
import ClickCounterWithHigherOrderComponent from "./components/higher_order_component/ClickCounterWithHigherOrderComponent";
import MouseHoverWithHigherComponent from "./components/higher_order_component/MouseHoverWithHigherComponent";
import User from "./components/render_props/User";
import CounterRenderProp from "./components/render_props/Counter";
import ClickCounterTwo from "./components/render_props/ClickCounterTwo";
import MouseHoverTwo from "./components/render_props/MouseHoverTwo";
import ComponentC from "./components/context/ComponentC";
import PostList from "./components/http/PostList";
import PostForm from "./components/http/PostForm";

function App() {
  return (
    <div className="App">
      <PostForm />
      <PostList />
      <ComponentC />
      <User name={isLoggedId => (isLoggedId ? "VOTUAN" : "GUEST")} />
      <h1>Render props</h1>
      <CounterRenderProp
        render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />
      <CounterRenderProp
        render={(count, incrementCount) => (
          <MouseHoverTwo count={count} incrementCount={incrementCount} />
        )}
      />
      <ClickCounterWithHigherOrderComponent name="ClickCounterWithHigherOrderComponent at App" />
      <MouseHoverWithHigherComponent name="MouseHoverWithHigherComponent at App" />
      <ClickCounter />
      <MouseHover />
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
