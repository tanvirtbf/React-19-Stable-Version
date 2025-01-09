import React from 'react'
import './style.css'

const Input = ({placeholder='', onInput=()=>{}}={}) => {
    function handleInput(e){
        onInput(e.target.value)
    }
  return (
    <input type="text" placeholder={placeholder} onInput={handleInput} />
  )
}

export default Input