import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // [state, updater]

  return (
    <div>
      <h3>1️⃣ useState : Stores and updates values in a component.</h3>  
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
export default Counter;