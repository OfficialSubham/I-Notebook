import React from "react";

const Alert = (props) => {
  return (
    <>
      <div
        className="alert alert-primary my-5"
        role="alert"
        style={{ height: "60px" }}
      >
        <strong>{props.alert.work}</strong>
        {props.alert.message}
      </div>
    </>
  );
};

export default Alert;
