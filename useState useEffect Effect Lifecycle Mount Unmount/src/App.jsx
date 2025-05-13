import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0)

  function handleIncrease(){
    setCount(count+1)
    setCount(count+10)
    setCount(count+1)
    // setCount((prev) => prev+10)
    // setCount((prev) => prev+10)
    setCount(count+1)
    console.log(count);
  }

  useEffect(() => {
    console.log('App Component Mount!');
  }, [])

  return (
    <div>
      <Child />
      <button onClick={handleIncrease}>Increase {count}</button>
    </div>
  );
}

function Child(){
  useEffect(() => {
    console.log('Child Component Mount!');
  }, [])
  return (
    <h1>
      <GrandChild />
      Hello Child!</h1>
  )
}

function GrandChild(){
  useEffect(() => {
    console.log('Grand Child Mount!');
  }, [])

  return (
    <h1>Grand Child</h1>
  )
}


export default App;
