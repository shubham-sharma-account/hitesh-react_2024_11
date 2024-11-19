import { useCallback, useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [password, setpassword] = useState("");
  const [length, setlength] = useState(5);
  const [isNumbers, setisNumber] = useState(false);
  const [isChar, setisChar] = useState(false);
  const passRef = useRef()

  const generatePassword = useCallback(() => {
    let pass = '';
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    const numbers = '1234567890';
    const characters = "@#$%^&*_-"

    if(isNumbers) str += numbers;
    if(isChar) str += characters;


    for (let i = 0; i < length; i++) {
      const position = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(position)
    }
    setpassword(pass)
  }, [length, isNumbers, isChar])

  useEffect(() => {
    generatePassword();
  }, [length, isNumbers, isChar])
 
  const handleCopy = () => {
    window.navigator.clipboard.writeText(password)
    passRef.current?.select()
  }

  return (
    <>
      <div>
        <h1 className="bg-green-500 text-3xl">Password Gereator</h1>
        <div class="flex">
          <div class="flex-none w-50 ...">
            <input type="text" value={password} readOnly ref={passRef} />
          </div>
          <div class="flex-initial w-20 ...">
            <button 
              className="bg-fuchsia-500 px-5"
              onClick={handleCopy}
            >Copy</button>
          </div>
        </div>
        <div class="flex">
          <div class="flex-none w-50 ...">
            <input
              type="range"
              min={5}
              max={50}
              value={length}
              onChange={(e) => setlength(e.target.value)}
            />
            <label htmlFor="">Length</label>
          </div>
          <div class="flex-initial w-32 ...">
            <input
              type="checkbox"
              defaultChecked={isNumbers}
              onChange={() => setisNumber((prev) => !prev)}
            />
            <label htmlFor="">Numbers</label>
          </div>
          <div class="flex-initial w-32 ...">
            <input
              type="checkbox"
              defaultChecked={isChar}
              onChange={() => setisChar((prev) => !prev)}
            />
            <label htmlFor="">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
