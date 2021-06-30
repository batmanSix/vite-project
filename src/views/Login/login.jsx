import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { fakeAuth } from "../../util/fakeAuth";
import LoginForm from "./index";
function Login() {
  return fakeAuth.authenticate() ? <Redirect to="/"></Redirect> : <LoginForm />;
}

export default Login;
