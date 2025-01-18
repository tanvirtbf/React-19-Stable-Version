import { useEffect, useState } from "react";
import "./App.css";
// Reseting States when Props change example :

function Child({id}){
  console.log('Child Render!')
  const [childCount, setChildCount] = useState(0)

  return <button onClick={()=> setChildCount(childCount+1)}>{childCount}</button>
}

function App() {
  console.log('App Render!')
  const [count, setCount] = useState(0)

  function handleClick(){
    setCount(count + 1)
  }

  return (
    <div>
      <button onClick={handleClick}>Click Me {count}</button>
      <Child key={count} id={count} />
    </div>
  );
}

export default App;
