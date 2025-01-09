import React from 'react'
import './style.css'

const Button = ({label='', onClick=()=>{}}={}) => {
  return (
    <button onClick={onClick}>{label}</button>
  )
}

export default Button