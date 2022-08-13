import { useState } from "react";
import Card from "../ui/Card";
import classes from "./RegisterUserLayout.module.css";

function LoginLayout() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:1140/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await response.json();

    if(data.user){
      localStorage.setItem('token', data.user)
      alert("Login successful!")
      window.location.href = '/my-notes-list'
    }
    else{
      alert("Please check username and password ")
      
    }

    console.log(data);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={loginUser}>
        <div className={classes.control}>
          <label> USERNAME </label>
          <input
            type="text"
            required
            id="title"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className={classes.control}>
          <label> PASSWORD </label>
          <input
            type="text"
            required
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className={classes.actions}>
          <button>LOGIN</button>
        </div>
      </form>
    </Card>
  );
}

export default LoginLayout;
