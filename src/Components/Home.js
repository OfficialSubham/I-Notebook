import React, { useContext, useEffect } from "react";
import NoteContext from "../context/notes/noteContext";
import Note from "./Note";
import AddNote from "./AddNote";
import Modal from "./Modal";
import {useNavigate} from 'react-router-dom'
const Home = (props) => {
  const { note, getAllNotes, setUpdateThisNote } = useContext(NoteContext);
  const navigate = useNavigate()
  useEffect(() => {
    // eslint-disable-next-line
    if(localStorage.getItem("token")) {
      getAllNotes();
    }
    else{
      navigate("/login")
    }
  });

  const updateNote =(currentNote)=> {
    setUpdateThisNote(currentNote)
  }


  return (
    <>
      <AddNote />
      <Modal />
      <h2 className="my-3">Your Notes</h2>
      <div className="container  w-100">
        <div className="row row-cols-auto d-flex justify-content-around">
          {note.length === 0 && <h2>No Note To Show</h2>}
          {note.map((noteData) => {
            return <Note noteData={noteData} key={noteData._id} updateNote={updateNote}/>;
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
