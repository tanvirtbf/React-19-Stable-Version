import { useEffect, useReducer, useState, useSyncExternalStore } from "react";
import "./App.css";

function reducerFn(state, action){
  if(action.type==='FNAME'){
    return {...state, fName: action.payload}
  }else if(action.type==='LNAME'){
    return {...state, lName: action.payload}
  }else if(action.type==='EMAIL'){
    return {...state, email: action.payload}
  }else {
    return state
  }
}

function App(){
  const [form, dispatch] = useReducer(reducerFn, {
    fName: "", 
    lName: "",
    email: ""
  })

  function handleFName(e){
    dispatch({type: "FNAME", payload: e.target.value})
  }
  function handleLName(e){
    dispatch({type: "LNAME", payload: e.target.value})
  }
  function handleEmail(e){
    dispatch({type: "EMAIL", payload: e.target.value})
  }

  return (
    <div>
      <input type="text" placeholder="Enter First Name : " value={form.fName} onInput={handleFName} />
      <input type="text" placeholder="Enter Last Name : " value={form.lName} onInput={handleLName} />    
      <input type="text" placeholder="Enter Email : " value={form.email} onInput={handleEmail} />    
      <button>Show Message</button>
      <div>
        <div>{form.fName}</div>
        <div>{form.lName}</div>
        <div>{form.email}</div>
      </div>
      {form.fName.length>3 && <Child />}
    </div>
  );
}

function Child(){

  useEffect(() => {

    let id = setInterval(() => {
      console.log('Inside Child Component');
    }, 1000)

    function handleClick(){
      console.log("Clicked!");
    }

    document.addEventListener("click", handleClick)

    return () => {
      document.removeEventListener("click", handleClick)
      clearInterval(id)
    }

  }, [])

  return <h1>I am Child Component</h1>
}


export default App;