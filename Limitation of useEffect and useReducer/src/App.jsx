import { useEffect, useState } from "react";
import "./App.css";

function getVisibleTodos(todos){
  return todos
}

function App() {
  console.log('App Render!')
  const [newTodo, setNewTodo] = useState('cricket')

  const visibleTodos = getVisibleTodos(newTodo)

  function handleClick(){
    setNewTodo('Football')
  }

  return (
    <div>
      <button onClick={handleClick}>Click Me {newTodo}</button>
      <div>{visibleTodos}</div>
    </div>
  );
}

export default App;
