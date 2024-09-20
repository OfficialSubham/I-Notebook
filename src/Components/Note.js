import React from "react";

const Note = (props) => {
  let date = Date.now();
  console.log(props.keyValue);
  return (
    <div
      className=" card my-3 mx-2"
      style={{ width: "20rem" }}
      key={props.keyValue}
    >
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>

        <p className="card-text">{props.note}</p>
        <h6 className="card-subtitle mb-2 text-body-secondary">{props.tag}</h6>
        <p className="card-text">
          <small className="text-body-secondary">{props.date}</small>
        </p>
      </div>
    </div>
  );
};

export default Note;
