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

    return () => {
      console.log('App Component Unmount');
    }
  }, [])

  const mod2 = count%2 === 0

  return (
    <div>
      {mod2 && <Child />}
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
    <h4>Grand Child</h4>
  )
}


export default App;
