import { useState } from "react";

import classes from "./RegisterUserLayout.module.css";
import { useNavigate } from "react-router-dom";

function RegisterUserLayout() {
  const history = useNavigate();

  const [id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [mobile, setMobile] = useState("");
  const [status, setStatus] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [accType, setAccType] = useState("");

  async function registerUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:1140/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        firstName,
        lastName,
        email,
        dob,
        mobile,
        status,
        username,
        password,
        accType,
      }),
    });

    const data = await response.json();

    if (data.status === "ok") {
      alert("New account has been created successfully!")
    } else {
      alert("Duplicate entry or invalid data!")
    }
  }

  return (
         
      <form className={classes.form} onSubmit={registerUser}>
        
        <div className={classes.control}>
          <label> ID </label>
          <input
            type="number"
            required
            id="id"
            placeholder="(Enter digits only)"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>

        <div className={classes.control}>
          <label> FIRST NAME </label>
          <input
            type="text"
            required
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className={classes.control}>
          <label> LAST NAME </label>
          <input
            type="text"
            required
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className={classes.control}>
          <label> EMAIL </label>
          <input
            type="email"
            required
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={classes.control}>
          <label> DATE OF BIRTH </label>
          <input
            type="date"
            required
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>

        <div className={classes.control}>
          <label> MOBILE NO </label>
          <input
            type="number"
            required
            id="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>

        <div className={classes.control}>
          <label> STATUS </label>
          <input
            type="text"
            required
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>

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
            type="password"
            required
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className={classes.control}>
          <label> ACCOUNT TYPE </label>
          <input
            type="text"
            required
            id="accType"
            value={accType}
            onChange={(e) => setAccType(e.target.value)}
          />
        </div>

        <div className={classes.actions}>
          <button>CREATE MY ACCOUNT</button>
        </div>

        
      </form>
      
   
  );
}

export default RegisterUserLayout;
