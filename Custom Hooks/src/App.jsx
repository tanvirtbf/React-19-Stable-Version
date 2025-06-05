import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState(3)

  myHooks()

  function handlePlus(){
    setValue((prevState) =>{
      if(prevState===5){
        return 5
      }else {
        return value+1
      }
    } )
  }
  function handleMinus(){
    setValue((prevState) =>{
      if(prevState===0){
        return 0
      }else {
        return value-1
      }
    })
  }

  return (
    <div>
      <button onClick={handlePlus}>+</button>
      {value}
      <button onClick={handleMinus}>-</button>
    </div>
  )
}

function myHooks(){
  console.log('Inside My Hooks');
  const [x, setX] = useState(1)

  return (
    <>
    </>
  )
}

export default App
