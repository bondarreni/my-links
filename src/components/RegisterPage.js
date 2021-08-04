import React, { useState } from "react";
import { Footer } from "./Footer";

function RegisterPage(props) {
  const [registerState, setRegisterState] = useState({
    fields: {
      name: "",
      email: "",
      password1: "",
      password2: ""
    },
    errors: {
      name: "",
      email: "",
      password1: "",
      password2: ""
    }
  });

  function validateData() {
    let fields = registerState.fields;
    let errors = {};
    let isValid = true;

    //Name
    if (fields.name === "") {
      isValid = false;
      errors.name = "Name cannot be empty";
    } else if (!fields.name.match(/^[a-zA-Z]+$/)) {
      isValid = false;
      errors.name = "Name should only contain letters";
    }

    //Email
    let lastAtPos = fields.email.lastIndexOf("@");
    let lastDotPos = fields.email.lastIndexOf(".");

    if (fields.email === "") {
      isValid = false;
      errors.email = "Email cannot be empty";
    } else if (
      !(
        lastAtPos < lastDotPos &&
        lastAtPos > 0 &&
        fields.email.indexOf("@@") === -1 &&
        lastDotPos > 2 &&
        fields.email.length - lastDotPos > 2
      )
    ) {
      isValid = false;
      errors.email = "Email is not valid";
    }

    //Password
    //1st password is valid
    if (fields.password1 === "") {
      isValid = false;
      errors.password1 = "You have to give a password";
    } else if (fields.password1.length < 6) {
      isValid = false;
      errors.password1 = "Your password should have minimum 6 characters";
    }

    //2 passwords matching
    if (fields.password2 === "") {
      isValid = false;
      errors.password2 = "Enter your password again";
    } else if (fields.password2 !== fields.password1) {
      isValid = false;
      errors.password2 = "The passwords do not not match";
    }

    setRegisterState({
      fields: fields,
      errors: errors
    });
    return isValid;
  }

  function handleChange(e) {
    let inputValue = e.target.value;
    let inputName = e.target.name;
    inputName = inputName.charAt(0).toLowerCase() + inputName.slice(1);

    setRegisterState((prevs) => {
      return {
        fields: {
          name: prevs.fields.name,
          email: prevs.fields.email,
          password1: prevs.fields.password1,
          password2: prevs.fields.password2,
          [inputName]: inputValue
        },
        errors: prevs.errors
      };
    });
  }

  function register() {
    if (validateData()) {
      console.log("Registration OK.");
      props.onRegister(registerState.fields.name);
    } else {
      console.log("Not ok :(");
    }
  }

  return (
    <div className="centerDiv">
      <input
        type="text"
        name="Name"
        className="registerInput"
        placeholder="Your name"
        value={registerState.fields.name}
        onChange={handleChange}
      ></input>
      <br></br>
      <span style={{ color: "red" }}>{registerState.errors.name}</span>
      <br></br>
      <input
        type="text"
        name="Email"
        className="registerInput"
        placeholder="Your email"
        value={registerState.fields.email}
        onChange={handleChange}
      ></input>
      <br></br>
      <span style={{ color: "red" }}>{registerState.errors.email}</span>
      <br></br>
      <input
        type="password"
        name="Password1"
        className="registerInput"
        placeholder="Password"
        value={registerState.fields.password1}
        onChange={handleChange}
      ></input>
      <br></br>
      <span style={{ color: "red" }}>{registerState.errors.password1}</span>
      <br></br>
      <input
        type="password"
        name="Password2"
        className="registerInput"
        placeholder="Password again"
        value={registerState.fields.password2}
        onChange={handleChange}
      ></input>
      <br></br>
      <span style={{ color: "red" }}>{registerState.errors.password2}</span>
      <br></br>

      <div className="container" onClick={register}>
        <button className="animated-word">REGISTER</button>
      </div>

      <Footer />
    </div>
  );
}

export { RegisterPage };
