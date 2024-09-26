import React, { useContext } from "react";
import AlertContext from "../context/Alert/AlertContext";


const Alert = () => {
  const {alert} = useContext(AlertContext)
  return (
    <>
      {alert.work.length > 0 && <div
        className={`alert alert-${alert.type} my-5`}
        role="alert"
        style={{ height: "60px" }}
      >
        <strong>{alert.work}</strong>
        {alert.message}
      </div>}
    </>
  );
};

export default Alert;
