//importing context to create context
import { createContext } from "react";

//Now all the features from context is can be used from NoteContext
const NoteContext = createContext();

//Exporting NoteContext to use it in another file
export default NoteContext;