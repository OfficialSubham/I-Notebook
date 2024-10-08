import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import ModeContext from "../context/Mode/ModeContext";
import AlertContext from "../context/Alert/AlertContext.js";
import Alert from "./Alert.js";
const Navbar = (props) => {
  const {alert, showTheAlert} = useContext(AlertContext)
  let location = useLocation();
  let { theme, setTheme } = useContext(ModeContext);
  const changeTheme = () => {
    if (theme.color === "#fff") {
      setTheme({
        backgroundColor: "#fff",
        color: "#000",
      });
      props.setHomeTheme({
        backgroundColor: "#fff",
        color: "#000",
      });
      showTheAlert("Light : ", "Light Mode Enabled", "success")
    } else {
      setTheme({
        backgroundColor: "#121212",
        color: "#fff",
      });
      props.setHomeTheme({
        backgroundColor: "#121212",
        color: "#fff",
      });
      showTheAlert("Dark : ", "Dark Mode Enabled", "success")
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token")
  }

  return (
    <>
      <nav
        className="navbar fixed-top navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            iNoteBook - Blog
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch mx-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckChecked"
                onClick={changeTheme}
              />
            </div>
            {localStorage.getItem("token") ? 
            <Link className="btn btn-primary" onClick={handleLogout} role="button">
                Logout
              </Link>
               
            : 
            <form className="d-flex" role="search">
            <Link className="btn btn-primary mx-3"  to="/login" role="button">
                Login!
              </Link>
              <Link className="btn btn-primary"  to="/signup" role="button">
                Sign Up!
              </Link>
            </form>
              }
          </div>
        </div>
      </nav>
      <div style={{ height: "70px", width: "100vw", marginTop: "55px"}}>
        { <Alert alert={alert} />}
      </div>
    </>
  );
};

export default Navbar;
