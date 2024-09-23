import React, {useContext} from "react";
import Tag from "./Tag";
import NoteContext from "../context/notes/noteContext";
const Note = (props) => {
  let {deleteNote} = useContext(NoteContext)
  const noteToBeDelete = () => {
    deleteNote(props.id)
  };

  return (
    <div
      className=" card my-3 mx-2 pb-4"
      style={{ width: "20rem" }}
      key={props.keyid + props.title}
    >
      <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.note}</p>
        
        <p className="card-text">
          <small className="text-body-secondary">{props.date}</small>
        </p>
        <Tag tag={props.tag}/>
      </div>
 
        <div className="d-flex mt-2">
            <i className="fa-solid fa-trash mx-4 dustbin" style={{color: "red"}} onClick={noteToBeDelete}></i>
            <i className="fa-regular fa-pen-to-square edit" style={{color: "blue"}}></i>
        </div>

    </div>
  );
};

export default Note;
