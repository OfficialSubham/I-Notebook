import NoteContext from "./noteContext";
import { useState } from "react";

//importing NoteContext to create a context and Use State to defining a state
const NoteState = (props) => {
  let initialNote = [
    {
        _id: "66eaec82859c244fcf301df9",
        user: "66ea2993926dc74c5f8d12e6",
        title: "Second timeeee",
        description:
          "Thieeara aera ar nd bl12og and431 i am very glad that i did it",
        tag: "mine",
        date: "2024-09-18T15:05:57.277Z",
        __v: 0,
      },
      {
        _id: "66eaec82859c244fcf301df9",
        user: "66ea2993926dc74c5f8d12e6",
        title: "Second timeeee",
        description:
          "Thieeara aera ar nd bl12og and431 i am very glad that i did it",
        tag: "mine",
        date: "2024-09-18T15:05:57.277Z",
        __v: 0,
      },
      {
        _id: "66eaec82859c244fcf301df9",
        user: "66ea2993926dc74c5f8d12e6",
        title: "Second timeeee",
        description:
          "Thieeara aera ar nd bl12og and431 i am very glad that i did it",
        tag: "mine",
        date: "2024-09-18T15:05:57.277Z",
        __v: 0,
      },
      {
        _id: "66eaec82859c244fcf301df9",
        user: "66ea2993926dc74c5f8d12e6",
        title: "Second timeeee",
        description:
          "Thieeara aera ar nd bl12og and431 i am very glad that i did it",
        tag: "mine",
        date: "2024-09-18T15:05:57.277Z",
        __v: 0,
      },
      {
        _id: "66eaec82859c244fcf301df9",
        user: "66ea2993926dc74c5f8d12e6",
        title: "Second timeeee",
        description:
          "Thieeara aera ar nd bl12og and431 i am very glad that i did it",
        tag: "mine",
        date: "2024-09-18T15:05:57.277Z",
        __v: 0,
      },
      {
        _id: "66eaec82859c244fcf301df9",
        user: "66ea2993926dc74c5f8d12e6",
        title: "Second timeeee",
        description:
          "Thieeara aera ar nd bl12og and431 i am very glad that i did it",
        tag: "mine",
        date: "2024-09-18T15:05:57.277Z",
        __v: 0,
      },
      {
        _id: "66eaec82859c244fcf301df9",
        user: "66ea2993926dc74c5f8d12e6",
        title: "Second timeeee",
        description:
          "Thieeara aera ar nd bl12og and431 i am very glad that i did it",
        tag: "mine",
        date: "2024-09-18T15:05:57.277Z",
        __v: 0,
      },
      {
        _id: "66eaec82859c244fcf301df9",
        user: "66ea2993926dc74c5f8d12e6",
        title: "Second timeeee",
        description:
          "Thieeara aera ar nd bl12og and431 i am very glad that i did it",
        tag: "mine",
        date: "2024-09-18T15:05:57.277Z",
        __v: 0,
      },
      {
        _id: "66eaec82859c244fcf301df9",
        user: "66ea2993926dc74c5f8d12e6",
        title: "Second timeeee",
        description:
          "Thieeara aera ar nd bl12og and431 i am very glad that i did it",
        tag: "mine",
        date: "2024-09-18T15:05:57.277Z",
        __v: 0,
      },
  ];

  const [note, setNote] = useState(initialNote);

  //Add note Feature

  const addNote = (newNote) => {
    //todo api call
    console.log("adding a new note");
    //concat is used because the note is a array
    //so it added a new note which is a object 
    //to the array
    setNote(note.concat(newNote))
    // console.log(newNote);
  }


  //Delete Note Feature

  const deleteNote = () => {
    
  }


  //Edit Note Feature
  const editNote = () => {
    
  }





  return (
    //Wraping with NoteContext.Provider Ensure that All the Components can use NoteContext Values
    <NoteContext.Provider value={{ note, addNote, deleteNote, editNote }}>
      {props.children}
      {/* Props.Childern ensure that every child underneath can get the value of the state */}
    </NoteContext.Provider>
  );
};
//Use of context ensure we are not Prop Drilling for using State
export default NoteState;
