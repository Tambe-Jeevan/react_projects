import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="min-h-screen w-full flex items-center justify-center bg-gray-900">
        <div className="w-full max-w-md mx-auto shadow-xl rounded-2xl px-6 py-6 my-8 bg-gray-800 text-orange-400">
          <h1 className="text-white text-center text-2xl font-semibold mb-6">
            🔐 Password Generator
          </h1>

          {/* Input + Copy Button */}
          <div className="flex shadow-lg rounded-lg overflow-hidden mb-6 border border-gray-700">
            <input
              type="text"
              value={password}
              className="outline-none w-full py-2 px-4 text-lg bg-gray-700 text-white"
              placeholder="Generated Password"
              readOnly
              ref={passwordRef}
            />
            <button
              onClick={copyPasswordToClipboard}
              className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-4 text-sm font-medium"
            >
              Copy
            </button>
          </div>

          {/* Options */}
          <div className="flex flex-col gap-4 text-sm">
            <div className="flex items-center justify-between">
              <label className="text-white">Length: {length}</label>
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                className="cursor-pointer w-2/3 accent-orange-500"
                onChange={(e) => setLength(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-between">
              <label htmlFor="numberInput" className="text-white">
                Include Numbers
              </label>
              <input
                type="checkbox"
                id="numberInput"
                className="w-4 h-4 accent-orange-500 cursor-pointer"
                checked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
              />
            </div>

            <div className="flex items-center justify-between">
              <label htmlFor="characterInput" className="text-white">
                Include Characters
              </label>
              <input
                type="checkbox"
                id="characterInput"
                className="w-4 h-4 accent-orange-500 cursor-pointer"
                checked={charAllowed}
                onChange={() => setCharAllowed((prev) => !prev)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
