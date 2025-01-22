import React, { useEffect } from "react";
import GrandChild from "./GrandChild";

const Child = () => {
  useEffect(() => {
    console.log("Child Mount!");
    return () => {
      console.log("Child Unmount!");
    };
  }, []);

  return (
    <div>
      Child 
      <GrandChild />
    </div>
  );
};

export default Child;
