import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState(0)

  function handleClick(){
    const num1 = document.getElementById('num1')
    const num2 = document.getElementById('num2')

    setValue(Number(num1.value)+Number(num2.value))

    num1.value = null
    num2.value = null
  }
  

  return (
    <>
      <div>
        <input type="text" id='num1' />
        <input type="text" id='num2' />
        <button onClick={handleClick}>ADD</button>
      </div>
      <h1>{value}</h1>
    </>
  )
}

export default App
