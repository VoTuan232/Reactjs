import React, { useReducer } from "react";
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
import ComponentC from "./components/useContext/ComponentC";
import ReducerSimple from "./components/reducer/ReducerSimple";
import ReduceComplex from "./components/reducer/ReduceComplex";
import ReduceMulti from "./components/reducer/ReduceMulti";
import ReducerWithUseContextB from "./components/reducer/ReducerWithUseContextB";
import ReducerWithUseContextA from "./components/reducer/ReducerWithUseContextA";
import DataFetchingWithState from "./components/reducer/DataFetchingWithState";
import DataFetchingWithReduce from "./components/reducer/DataFetchingWithReduce";
import ParentComponent from "./components/useCallback/ParentComponent";
import Counter from "./components/memo/Counter";
import FocusInput from "./components/ref/FocusInput";
import HookTimer from "./components/ref/HookTimer";
import DocTitleOne from "./components/customHook/DocTitleOne";
import DocTitleTwo from "./components/customHook/DocTitleTwo";
import CounterOne from "./components/customHook/CounterOne";
import CounterTwo from "./components/customHook/CounterTwo";
import UserForm from "./components/customHook/UserForm";

// useContext
export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
// Reduce with useContext
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
export const CountContext = React.createContext();

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
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
        <h1>UseContext</h1>
        <UserContext.Provider value={"Vishwas"}>
          <ChannelContext.Provider value={"Codevolution"}>
            <ComponentC />
          </ChannelContext.Provider>
        </UserContext.Provider>
        <ReducerSimple />
        <ReduceComplex />
        <ReduceMulti />
        <h1>UseReduce with UseContext</h1>
        <ReducerWithUseContextA />
        <ReducerWithUseContextB />
        <DataFetchingWithState />
        <DataFetchingWithReduce />
        <ParentComponent />
        <Counter />
        <FocusInput />
        <HookTimer />
        <h1>Custom Hook Change Document Title:</h1>
        <DocTitleOne />
        <DocTitleTwo />
        <h1>Custom Hook Counter</h1>
        <CounterOne />
        <CounterTwo />
        <h1>Custom Hook Form</h1>
        <UserForm />
      </div>
    </CountContext.Provider>
  );
}

export default App;
