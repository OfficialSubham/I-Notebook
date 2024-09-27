import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ModeContext from "../context/Mode/ModeContext";
import AlertContext from "../context/Alert/AlertContext"
import { useNavigate } from "react-router-dom";
const Login = () => {
  const {theme} = useContext(ModeContext)
  const {showTheAlert} = useContext(AlertContext)
  const host = "http://localhost:5000";
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate()
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
    if(loginDetails.ok === true) {
      showTheAlert("Logged In : ", "You Are now Logged In")
      let details = await loginDetails.json()
      localStorage.setItem("token", details.authapi)
      navigate("/")
    }
    else {
      showTheAlert("Invalid : ", "Wrong Username Or Passoword", "danger")
    }
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
        <h3>Login to Continue with iNoteBook</h3>
        <div className="row g-3 align-items-center my-3">
          <div className="container mb-2">
            <label htmlFor="inputPassword6" className="">
              Username
            </label>
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
          <div className="container">
            <label htmlFor="inputPassword6" className="">
              Password
            </label>
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
