import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.js";
import Home from "./Components/Home";
import About from "./Components/About";
import NoteState from "./context/notes/NoteState.js";
import Alert from "./Components/Alert.js";
import AlertState from "./context/alert/AlertState.js";
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
              </Routes>
            </div>
          </Router>
        </AlertState>
      </NoteState>
    </>
  );
}

export default App;
