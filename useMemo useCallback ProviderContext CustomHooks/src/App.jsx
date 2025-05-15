import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  const handleClick = useCallback(() =>  {
    setCount((prev) => prev + 1);
    countRef.current = count + 1;
  }, [])

  useEffect(() => {
    let intervalId = setInterval(() => {
      setCount(countRef.current + 3);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <Child handleClick={handleClick} />
      <button onClick={handleClick}>Count {count}</button>
    </div>
  );
}

const Child = memo(({ handleClick }) => {
  console.log("Child Component run!");

  // Expensive Logic
  useMemo(() => {
    for (let i = 0; i < 10; i++) {
      console.log(`Logic Running ${i + 1}`);
    }
  }, []);

  return <h1>Hello Child!</h1>;
});

export default App;
