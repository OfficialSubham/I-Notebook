import NoteContext from "./noteContext";
import { useState } from "react";
//importing NoteContext to create a context and Use State to defining a state
const NoteState = (props) => {
    //Defining State
    let state1 = {
        name: "Subham",
        class: "12"
    }
    const [state, setState] = useState(state1);
    const update = () => {
        setTimeout(() => {
          setState({
            name: "Ben",
            class: "10"
          })
        }, 2000)
    }
    return (
        //Wraping with NoteContext.Provider Ensure that All the Components can use NoteContext Values
        <NoteContext.Provider value={{state, update}}>
            {props.children}
            {/* Props.Childern ensure that every child underneath can get the value of the state */}
        </NoteContext.Provider>
    );
}
//Use of context ensure we are not Prop Drilling for using State 
export default NoteState;