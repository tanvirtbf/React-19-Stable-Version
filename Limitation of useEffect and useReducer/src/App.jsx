import { useEffect, useReducer, useState } from "react";
import "./App.css";

const initialValue ={
  firstName : '',
  lastName : '',
  email : '',
  password : '',
}

function reducerFun(initState, action){

  if(action.type==='firstName'){
    return {...initState, firstName: action.payload}
  }else if(action.type==='lastName'){
    return {...initState, lastName: action.payload}
  }else if(action.type==='email'){
    return {...initState, email: action.payload}
  }else if(action.type==='password'){
    return {...initState, password: action.payload}
  }else if(action.type==='allReset'){
    return {...initState, firstName:'',lastName:'',email:'',password:''}
  }

  return initState
}

function App(){

  const [formData, dispatch] = useReducer(reducerFun, initialValue)

  function handleFname(e){
    dispatch({type:'firstName', payload: e.target.value})
  }
  function handleLname(e){
    dispatch({type:'lastName', payload: e.target.value})
  }
  function handleEmail(e){
    dispatch({type:'email', payload: e.target.value})
  }
  function handlePassword(e){
    dispatch({type:'password', payload: e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault()
    dispatch({type:'allReset'})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleFname} type="text" placeholder="first name" />
        <input onChange={handleLname} type="text" placeholder="last name" />
        <input onChange={handleEmail} type="email" placeholder="email" />
        <input onChange={handlePassword} type="password" placeholder="password" />
        <button type="submit">Submit</button>
      </form>
      <div>
        <h5>First Name : {formData.firstName}</h5>
        <h5>Last Name : {formData.lastName}</h5>
        <h5>Email : {formData.email}</h5>
        <h5>Password : {formData.password}</h5>
      </div>
    </div>
  );
}

export default App;
