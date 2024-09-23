import NoteContext from "./noteContext";
import { useState } from "react";

//importing NoteContext to create a context and Use State to defining a state
const NoteState = (props) => {
  let initialNote = [
    {
        _id: "66eaec82859c24sfgsgsr4fadascf301df9",
        user: "66ea2993926dc74c5f8d12e6",
        title: "Second timeeee",
        description:
          "Thieeara aera ar nd bl12og and431 i am very glad that i did it",
        tag: "mine",
        date: "2024-09-18T15:05:57.277Z",
        __v: 0,
      },
      {
        _id: "66eaec82859cadasdasd44fasdasdcf301df9",
        user: "66ea2993926dc74c5f8d12e6",
        title: "Second timeeee",
        description:
          "Thieeara aera ar nd bl12og and431 i am very glad that i did it",
        tag: "mine",
        date: "2024-09-18T15:05:57.277Z",
        __v: 0,
      },
      {
        _id: "66eaec82859casdafeaq244fcfasdas301df9",
        user: "66ea2993926dc74c5f8d12e6",
        title: "Second timeeee",
        description:
          "Thieeara aera ar nd bl12og and431 i am very glad that i did it",
        tag: "mine",
        date: "2024-09-18T15:05:57.277Z",
        __v: 0,
      },
      {
        _id: "66eaec8285fdfga9c2dasd44fcf301df9",
        user: "66ea2993926dc74c5f8d12e6",
        title: "Second timeeee",
        description:
          "Thieeara aera ar nd bl12og and431 i am very glad that i did it",
        tag: "mine",
        date: "2024-09-18T15:05:57.277Z",
        __v: 0,
      },
      {
        _id: "66eaec82asdasd859c2adsadasd44fcf301df9",
        user: "66ea2993926dc74c5f8d12e6",
        title: "Second timeeee",
        description:
          "Thieeara aera ar nd bl12og and431 i am very glad that i did it",
        tag: "mine",
        date: "2024-09-18T15:05:57.277Z",
        __v: 0,
      },
      {
        _id: "66eaec82859c244fcf3asda0daf1df9",
        user: "66ea2993926dc74c5f8d12e6",
        title: "Second timeeee",
        description:
          "Thieeara aera ar nd bl12og and431 i am very glad that i did it",
        tag: "mine",
        date: "2024-09-18T15:05:57.277Z",
        __v: 0,
      },
      {
        _id: "66eaafafarec82859c24ada4fcf301df9",
        user: "66ea2993926dc74c5f8d12e6",
        title: "Second timeeee",
        description:
          "Thieeara aera ar nd bl12og and431 i am very glad that i did it",
        tag: "mine",
        date: "2024-09-18T15:05:57.277Z",
        __v: 0,
      },
      {
        _id: "66eaec82859cfgs244fcf301dasdasdaf9",
        user: "66ea2993926dc74c5f8d12e6",
        title: "Second timeeee",
        description:
          "Thieeara aera ar nd bl12og and431 i am very glad that i did it",
        tag: "mine",
        date: "2024-09-18T15:05:57.277Z",
        __v: 0,
      },
      {
        _id: "66eaecdaasdas82adsaa859c244fcf301df9",
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

  const deleteNote = (id) => {
    console.log(`note of this ${id} is deleted`);
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
