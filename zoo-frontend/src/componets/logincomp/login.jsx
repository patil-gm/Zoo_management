import React, { Component } from "react";
import { useState } from "react";
import "./login.css";
import Zooimg from "/Users/ghanashyam/react_project/zoo-frontend/src/images/5183596_32599.jpg";
import Logo from '/Users/ghanashyam/react_project/zoo-frontend/src/images/park (1).png'
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div>
      <h1 className="container-fluid title">
      Animal Park &nbsp;
        <span>
          <img className="titleimg" src={Logo} alt="" />
        </span>
        
      </h1>
      <h1 className="p-5 flexwording">
        Welcome to <span className="green">ANIMAL PARK....!</span>{" "}
      </h1>

      <div className="row justify-content-center">
        <div className="col-lg-6">
          <img className="container-fluid img1" src={Zooimg} alt="" />
        </div>

        <div className="col-lg-4">
          <form className="loginform container p-3" onSubmit={handleSubmit}>
            <h1 className="text-center">login</h1>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="container-fluid inputs"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="container-fluid inputs"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <button
              type="submit"
              className="btn btn-success container-fluid sb-btn"
            >
              log in
            </button>
            <p>
              Don't have an account ?
              <Link to={"/Signup"}>
                <span>sign up</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
