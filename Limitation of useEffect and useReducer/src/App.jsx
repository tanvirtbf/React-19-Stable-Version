import { useEffect, useState, useSyncExternalStore } from "react";
import "./App.css";

function App(){
  const [count, setCount] = useState(0)

  function subscribe(){
    document.addEventListener("click", handleOutsideClick)

    return () => {
      document.removeEventListener("click", handleOutsideClick)
    }
  }

  useSyncExternalStore(subscribe, ()=>{})


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