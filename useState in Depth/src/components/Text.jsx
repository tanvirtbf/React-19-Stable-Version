import React from 'react'

const Text = ({num=0}={}) => {
  return (
    <span style={{fontSize: '24px', paddingRight: '20px'}}>{num}</span>
  )
}

export default Text