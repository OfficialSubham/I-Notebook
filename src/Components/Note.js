import React, { useContext } from "react";
import Tag from "./Tag";
import NoteContext from "../context/notes/noteContext";
const Note = (props) => {
  let { deleteNote, setUpdateThisNote, updateThisNote } =
    useContext(NoteContext);
  const noteToBeDelete = () => {
    deleteNote(props.noteData._id);
  };
  let tagArray;
  if (props.noteData.tag) {
    let wholeTag = props.noteData.tag;
    tagArray = wholeTag.split(",");
  }

  return (
    <div className=" card my-3 mx-2 pb-4" style={{ width: "20rem" }}>
      <div className="card-body">
        <h5 className="card-title">{props.noteData.title}</h5>
        <p className="card-text">{props.noteData.description}</p>

        <p className="card-text">
          <small className="text-body-secondary">{props.noteData.date}</small>
        </p>
        {tagArray && tagArray.map((tag) => {
          let tagWithoutSpace = tag.trim();
          return <Tag tag={tagWithoutSpace} key={tagWithoutSpace + Math.random() * 100 + props.noteData._id} />;
        })}
      </div>

      <div className="d-flex mt-2">
        <i
          className="fa-solid fa-trash mx-4 dustbin"
          style={{ color: "red" }}
          onClick={noteToBeDelete}
        ></i>
        <i
          className="fa-regular fa-pen-to-square edit"
          style={{ color: "blue" }}
          onClick={() => {
            props.updateNote(props.noteData);
          }}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        ></i>
      </div>
    </div>
  );
};

export default Note;
