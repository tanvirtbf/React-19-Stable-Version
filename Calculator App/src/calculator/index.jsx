import React from 'react'
import './style.css'
import Input from './components/input'
import Button from './components/button'

const Calculator = () => {

    function onInput(value){
        console.log(value)
    }
    function handleClick(){
      console.log('HandleClick!')
    }

  return (
    <div>
        <Input placeholder='Enter Number' onInput={onInput} />
        <Button label='Add' onClick={handleClick} />
    </div>
  )
}

export default Calculator