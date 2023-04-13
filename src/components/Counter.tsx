import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Store/Store";
import { decrement, increment } from "../Store/CounterSlice";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter value: {count}</h2>
      <div style={{ width: "200px", display: "flex", gap: "10px" }}>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
