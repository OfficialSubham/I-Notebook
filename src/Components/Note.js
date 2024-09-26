import React, { useContext } from "react";
import Tag from "./Tag";
import NoteContext from "../context/notes/noteContext";
import ModeContext from "../context/Mode/ModeContext";

const Note = (props) => {
  let { deleteNote } = useContext(NoteContext);
  const noteToBeDelete = () => {
    deleteNote(props.noteData._id);
  };
  let tagArray;
  if (props.noteData.tag) {
    let wholeTag = props.noteData.tag;
    tagArray = wholeTag.split(",");
  }
  const { theme } = useContext(ModeContext);
  return (
    <>
      <div
        className=" card my-3 mx-2 pb-4"
        style={{ width: "20rem", ...theme, border: `2px solid ${theme.color}` }}
      >
        <div className="card-body">
          <h5 className="card-title">{props.noteData.title}</h5>
          <p className="card-text">{props.noteData.description}</p>

          <p className="card-text">
            <small className="text-body-secondary">
              { new Date(props.noteData.date).toLocaleString()
              }
            </small>
          </p>
          {tagArray &&
            tagArray.map((tag) => {
              let tagWithoutSpace = tag.trim();
              return (
                <Tag
                  tag={tagWithoutSpace}
                  key={
                    tagWithoutSpace + Math.random() * 100 + props.noteData._id
                  }
                />
              );
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
    </>
  );
};

export default Note;
