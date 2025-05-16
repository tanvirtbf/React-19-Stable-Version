import { memo, useMemo } from "react";

const Child = memo(({ handleClick }) => {
  console.log("Child Component Re-render!");

  useMemo(() => {
    for (let i = 0; i < 10; i++) {
      console.log(`Render ${i + 1}`);
    }
  }, [handleClick]);

  return <h1>Child Component!</h1>;
});

export default Child