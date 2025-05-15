import { useEffect, useState } from "react";
import "./App.css";

function App(){
  const [count, setCount] = useState(0)

  function handleClick(e){
    setCount(count+1)
  }

  function getData(){
    console.log('Get Data Called!');
  }

  return (
    <div>
      <Child getData={getData} key={count} id={count} />
      <button onClick={handleClick}>{count}</button>
    </div>
  );
}

function Child({ id, getData }){
  const [childCount, setChildCount] = useState(id)

  getData()

  return (
    <div>Child Component! {childCount}</div>
  )
}

export default App;