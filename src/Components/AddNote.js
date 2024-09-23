import React, {useContext, useState} from "react";
import NoteContext from "../context/notes/noteContext";

const AddNote = () => {
  const {addNote} = useContext(NoteContext);
    const [newNote, setNewNote] = useState({"title": "", "description": "", "tag": ""});
    const onChange = (e) => {
        setNewNote({...newNote, [e.target.name]: e.target.value})
        //above syntax show that first distribute all the
        //values in newNote then if any change happen
        //then if it has same value of name then rewrite it
        //else add the new value
    }

    const handleNote = (e) => {
        e.preventDefault();
        addNote(newNote.title, newNote.description, newNote.tag)
    }

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
            className="form-control"
            id="title"
            placeholder="Title"
            name="title"
            onChange={onChange}
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
            name="description"
            onChange={onChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Tag"
            name="tag"
            onChange={onChange}
          />
        </div>
        <button className="btn btn-primary" onClick={handleNote}>Add a Note</button>
      </div>
    </>
  );
};

export default AddNote;
