import React, { useRef } from "react";

function FocusInput() {
  const inputRef = useRef();

  const focus = () => inputRef.current.focus();

  return (
    <>
      <h3>4️⃣ useRef : Accesses DOM elements or stores mutable values.</h3>
      <input ref={inputRef} />
      <button onClick={focus}>Focus</button>
    </>
  );
}
export default FocusInput;