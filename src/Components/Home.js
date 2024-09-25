import React, { useContext, useEffect, useState } from "react";
import NoteContext from "../context/notes/noteContext";
import Note from "./Note";
import AddNote from "./AddNote";
import Modal from "./Modal";
const Home = () => {
  const { note, getAllNotes, setUpdateThisNote, editNote } = useContext(NoteContext);
  useEffect(() => {
    // eslint-disable-next-line
    getAllNotes();
  }, []);

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
          {note.map((noteData) => {
            return <Note noteData={noteData} key={noteData._id} updateNote={updateNote}/>;
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
