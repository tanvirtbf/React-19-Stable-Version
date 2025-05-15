import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(()=> {
    setCount((prev) => prev + 1);
  }, [])

  return (
    <div>
      <Child handleClick={handleClick} />
      <button onClick={handleClick}>Count {count}</button>
    </div>
  );
}

const Child = memo(({ handleClick }) => {
  console.log("Child Component Re-render!");

  useMemo(() => {
    for (let i = 0; i < 10; i++) {
      console.log(`Render ${i + 1}`);
    }
  }, [handleClick]);

  return <h1>Child Component!</h1>;
});

export default App;
