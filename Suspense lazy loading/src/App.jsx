import React, { memo, useContext, useState } from "react";
import "./App.css";
import Parent from "./components/Parent";
import Child from "./components/Child";

const App = () => {
  const [showParent, setShowParent] = useState(false)
  const [showChild, setShowChild] = useState(false)

  function toggleParent(){
    setShowParent(!showParent)
  }

  function toggleChild(){
    setShowChild(!showChild)
  }

  return (
    <div>
      <button onClick={toggleParent}>Toggle Parent</button>
      <button onClick={toggleChild}>Toggle Child</button>
       <Parent />
       <Child />
    </div>
  )
}

export default App;
