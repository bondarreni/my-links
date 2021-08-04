import React, { useState } from "react";
import { LinkPage } from "./LinkPage";
import { RegisterPage } from "./RegisterPage";
import { Header } from "./Header";
import { CategoryPage } from "./CategoryPage";

function App() {
  const [state, setState] = useState("startPage"); //startPage
  const [userName, setUserName] = useState("");

  function register() {
    setState("registrationPage");
  }

  function login(name) {
    setState("loggedInPage");
    setUserName(name);
  }

  function signOut() {
    setState("startPage");
    setUserName("");
  }

  function goBack() {
    setState("startPage");
  }

  return (
    <div>
      <Header
        state={state}
        onRegister={register}
        userName={userName}
        onSignOut={signOut}
        onLogin={login}
        onBack={goBack}
      />
      {(state === "startPage" || state === "loggedInPage") && <LinkPage />}
      {state === "registrationPage" && <RegisterPage onRegister={login} />}
      {state === "categoryPage" && <CategoryPage />}
    </div>
  );
}

export { App };
