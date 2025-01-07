import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);

  const num1Ref = useRef(null);
  const num2Ref = useRef(null);

  function handleClick() {
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");

    // setValue(Number(num1.value) + Number(num2.value));
    setValue(Number(num1Ref.current.value) + Number(num2Ref.current.value))

    num1.value = null;
    num2.value = null;
  }

  return (
    <>
      <div>
        <input ref={num1Ref} type="text" id="num1" />
        <input ref={num2Ref} type="text" id="num2" />
        <button onClick={handleClick}>ADD</button>
      </div>
      <h1>{value}</h1>
    </>
  );
}

export default App;
