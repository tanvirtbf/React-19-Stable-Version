import { useState } from "react";
import "./App.css";
import Text from "./components/Text";
import Add from "./components/Add";

function App() {

  const [num1, setNum1] = useState(null)
  const [num2, setNum2] = useState(null)

  const [add, setAdd] = useState(null)

  function handleClick(){
    setAdd(Number(num1) + Number(num2))
  }

  return (
    <>
      <div>
        <input value={num1} type="text" onChange={(e)=> setNum1(e.target.value)} />
        <input value={num2} type="text" onChange={(e)=> setNum2(e.target.value)} />
        <button onClick={handleClick}>ADD</button>
      </div>
      <div>
        <Text num={num1} />
        <Text num={num2} />
      </div>
      <div>
        <Add result={add} />
      </div>
    </>
  );
}

export default App;
