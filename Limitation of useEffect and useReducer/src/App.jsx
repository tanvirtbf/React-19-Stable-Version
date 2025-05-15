import { useEffect, useState } from "react";
import "./App.css";

function App(){
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick)
    return (() => {
      document.removeEventListener("click", handleOutsideClick)
    })
  }, [])

  function handleOutsideClick(){
    console.log('Click on Document!');
  }

  function handleClick(e){
    setCount(count+1)
  }

  return (
    <div>
      <button onClick={handleClick}>{count}</button>
    </div>
  );
}


export default App;