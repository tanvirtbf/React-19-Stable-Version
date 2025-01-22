import React, { useEffect } from "react";
import Child from "./Child";
import GrandChild from "./GrandChild";

const Parent = () => {
  useEffect(() => {
    console.log("Parent Mount!");
    return () => {
      console.log("Parent Unmount!");
    };
  }, []);
  return (
    <div>
      Parent
      <Child />
    </div>
  );
};

export default Parent;
