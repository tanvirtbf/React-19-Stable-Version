import { lazy, Suspense, useState } from "react";
import "./App.css";

const Parent = lazy(() => import("./components/Parent"))
const Child = lazy(() => import("./components/Child"))

const App = () => {

  const [showParent, setShowParent] = useState(false)
  const [showChild, setShowChild] = useState(false)

  function toggleParent(){
    setShowParent(!showParent)
  }
  function toggleChild(){
    setShowChild(!showChild)
  }

  return (
    <div>
      <button onClick={toggleParent}>Toggle Parent</button>
      <button onClick={toggleChild}>Toggle Child</button>

      <Suspense fallback={"Loading..."}>
        {showParent && <Parent />}
        {showChild && <Child />}
      </Suspense>
    </div>
  )
}

export default App;
