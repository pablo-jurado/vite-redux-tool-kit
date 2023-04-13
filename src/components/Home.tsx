import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Store/Store";
import { incrementByAmount } from "../Store/CounterSlice";

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const count = data.get("count");

    if (!count) return;

    const num = parseInt(count.toString());

    if (typeof num === "number" && !isNaN(num)) {
      dispatch(incrementByAmount(num));
    }
  }

  return (
    <div>
      <h2>Home | Current count: {count}</h2>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <form onSubmit={handleSubmit}>
          <label>
            Add to the count
            <input type="numeric" name="count" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
