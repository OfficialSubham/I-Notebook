import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ModeContext from "../context/Mode/ModeContext";
const Signup = () => {

  const {theme} = useContext(ModeContext)

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
        <div className="container">
          <label htmlFor="inputPassword6" className="col-form-label">
            Name
          </label>
          <input
            className="form-control"
            type="text"
            aria-label="default input example"
            style={{...theme}}
          ></input>
        </div>
        <div className="container">
          <label htmlFor="inputPassword6" className="col-form-label">
            Username
          </label>
          <input
            className="form-control"
            type="text"
            aria-label="default input example"
            style={{...theme}}
          ></input>
        </div>
        <div className="container">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            style={{...theme}}
          />
        </div>

        <div className="container">
          <label htmlFor="inputPassword6" className="col-form-label">
            Password
          </label>
          <input
            type="password"
            id="inputPassword6"
            className="form-control"
            aria-describedby="passwordHelpInline"
            style={{...theme}}
          />
        </div>
        <div className="container my-3">
            <Link className="btn btn-primary">Submit</Link>
            <Link className="btn btn-primary mx-3">Login</Link>
        </div>
      </div>
    </>
  );
};

export default Signup;
