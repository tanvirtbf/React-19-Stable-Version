import React, { useState } from 'react'
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

  const [operandA, setOperandA] = useState('A')
  const [operandB, setOperandB] = useState('')
  const [result, setResult] = useState('')
  const [operation, setOperation] = useState('')
  const [currentNumber, setCurrentNumber] = useState('')

    function onInput(value){
        setCurrentNumber(value)
    }
    function handleClick(){
      console.log('HandleClick!')
    }
    function handleOperationSelect(operation){
      setOperation(operation)
    }

  return (
    <div>
        <Input value={currentNumber} placeholder='Enter Number' onInput={onInput} />
        <div>
          {Nums.map((_, index)=> {
            return <Button key={index} label={index} onClick={handleClick} />
          })}
        </div>
        Selected Operation {operation}
        <div>
          {Operations.map(o => {
            return <Button onClick={()=>handleOperationSelect(o)} key={o} label={o} />
          })}
        </div>
        
    </div>
  )
}

export default Calculator