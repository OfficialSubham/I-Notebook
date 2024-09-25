import NoteContext from "./noteContext";
import { useEffect, useState } from "react";

//importing NoteContext to create a context and Use State to defining a state
const NoteState = (props) => {
  const host = "http://localhost:5000"
  const isNoteEditing = false;
  const [note, setNote] = useState([]);
  const [updateThisNote, setUpdateThisNote] = useState({
    title: "",
    description: "",
    tag: ""
  });
  //Get All Notes From Backend

  const getAllNotes = async () => {
    try {
      const notesData = await fetch(`${host}/blog/fetchblog`, {
        method: "GET",
        headers: {
          'Content-Type': "application/json",
          "auth-api": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZjE4YzI0Y2RkNWZjZjUwMTkyNWY4NyIsImlhdCI6MTcyNzEwNjA4NH0.88wFwLLUwIxes4vJQhdPOOIbm551sYxxw8wp83op_C0"
        }
      })
      const json = await notesData.json()
      console.log(json);
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
          "auth-api": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZjE4YzI0Y2RkNWZjZjUwMTkyNWY4NyIsImlhdCI6MTcyNzEwNjA4NH0.88wFwLLUwIxes4vJQhdPOOIbm551sYxxw8wp83op_C0"
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
          "auth-api": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZjE4YzI0Y2RkNWZjZjUwMTkyNWY4NyIsImlhdCI6MTcyNzEwNjA4NH0.88wFwLLUwIxes4vJQhdPOOIbm551sYxxw8wp83op_C0"
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
          "auth-api": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZjE4YzI0Y2RkNWZjZjUwMTkyNWY4NyIsImlhdCI6MTcyNzEwNjA4NH0.88wFwLLUwIxes4vJQhdPOOIbm551sYxxw8wp83op_C0"
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
