import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../service/ApiServices";

const SignInCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await login({
        email: email,
        password: password,
      });
      localStorage.setItem("Token", res.data);
      navigate("/pos");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form>
      <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
        <p className="lead fw-normal mb-0 me-3">Login to your account</p>
      </div>
      <h1
        style={{
          color: "red",
          fontSize: "15px",
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        {error && error}
      </h1>
      <div className="form-outline mb-4">
        <input
          type="email"
          className="form-control form-control-lg"
          placeholder="Enter a valid email address"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <label className="form-label">Email address</label>
      </div>
      <div className="form-outline mb-3">
        <input
          type="password"
          className="form-control form-control-lg"
          placeholder="Enter password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
        <label className="form-label">Password</label>
      </div>

      <div className="d-flex justify-content-between align-items-center">
        <div className="form-check mb-0">
          <input className="form-check-input me-2" type="checkbox" value="" />
          <label className="form-check-label">Remember me</label>
        </div>
        <a href="/#" className="text-body">
          Forgot password?
        </a>
      </div>

      <div className="text-center text-lg-start mt-4 pt-2">
        <button
          type="button"
          className="btn btn-primary btn-lg"
          onClick={handleLogin}
        >
          Login
        </button>

        <p className="small fw-bold mt-2 pt-1 mb-0">
          Login to your account{" "}
          <Link to="/signup" className="link-danger">
            Sign Up
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SignInCard;
