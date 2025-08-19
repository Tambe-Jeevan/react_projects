import { useState } from "react";
import Card from "./Card";
import "./App.css";

function App() {
  const [color, setColor] = useState("white");

  // let myObj = {
  //   username: "JEEVAN",
  //   age: 22,
  // };
  // let newArr = [1, 2, 3];
  
  return (
    <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}
    >
      <button className="mt-2 inline-flex cursor-pointer items-center text-lg font-semibold text-black px-5 py-5" 
      onClick={() => setColor("oklch(70.9% 0.01 56.259)")}
      > Change BackGround
      </button>

      <h1 className="text-black p-4 rounded-xl mb-4 ">
        Tailwind test
      </h1>
      
      <Card username="Jeevan" btnText="click me" />
      <Card username="Jeevan" />
    </ div>
  );
}

export default App;
