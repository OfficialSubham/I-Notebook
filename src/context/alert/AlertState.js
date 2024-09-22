import AlertContext from "./AlertContext";
import { useState } from "react";
const AlertState = (props) => {
    const [alert, setAlert] = useState({
        work: "Added Note : ",
        message: "The Note is Added"
    });
    return (
        <AlertContext.Provider value={{alert, setAlert}}>
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState;