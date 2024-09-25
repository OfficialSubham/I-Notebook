import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ModeContext from "../context/Mode/ModeContext";

const Login = () => {
  const host = "http://localhost:5000";
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });
  const {theme} = useContext(ModeContext)
  const handleLogin = async () => {
    const { username, password } = userDetails;
    const loginDetails = await fetch(`${host}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    let details = await loginDetails.json()
    console.log(details);
  };
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
          ...theme
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
              style={{...theme}}
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
              style={{...theme}}
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
