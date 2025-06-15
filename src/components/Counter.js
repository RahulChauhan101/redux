import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  multiply,
  division,
  setCount,
} from "../redux/actions/counterActions";
import "./Counter.css"; // 👈 Import the CSS

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleSetCount = () => {
    const value = parseInt(inputValue, 10);
    if (!isNaN(value)) {
      dispatch(setCount(value));
      setInputValue("");
    }
  };

  return (
    <div className="counter-container">
      <h1 className="counter-title">Redux Count: {count}</h1>
      <div className="counter-buttons">
        <button onClick={() => dispatch(increment())}>Increment +</button>
        <button onClick={() => dispatch(decrement())}>Decrement -</button>
        <button onClick={() => dispatch(multiply(2))}>Multiply by 2 *</button>
        <button onClick={() => dispatch(division(2))}>Division by 2 /</button>
      </div>

      <div className="counter-input-section">
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter value"
        />
        <button onClick={handleSetCount}>Set Count</button>
      </div>
              <button className="reset" onClick={() => dispatch(setCount(0))}>Reset</button>
    </div>
  );
};

export default Counter;
