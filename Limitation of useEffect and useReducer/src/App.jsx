import { useCallback, useEffect, useState } from "react";
import "./App.css";

function App(){
  const [count, setCount] = useState(0)

  function handleClick(e){
    setCount(count+1)
  }

  const getData = useCallback(() => {
    console.log('Get Data Called!');
  }, [])

  useEffect(() => {
    getData();
  }, [getData])

  return (
    <div>
      <button onClick={handleClick}>Count {count}</button>
    </div>
  );
}

export default App;
















