import { useState } from 'react'
import './App.css'

function App() {

  const {count, increase, decrease} = CounterHooks() 

  return (
    <div>
      <button onClick={increase}>+</button>
      {count}
      <button onClick={decrease}>-</button>
    </div>
  )
}

function CounterHooks(){
  const [count, setCount] = useState(5)
  function increase(){
    setCount(count+1)
  }
  function decrease(){
    setCount(count-1)
  }
  return {count, increase, decrease}
}

export default App
