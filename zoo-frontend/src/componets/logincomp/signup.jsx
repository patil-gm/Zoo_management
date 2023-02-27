import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Signup = () => {
  const [name1, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const hadleSubmit = (e) => {
    e.preventDefault();
    console.log(name1, email, password);
  };
  return (
    <div>
      <h1 className="text-center container p-4 ">
        Welcome to ANIMAL PARK....!
      </h1>
      <form
        className="container-fluid loginform p-4 col-sm-4"
        onSubmit={hadleSubmit}
      >
        <label htmlFor="">Name</label>
        <input
          type="text"
          name="name"
          className="container-fluid"
          onChange={(e) => setName(e.target.value)}
          value={name1}
        />
        <p>email</p>
        <input
          type="email"
          name="email"
          className="container-fluid"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <p>password</p>
        <input
          type="password"
          name="password"
          className="container-fluid"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button
          type="submit"
          className="btn btn-success container-fluid sb-btn"
        >
          create an account{" "}
        </button>
        <p>
          already have account ?
          <Link to={"/"}>
            <span>log in</span>
          </Link>
        </p>
      </form>
    </div>
  );
};
export default Signup;
