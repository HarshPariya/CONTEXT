import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
//5
import { useContext } from "react";
import { CounterContext } from "./context/Counter";
import Footer from "./components/Footer";

function App() {
  const counterState=useContext(CounterContext)
  return (
    <>
     <Counter/>
    </>
  );
}

export default App;