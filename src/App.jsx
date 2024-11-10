import { useState, useRef } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0);
  let countRef = useRef(0)

  // UseState
  let handleClick = () => {
    count++
    setCount(count)
  }
  // UseState

  // UseRef
  let handleClick2 = () => {
      console.log(countRef.current++)
  }
  // UseRef
  
  return (
    <>
    {/* // UseState */}
      <h1>UseState</h1>
      <h2>{count}</h2>
      <button onClick={handleClick}>Click</button>
    {/* // UseState */}
      
    {/* // UseRef */}
      <h1>UseRef</h1>
      <h2>{countRef.current}</h2>
      <button onClick={handleClick2}>Click</button>
    {/* // UseRef */}
    </>
  )
}

export default App
