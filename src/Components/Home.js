import React, { useContext } from "react";
import NoteContext from "../context/notes/noteContext";
import Note from "./Note";
const Home = () => {
  const { note, setNote } = useContext(NoteContext);

  return (
    <>
      <h2 className="my-3">Add Note Here</h2>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Title
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Note
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </div>
      <h2 className="my-3">Your Notes</h2>
      <div className="container  w-100">
        <div className="row row-cols-auto d-flex justify-content-around">
          {note.map((noteData) => {
            let num = 0;
            num++;
            return (
                <Note
                  title={noteData.title}
                  tag={noteData.tag}
                  note={noteData.description}
                  date={noteData.date}
                  keyValue={Math.random() * 100 + noteData.tag}
                />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
