import { useEffect, useState } from "react";
import "./App.css";

// when count >3 , immidiate call APP
// setMsg schedule and dom update
// when ui mount then setMsg run and msg updated and APP Re-render again
// Then Again App mount with dom update

function App(){
  const [count, setCount] = useState(0)
  const [msg, setMsg] = useState("No Message!")

  function handleClick(e){
    setCount(count+1)
  }

  useEffect(() => {
    if(count>3){
      setMsg("Hello World!")
    }
  }, [count])

  return (
    <div>
      <button onClick={handleClick}>{msg} {count}</button>
    </div>
  );
}

export default App;

// dependency array te amake sob somoy premitive value dite hobe . non-premitive sob somoy avoid korte hobe . jodi function array object amake use korte hoy tahole amake value gula derrived korte hobe . nahole amake react.memo or callback use kore kaj korte hobe . jate amake oproyojoni call ke thamaite pari 
















