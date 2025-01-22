import React from 'react'
import { useEffect } from 'react'

const Child = () => {

  useEffect(()=>{
    const id = setInterval(()=>{
      console.log('Component Mount!')
    }, 1000)

    function handleClick(){
      console.log('Clicked!')
    }

    document.addEventListener('click', handleClick)

    return () => {
      console.log('Child Component Unmount!')
      clearInterval(id)
      document.removeEventListener('click', handleClick)
    }

  }, [])

  return (
    <div>
      Child
    </div>
  )
}

export default Child
