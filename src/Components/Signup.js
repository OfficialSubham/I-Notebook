import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ModeContext from "../context/Mode/ModeContext";
import AlertContext from "../context/Alert/AlertContext";
const Signup = () => {
  const host = "http://localhost:5000";
  const { theme } = useContext(ModeContext);
  const { showTheAlert } = useContext(AlertContext);
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const onChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleNewUser = async () => {
    try {
      const { name, username, email, password, cpassword } = newUser;
      if (password !== cpassword) {
        showTheAlert("Incorrect : ", "Password is not matching", "danger");
      } else if (!name || !username || !password || !cpassword) {
        showTheAlert("Error : ", "Provide the specific details", "danger");
      } else {
        const userSignUp = await fetch(`${host}/createuser`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, username, password }),
        });
        console.log(userSignUp);
        if (userSignUp.ok === true) {
          const authToken = await userSignUp.json();
          localStorage.setItem("token", authToken.authapi);
          navigate("/");
        }
      }
    } catch (error) {
      console.log(error);
    }
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
          ...theme,
        }}
      >
        <h3>Sign Up to use iNoteBook</h3>
        <div className="container my-3">
          <label htmlFor="inputPassword6" className="col-form-label">
            Name
          </label>
          <input
            className="form-control"
            type="text"
            aria-label="default input example"
            style={{ ...theme }}
            onChange={onChange}
            value={newUser.name}
            name="name"
            required
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
            style={{ ...theme }}
            onChange={onChange}
            value={newUser.username}
            name="username"
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
            style={{ ...theme }}
            onChange={onChange}
            value={newUser.email}
            name="email"
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
            style={{ ...theme }}
            onChange={onChange}
            value={newUser.password}
            name="password"
          />
        </div>
        <div className="container">
          <label htmlFor="inputPassword" className="col-form-label">
            Confirm Password
          </label>
          <input
            type="password"
            id="inputCPassword"
            className="form-control"
            aria-describedby="passwordHelpInline"
            style={{ ...theme }}
            onChange={onChange}
            value={newUser.cpassword}
            name="cpassword"
          />
        </div>
        <div className="container my-3">
          <Link className="btn btn-primary" onClick={handleNewUser}>
            Submit
          </Link>
         
        </div>
      </div>
    </>
  );
};

export default Signup;
