import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.js";
import Home from "./Components/Home";
import About from "./Components/About";
import NoteState from "./context/notes/NoteState.js";
import Alert from "./Components/Alert.js";
import AlertState from "./context/alert/AlertState.js";
import Login from "./Components/Login.js";
import Signup from "./Components/Signup.js";
function App() {
  return (
    <>
      <NoteState>
        <AlertState>
          <Router>
            <Navbar />
            <Alert />
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </div>
          </Router>
        </AlertState>
      </NoteState>
    </>
  );
}

export default App;
