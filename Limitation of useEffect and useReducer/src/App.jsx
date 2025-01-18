import { useEffect, useState } from "react";
import "./App.css";

function App(){

  const [formData, setFormData] = useState({
    firstName : '',
    lastName : '',
    email : '',
    password : '',
  })

  function handleFname(e){
    setFormData({...formData, firstName: e.target.value})
  }
  function handleLname(e){
    setFormData({...formData, lastName: e.target.value})
  }
  function handleEmail(e){
    setFormData({...formData, email: e.target.value})
  }
  function handlePassword(e){
    setFormData({...formData, password: e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault()
    setFormData({firstName:'',lastName:'',email:'',password:''})
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
