import { useEffect, useState } from "react";
import "./App.css";

function getVisibleTodos(num){
  return num+10
}

function App() {
  console.log('App Render!')
  const [newTodo, setNewTodo] = useState('')
  const [visibleTodos, setVisibleTodos] = useState('')

  function handleClick(){
    setCount(count + 1)
    setVal(getValue(val))
  }


  return (
    <div>
      <button onClick={handleClick}>Click Me {count}</button>
      <div>{val}</div>
    </div>
  );
}

export default App;
