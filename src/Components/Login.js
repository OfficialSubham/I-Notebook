import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });
  const handleLogin = async () => {};
  const onChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div
        className="container d-flex"
        style={{
          width: "100vw",
          height: "70vh",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="row g-3 align-items-center mb-5">
          <div className="col-auto">
            <label htmlFor="inputPassword6" className="col-form-label">
              Username
            </label>
          </div>
          <div className="col-auto">
            <input
              type="text"
              id="inputUsername"
              className="form-control"
              aria-describedby="passwordHelpInline"
              onChange={onChange}
              value={userDetails.username}
              name="username"
            />
          </div>
        </div>
        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <label htmlFor="inputPassword6" className="col-form-label">
              Password
            </label>
          </div>
          <div className="col-auto">
            <input
              type="password"
              id="inputPassword6"
              className="form-control"
              aria-describedby="passwordHelpInline"
              onChange={onChange}
              value={userDetails.password}
              name="password"
            />
          </div>
        </div>
        <div>
          <button className="btn btn-primary my-3 mx-3" onClick={handleLogin}>
            Submit
          </button>
          <Link className="btn btn-primary my-3 mx-3" to="/signup">
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
