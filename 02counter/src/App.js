// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [counter, setCounter] = useState(0)


  const handleAdd = () => {
    setCounter(counter+1)
  }

  const handleSubtract = () => {
    setCounter(counter-1)
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter Value: {counter < 0 ? 0 : counter}</h2>
      <button onClick={handleAdd}>Increase couter</button>
      <button onClick={handleSubtract}>Decrease couter</button>
    </>
  );
}

export default App;
