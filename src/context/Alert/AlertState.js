import React, { useState } from 'react'
import AlertContext from './AlertContext'

const AlertState = (props) => {

    const [alert, setAlert] = useState({
        work: "",
        message: ""
    });

    const showTheAlert = (work, message) => {
        setAlert({
            work,
            message
        })
        setTimeout(() => {
            setAlert({
              work: "",
              message: "",
            });
          }, 2000);
    };

  return (
    <AlertContext.Provider value={{alert, setAlert, showTheAlert}}>
        {props.children}
    </AlertContext.Provider>
  )
}

export default AlertState
