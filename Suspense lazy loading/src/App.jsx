import { lazy, Suspense, useState } from "react";
import "./App.css";


const App = () => {

  return (
    <div>
      <Suspense fallback={"Loading..."}>
        <DummyParent />
      </Suspense>

    </div>
  )
}

function fetchData(){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data Fetched!")
    }, 4000)
  })
}

let promise;
function DummyParent(){

  const [myData, setMyData] = useState(null)

  throw fetchData().then((data) => {
    setMyData(data)
  })

  if(!myData) return null

  return (<div>Dummy Parent {myData}</div>)
}

export default App;
