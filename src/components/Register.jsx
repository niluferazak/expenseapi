import { useState } from "react";
import React from "react";
import "./Register.css";

const Register = (props) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
  };

  async function signUp() {
    let item = { firstname, lastname, email, username, password };
    console.log(item);
    try {
      let response = await fetch(
        "https://expensetracker-prod-3f73834eea1d.herokuapp.com/api/auth/users/",
        {
          method: "POST",
          body: JSON.stringify(item),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      //  result =await result.json(),
      //  console.log(result)

      if (response.ok) {
        let result = await response.json();
        console.log(result);
      } else {
        console.error("Sign up request failed:", response.statusText);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  return (
    <div className="form">
      <h1>Register Now</h1>

      <div >
        <form onSubmit={submitHandler}>
          <div className="form-control">
          <label htmlFor="firstname"> Firstname :</label>
          <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            placeholder="enter the firstname"
          />
          <br />
          </div>
          <div className="form-control">
          <label htmlFor="lastname"> Lastname :</label>
          <input
            type="text"
            value={lastname}
            onChange={(e) => setlastname(e.target.value)}
            placeholder="enter the lasttname"
          />
          <br />
          </div>
          <div className="form-control">

          <label htmlFor="email"> Email : </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="enter your email"
          />
          <br />
          </div>
          <div className="form-control">
          <label htmlFor="username"> Username </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="enter your username"
          />
          <br />
          </div>
          <div className="form-control">

          
          <label htmlFor="password"> Password </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="enter the password"
          />
          <br />
          </div>

          <button className="btn-signup" onClick={signUp}>Sign up</button>
        </form>
        <h3>Already have an account?</h3>
        <button onClick={() => props.onFormSwitch("login")}>Log In</button>
      </div>
    </div>
  );
};

export default Register;
