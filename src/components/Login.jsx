import React from "react";
import { useContext,useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"
import AuthContext from "./context/AuthContext";


const Login = (props) => {
  // const { user,login, logout } = useContext(AuthContext)
  const { user } = useContext(AuthContext)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate= useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
  };

  async function logIn(){
    let item={username,password};
    console.log(item);
    try{

    

    let response=await fetch('https://expensetracker-prod-3f73834eea1d.herokuapp.com/api/auth/jwt/create/',{
        method:'POST',
        body:JSON.stringify(item),
        headers:{
            "Content-Type" : "application/json",
            Authorization:"Token" + user.token,
            // "Accept": "application/json" 

        },


    }
    );
    //  result =await result.json(),
    //  console.log(result)
    

    if (response.ok)
     { 
        let result = await response.json();
         console.log(result);

         } 
     else 
     { console.error('Sign up request failed:', response.statusText); } 

    } 
    
    catch (error) { console.error('An error occurred:', error); } 

    navigate('/expense')
  
  
  }




  return (
    <div className="form">
      
      
      <div>
      <h1>Login</h1>
        <form onSubmit={submitHandler}>
          <label htmlFor="username"> Username </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="enter your username"
          />
          <br />
          <label htmlFor="password"> Password </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="enter the password"
          />
          <br />

          <button onClick={logIn}>login</button>
        </form>
        <h3>Don't have an account?</h3>
        <button onClick={() => props.onFormSwitch("register")}>sign up</button>
      </div>
    </div>
  );
};

export default Login;
