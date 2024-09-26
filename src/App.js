import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.js";
import Home from "./Components/Home";
import About from "./Components/About";
import NoteState from "./context/notes/NoteState.js";
import Login from "./Components/Login.js";
import Signup from "./Components/Signup.js";
import ModeState from "./context/Mode/ModeState.js";
import { useState } from "react";
import AlertState from "./context/Alert/AlertState.js";


function App() {
  const [homeTheme, setHomeTheme] = useState({
    backgroundColor: "#121212",
    color: "#fff",
  });


  return (
    <>
      <div
        style={{
          backgroundColor: homeTheme.backgroundColor,
          color: homeTheme.color,
          width: "100vw",
          height: "auto",
        }}
      >
        <ModeState>
          <AlertState>
            <NoteState>
              <Router>
                <Navbar setHomeTheme={setHomeTheme} />
                <div
                  className="container"
                  style={{
                    backgroundColor: homeTheme.backgroundColor,
                    color: homeTheme.color,
                    width: "100vw",
                    height: "100vh",
                  }}
                >
                  <Routes>
                    <Route
                      path="/"
                      element={<Home />}
                    />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                  </Routes>
                </div>
              </Router>
            </NoteState>
          </AlertState>
        </ModeState>
      </div>
    </>
  );
}

export default App;
