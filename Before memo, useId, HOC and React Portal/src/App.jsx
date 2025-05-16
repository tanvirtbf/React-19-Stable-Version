import React, { useState } from "react";
import "./App.css";



function App() {
  const [fullName, setFullName] = useState("")

  return (
    <div>
      <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
      <MemoizedChild fullName={fullName} />
      <h1>{fullName}</h1>
    </div>
  );
}

function Child({ fullName }) {
  console.log('Child component rendered');

  return (
    <div>
      <h1>Child</h1>
    </div>
  );
}

const MemoizedChild = React.memo(Child, (prevProps, nextProps) => {
  if(nextProps.fullName.length > 10) {
    return false;
  }else {
    return true;
  }
});

export default App;
