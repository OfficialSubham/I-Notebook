import AlertContext from "../Alert/AlertContext";
import NoteContext from "./noteContext";
import { useContext, useState } from "react";

//importing NoteContext to create a context and Use State to defining a state
const NoteState = (props) => {
  const host = "http://localhost:5000"
  const [note, setNote] = useState([]);
  const [updateThisNote, setUpdateThisNote] = useState({
    title: "",
    description: "",
    tag: ""
  });
  const {showTheAlert} = useContext(AlertContext)
  //Get All Notes From Backend

  const getAllNotes = async () => {
    try {
      const notesData = await fetch(`${host}/blog/fetchblog`, {
        method: "GET",
        headers: {
          'Content-Type': "application/json",
          "auth-api": localStorage.getItem("token")
        }
      })
      const json = await notesData.json()
      setNote(json)
      
    } catch (error) {
      console.log(error);
    }

  }

  //Add note Feature

  const addNote = async (title, description, tag) => {
    try {
        await fetch(`${host}/blog/addblog`, {
        method: "POST",
        headers: {
          'Content-Type': "application/json",
          "auth-api": localStorage.getItem("token")
        },
        body: JSON.stringify({title, description, tag})
      })
      setNote(note.concat({title, description, tag}))
      
    } catch (error) {
      console.log(error);
    }
    //concat is used because the note is a array
    //so it added a new note which is a object 
    //to the array
    
    // console.log(newNote);
  }


  //Delete Note Feature

  const deleteNote = async (id) => {
    try {
      await fetch(`${host}/blog/deleteblog/${id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': "application/json",
          "auth-api": localStorage.getItem("token")
        }
      })
      const restNotes = note.filter((eachNote) => {
        return eachNote._id !== id
      })

      setNote(restNotes)
      
    } catch (error) {
      console.log(error);
    }
  }


  //Edit Note Feature
  const editNote = async () => {
    try {
      //api call
      const {title, description, tag} = updateThisNote
      await fetch(`${host}/blog/updateBlog/${updateThisNote._id}`, {
        method: "PUT",
        headers: {
          'Content-Type': "application/json",
          "auth-api": localStorage.getItem("token")
        },
        body: JSON.stringify({title, description, tag})
      })

      //frontend work
      for (let i = 0; i < note.length; i++) {
        const previousNote = note[i];
        if(previousNote._id === updateThisNote._id) {
          previousNote.title = title
          previousNote.description = description
          previousNote.tag = tag
        }
    
      }
     
      const updatedNotes = note.map((eachNote) => {
        return eachNote
      })
      setNote(updatedNotes)
      showTheAlert("Edited : ", "Note is Edited", "success")
    } catch (error) {
      console.log(error);
    }
  
  }




  return (
    //Wraping with NoteContext.Provider Ensure that All the Components can use NoteContext Values
    <NoteContext.Provider value={{ note, addNote, deleteNote, editNote, getAllNotes, updateThisNote, setUpdateThisNote}}>
      {props.children}
      {/* Props.Childern ensure that every child underneath can get the value of the state */}
    </NoteContext.Provider>
  );
};
//Use of context ensure we are not Prop Drilling for using State
export default NoteState;
