import { useCallback, useState, useSyncExternalStore } from "react";

export const useLogic = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const subscribe = useCallback(() => {
    const id = setInterval(() => {
      console.log("Interval Logged!");
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  useSyncExternalStore(subscribe, () => {});

  return {count, handleClick}
}