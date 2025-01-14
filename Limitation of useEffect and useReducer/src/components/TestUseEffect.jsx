import React, { useEffect } from 'react'

const TestUseEffect = () => {
  useEffect(()=>{
    console.log('Component Mount!!!')
    return () => console.log('Component UnMount!!!')
  },[])
  return (
    <div>
      Hello World!@
    </div>
  )
}

export default TestUseEffect
