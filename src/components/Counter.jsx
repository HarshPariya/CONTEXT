import React, { useContext } from "react";
import { CounterContext } from "../context/Counter";


//1ststep

function Counter() {
  const counterContext = useContext(CounterContext);
  return (
    <div>
      {/* //last  */}
      <button onClick={() => counterContext.setCount(counterContext.count + 1)}>
        Increment
      </button>
      <button onClick={() => counterContext.setCount(counterContext.count - 5)}>
        decrement
      </button>

      {/* <button onAbort={}>dec</button> */}
    </div>
  );
}

export default Counter; 
