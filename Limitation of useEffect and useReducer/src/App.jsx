import { useEffect, useState } from "react";
import "./App.css";

function App(){
  const [count, setCount] = useState(0)

  function handleClick(e){
    setCount(count+1)
  }

  return (
    <div>
      <Child key={count} id={count} />
      <button onClick={handleClick}>{count}</button>
    </div>
  );
}

function Child({ id }){
  const [childCount, setChildCount] = useState(id)

  return (
    <div>Child Component! {childCount}</div>
  )
}

export default App;