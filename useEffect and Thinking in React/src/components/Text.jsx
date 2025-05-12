import React from 'react'
import ChildText from './ChildText'

const Text = ({ handleOfClick}={}) => {
  console.log('Text.jsx Running!')
  return (
     <ChildText handleOfClick={handleOfClick} />
  )
}

export default Text