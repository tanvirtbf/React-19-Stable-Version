import React, { useEffect } from "react";

const GrandChild = () => {
  useEffect(() => {
    console.log("GrandChild Mount!");
    return () => {
      console.log("GrandChild Unmount!");
    };
  }, []);
  return <div>GrandChild</div>;
};

export default GrandChild;
