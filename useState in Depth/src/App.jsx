import { useState } from "react";
import "./App.css";
import Text from "./components/Text";
import Add from "./components/Add";

function App() {

  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)

  function handleClick(){

  }

  return (
    <>
      <div>
        <input type="text" />
        <input type="text" />
        <button onClick={handleClick}>ADD</button>
      </div>
      <div>
        <Text num={num1} />
        <Text num={num2} />
      </div>
      <div>
        <Add />
      </div>
    </>
  );
}

export default App;
