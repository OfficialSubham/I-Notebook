import NoteContext from "./noteContext";

//importing NoteContext to create a context and Use State to defining a state
const NoteState = (props) => {

    return (
        //Wraping with NoteContext.Provider Ensure that All the Components can use NoteContext Values
        <NoteContext.Provider value={{}}>
            {props.children}
            {/* Props.Childern ensure that every child underneath can get the value of the state */}
        </NoteContext.Provider>
    );
}
//Use of context ensure we are not Prop Drilling for using State 
export default NoteState;