import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./LoginLayout.module.css";

function LoginLayout() {
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const loginData = {
      username: enteredUsername,
      password: enteredPassword,
    };

    console.log(loginData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor> USERNAME </label>
          <input type="text" required id="title" ref={usernameInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor> PASSWORD </label>
          <input type="text" required id="password" ref={passwordInputRef} />
        </div>

        <div className={classes.actions}>
          <button>GO TO MY ACCOUNT</button>
        </div>
      </form>
    </Card>
  );
}

export default LoginLayout;
