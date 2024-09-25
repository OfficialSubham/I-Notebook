import ModeContext from "./ModeContext";

import React, {useState} from 'react'

const ModeState = (props) => {

    const [theme, setTheme] = useState({
        "backgroundColor": "#121212",
        "color": "#fff"
    });

  return (
    <ModeContext.Provider value={{theme, setTheme}} style={{backgroundColor: "#000"}}>
        {props.children}
    </ModeContext.Provider>
  )
}

export default ModeState
