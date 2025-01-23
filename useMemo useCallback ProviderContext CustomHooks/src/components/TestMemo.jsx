import React from "react";

const TestMemo = React.memo(() => {
  console.log("Test Memo!");
  return <div>TestMemo</div>;
});

export default TestMemo;
