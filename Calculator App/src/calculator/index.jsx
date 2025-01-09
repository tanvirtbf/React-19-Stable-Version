import React from 'react'
import './style.css'
import Input from './components/input'

const Calculator = () => {

    function onInput(value){
        console.log(value)
    }

  return (
    <div>
        <Input placeholder='Enter Number' onInput={onInput} />
    </div>
  )
}

export default Calculator