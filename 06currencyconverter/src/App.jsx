import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="relative w-[40rem] h-[20rem] bg-gray-400 border-r-2">
        <div class="absolute left-5 right-5 top-5 h-[9rem] w-[38rem] bg-white border-spacing-5 ">
          <div class="relative w-[38rem] h-[9rem] bg-yellow-400 border-r-2">
            <div class="flex flex-row">
              <div class="basis-1/2 bg-blue-400 grid justify-items-start">qeqwqwd</div>
              <div class="basis-1/4 bg-red-400 grid justify-items-end">dfsdfsd</div>
            </div>
          </div>
        </div>
        <div class="absolute left-5 right-5 top-[11rem] h-[8rem] w-[38rem] bg-white border-spacing-5 ">
          02
        </div>
      </div>
    </>
  );
}

export default App;
