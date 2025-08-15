import { useEffect, useState } from "react";

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setTime(t => t + 1), 1000);
    return () => clearInterval(timer); // cleanup
  }, []); // [] = run only once

  return(
    <>
    <h3>2️⃣ useEffect : Runs side effects (API calls, event listeners, timers) after rendering.</h3>
    <p>Time: {time}</p>
    </>
);
}
export default Timer;