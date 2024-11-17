import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../src/components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>
        Tailwind Css
      </h1>
      <Card username="Shubham" post="Enginee " />
      <Card />
      <Card username="Sakshi" post="Staff Member" />
    </>
  )
}

export default App
