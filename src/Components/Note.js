import React from "react";
import Tag from "./Tag";

const Note = (props) => {
  return (
    <div
      className=" card my-3 mx-2 pb-4"
      style={{ width: "20rem" }}
      key={props.keyValue}
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
            <i className="fa-solid fa-trash mx-4" style={{color: "red"}}></i>
            <i className="fa-regular fa-pen-to-square" style={{color: "blue"}}></i>
        </div>

    </div>
  );
};

export default Note;
