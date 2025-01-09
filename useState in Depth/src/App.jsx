import { useEffect, useState } from "react";
import "./App.css";
import Text from "./components/Text";
import Add from "./components/Add";

function App() {
  console.log('App Running!')

  const [add, setAdd] = useState(0)

  function handleClick(){
    setAdd(Number(num1) + Number(num2))
  }

  const handleOfClick = () => {
    console.log('Handle Of Click!~')
  }

  return (
    <>
      <div>
        <input  type="text" />
        <input  type="text" />
        <button onClick={handleClick}>ADD</button>
      </div>
      <div>
        <Text  handleOfClick={handleOfClick}  />
        <Text  handleOfClick={handleOfClick} />
      </div>
      <div>
        <Add result={add} handleOfClick={handleOfClick} />
      </div>
    </>
  );
}

export default App;
