import React, { memo, useContext, useState } from "react";
import "./App.css";

const MyContext = React.createContext(null);

function App() {
  const [state, setState] = useState(0)
  return (
    <MyContext.Provider value={{ state, setState}}>
      <GrandChild />
      <Child />
    </MyContext.Provider>
  );
}

const Child = () => {
  const {state, setState} = useContext(MyContext)

  return (
    <div>
      {state}
      <h2 onClick={() => setState((prev) => prev+1)}>Child Component</h2>
    </div>
  )
}

const GrandChild = memo( () => {
  console.log('Grand Child Rendered');
  return (
    <div>
      <h2>Grand Child Component</h2>
    </div>
  )
})


export default App;
