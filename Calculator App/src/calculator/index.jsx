import React from 'react'
import './style.css'
import Input from './components/input'
import Button from './components/button'

const Add = "+"
const Subtract = "-"
const Divide = "/"
const Multiply = "*"
const Equal = "="

const Operations = [Add, Subtract, Divide, Multiply, Equal]
const Nums = [...new Array(10)]

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
        <div>
          {Nums.map((_, index)=> {
            return <Button key={index} label={index} onClick={handleClick} />
          })}
        </div>
        <div>
          {Operations.map(o => {
            return <Button key={o} label={o} />
          })}
        </div>
        
    </div>
  )
}

export default Calculator