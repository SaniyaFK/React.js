import { useState } from "react";
import "./Counter.css"

function init() {
  console.log("init was executed");
  return Math.random();
}

export default function Counter() {
  let[count, setCount] = useState(init);
  console.log("component is re-rendered");

  function incCount() {
    setCount((currCount) => {
      return currCount+1;
    });

    setCount((currCount) => {
      return currCount+1;
    });

    // setCount(25);
  }

  return(
    <div className="counter">
      <h3>Count: {count}</h3>
      <button onClick={incCount}>Increase Count</button>
    </div>
  );
}