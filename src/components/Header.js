import React from "react";
import LinkIcon from "@material-ui/icons/Link";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

function Header(props) {
  return (
    <header>
      <div className="titleDiv">
        <h1>
          <LinkIcon />
          Links
        </h1>
      </div>

      {props.state === "startPage" && (
        <div className="loginDiv">
          <input type="text" placeholder="Username"></input>
          <br></br>
          <input type="password" placeholder="Password"></input>
          <br></br>
          <Button onClick={() => props.onLogin("Valaki")}>Login</Button>
          <Button onClick={() => props.onRegister()}>Register</Button>
        </div>
      )}

      {props.state === "loggedInPage" && (
        <div className="loginDiv">
          <p>Szia {props.userName}!</p>
          <button onClick={() => props.onSignOut()}>Sign out</button>
        </div>
      )}

      {props.state === "registrationPage" && (
        <div className="loginDiv">
          <button onClick={() => props.onBack()}>
            <ArrowBackIcon />
          </button>
        </div>
      )}
    </header>
  );
}

export { Header };
