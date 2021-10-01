import { Component, useState } from "react";
import "./LoginForm.css";
import Input from "components/Input/Input";
import Button from "components/Button/Button";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const SubmitLogin = ({ user, pass, event }) => {
    event.preventDefault();
    console.log(
      `I submitted a login with username: ${user} and password: ${pass}`
    );
  };

  return (
    <>
      <div className="loginWrapper">
        <h1 className="loginTitle">LOG IN</h1>
        <form
          className="loginForm"
          onSubmit={(e) =>
            SubmitLogin({ user: username, pass: password, event: e })
          }
        >
          <Input
            setState= {setUsername}
            type="text"
            placeholder="username"/>
          
          <Input
            setState= {setPassword}
            type="text"
            placeholder="password"
          />
          <Input className="loginSubmit" type="submit" value="Login" color="lightblue"/>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
