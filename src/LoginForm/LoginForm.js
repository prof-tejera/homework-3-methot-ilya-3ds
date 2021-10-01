import { Component, useState } from "react";
import "./LoginForm.css";

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
          <input
            onInput={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="username"
            className="loginInput"
          ></input>
          <input
            onInput={(e) => setPassword(e.target.value)}
            type="text"
            placeholder="password"
            className="loginInput"
          ></input>
          <input className="loginSubmit" type="submit" value="Login"></input>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
