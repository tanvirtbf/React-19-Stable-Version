import React from 'react'

const Add = ({handleOfClick} = {}) => {
  console.log(result)
  console.log('Add.jsx Running!')
  return (
    <h1 onClick={handleOfClick}>Answer is : {result}</h1>
  )
}

export default Add