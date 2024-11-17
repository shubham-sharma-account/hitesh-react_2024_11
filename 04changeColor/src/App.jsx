import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setcolor] = useState('gray')

  return (
    <>
    <div style={{backgroundColor: color}}>
    <h1 className='text-3xl bg-green-500 p-3 rounded-md'>
        Change Color
      </h1>
      <button onClick={() => setcolor("red")}>Red</button>
      <button onClick={() => setcolor("green")}>Green</button>
      <button onClick={() => setcolor("pink")}>Pink</button>
    </div>

    </>
  )
}

export default App
