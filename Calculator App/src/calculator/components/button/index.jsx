import React from 'react'
import './style.css'

const Button = ({label='', onClick=()=>{}, dataOperation=''}={}) => {
  return (
    <button data-operation={dataOperation} onClick={onClick}>{label}</button>
  )
}

export default Button