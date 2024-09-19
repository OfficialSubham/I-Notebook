import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.js";
import Home from "./Components/Home";
import About from "./Components/About";
import NoteState from "./context/notes/NoteState.js";
function App() {
  return (
    <>
    <NoteState>


      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/about" element={<About />}/>

        </Routes>
      </Router>
      </NoteState>
    </>
  );
}

export default App;
