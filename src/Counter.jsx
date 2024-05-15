import React from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  console.log("initial value is" + count);
  // let a=5

  return (
    <div>
      <button
        style={{ backgroundColor: "#646cffaa" }}
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
            //   console.log("updated value is" + count);
          }
        }}
      >
        -
      </button>
      <h1>{count}</h1>
      <button
        style={{ backgroundColor: "#646cffaa" }}
        onClick={() => {
          // a=a+1;
          if (count < 10) {
            setCount(count + 1);
            console.log("updated value is" + count);
          }
        }}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
