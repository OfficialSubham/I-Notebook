import React, { useContext } from "react";
import NoteContext from "../context/notes/noteContext";
import Note from "./Note";
import AddNote from "./AddNote";
const Home = () => {
  const { note } = useContext(NoteContext);

  return (
    <>
      <AddNote />
      <h2 className="my-3">Your Notes</h2>
      <div className="container  w-100">
        <div className="row row-cols-auto d-flex justify-content-around">
          {note.map((noteData) => {
            return (
                <Note
                  title={noteData.title}
                  tag={noteData.tag}
                  note={noteData.description}
                  date={noteData.date}
                  key={noteData._id}
                  id={noteData._id}
                />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
