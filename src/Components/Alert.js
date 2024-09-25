import React from "react";
import { useContext } from "react";
import AlertContext from "../context/alert/AlertContext";


const Alert = () => {
    const {alert, useAlert} = useContext(AlertContext)
  return (
    <>
      <div className="alert alert-primary my-5" role="alert">
        <strong>{alert.work}</strong>
        {alert.message}
      </div>
    </>
  );
};

export default Alert;
