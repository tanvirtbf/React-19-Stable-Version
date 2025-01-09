import React, { useState } from 'react'
import Button from './Button'

const IncrementDecrement = () => {

  const [value, setValue] = useState(0)

  function handleIncrement(){
    setValue(value+1)
  }

  function handleDecrement(){
    setValue(value-1)
  }

  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent:'center'}}>
      <Button label='+' onClick={handleIncrement} />
      <span style={{paddingInline: '20px', fontSize: '30px'}}>{value}</span>
      <Button label='-' onClick={handleDecrement} />
    </div>
  )
}

export default IncrementDecrement
