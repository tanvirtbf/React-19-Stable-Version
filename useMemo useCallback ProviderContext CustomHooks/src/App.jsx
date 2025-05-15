import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./App.css";

function App(){
  const [count, setCount] = useState(0)

  function handleClick(){
    setCount(count+1)
  }

  return (
    <div>
      <Child count={count} />
      <button onClick={handleClick}>Count {count}</button>
    </div>
  )
}

const Child = memo(({ count }) => {

  console.log('Child Component Re-render!');

  return <h1>Child Component!</h1>
}, (prevProps, nextProps) => {
    if(nextProps.count > 10){
      return false
    } else {
      return true
    }
})

export default App;
