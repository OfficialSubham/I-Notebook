import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/noteContext";
import ModeContext from "../context/Mode/ModeContext.js";

const AddNote = () => {
  const { addNote } = useContext(NoteContext);
  const [newNote, setNewNote] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const {theme} = useContext(ModeContext)
  const onChange = (e) => {
    setNewNote({ ...newNote, [e.target.name]: e.target.value });
    //above syntax show that first distribute all the
    //values in newNote then if any change happen
    //then if it has same value of name then rewrite it
    //else add the new value
  };

  const handleNote = (e) => {
    e.preventDefault();
    const { title, description, tag } = newNote;
    if (title.length > 5 && description.length > 5) {
      addNote(title, description, tag);
      setNewNote({
        title: "",
        description: "",
        tag: "",
      })
    }

  };

  return (
    <>
      <h2 className="my-3">Add Note Here</h2>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control js-title-input"
            id="title"
            name="title"
            onChange={onChange}
            value={newNote.title}
            style={{...theme}}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Note
          </label>
          <textarea
            className="form-control js-note-input"
            id="exampleFormControlTextarea1"
            rows="3"
            name="description"
            onChange={onChange}
            value={newNote.description}
            style={{...theme}}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control js-tag-input"
            id="title"
            name="tag"
            onChange={onChange}
            value={newNote.tag}
            style={{...theme}}
          />
        </div>
        <div className="container">
          <button
            className="btn btn-primary js-add-note-button"
            onClick={handleNote}
            disabled={
              newNote.title.length < 5 || newNote.description.length < 5
            }
          >
            Add a Note
          </button>
        </div>
      </div>
    </>
  );
};

export default AddNote;
