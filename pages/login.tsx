import React, { useState } from "react";
import { app, auth } from "./firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

import Router from "next/router";
import { Form } from "react-bootstrap";

export default function SignUp() {
  var signin = 0;
  var SignedIn;
  const [user, SetUserInfo] = useState({
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState("Checked");
  const OnSubmitHandler = (e: any) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        const user = userCredential.user;

        console.log(user);

        Router.push("/loggedinpage");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert("Error!");
      });

    SetUserInfo({ email: "", password: "" });
  };
  return (
    <>
      <div
        style={{
          backgroundImage: "url('/loginback.jpg')",
          backgroundSize: "cover",
          padding: 100,
        }}
      >
        <br />
        <br />
        <div className="login-form">
          <h2>SignIn</h2>
          <form onSubmit={OnSubmitHandler}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                value={user.email}
                type="email"
                id="email"
                name="email"
                required
                onChange={(e) =>
                  SetUserInfo({ ...user, email: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                value={user.password}
                type="password"
                id="password"
                name="password"
                required
                onChange={(e) =>
                  SetUserInfo({ ...user, password: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="checkbox">Remeber Me</label>
              <input
                value={rememberMe}
                type="checkbox"
                id="checkbox"
                name="checkbox"
                required
              />
            </div>
            <button type="submit">SignIn</button>
          </form>
        </div>
      </div>
    </>
  );
}
