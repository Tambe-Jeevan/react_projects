import { createContext, useContext } from "react";

const ThemeContext = createContext("light");

function Child() {
  const theme = useContext(ThemeContext);
  return <p>Theme is {theme}</p>;
}

function App() {
  return (
    <>
    <h3>3️⃣ useContext : Shares state globally without prop drilling.</h3>
    <ThemeContext.Provider value="dark">
      <Child />
    </ThemeContext.Provider>
    </>
  );
}
export default App;