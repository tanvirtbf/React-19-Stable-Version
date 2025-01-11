import { useEffect, useState } from "react";
import "./App.css";
import Parent from "./components/Parent";

function App() {
  const [select, setSelect] = useState(true)

  useEffect(() => {
    console.log("App Mount!");
    return () => {
      console.log("App Unmount!");
    };
  }, []);
  return (
    <div>
      <button onClick={()=> setSelect(!select)}>Unmount Parent</button>
      {select && <Parent />}
    </div>
  );
}

export default App;
