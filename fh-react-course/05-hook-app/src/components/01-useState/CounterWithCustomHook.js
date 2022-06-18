import { useState } from "react";

export const CounterWithCustomHook = () => {

  const { state, increment, decrement } = useCounter();

  return (
    <>
      <h1>CounterWithCustomHook {state}</h1>
      <hr />
      <button className="btn btn-primary" onClick={() => increment(2)}>
        +1
      </button>
      <hr />
      <button className="btn btn-primary" onClick={() => decrement(5)}>
        -1
      </button>
    </>
  );
};


const useCounter = (initialState = 10) => {
  const [state, setState] = useState(initialState)

  const increment = (factor = 1) => {
    setState(state + factor);
  }

  const decrement = (factor = 1) => {
    setState(state - factor);
  }

  return {
    state,
    increment, decrement,
  };
}