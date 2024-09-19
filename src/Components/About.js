import React, { useEffect } from 'react'
import { useContext } from 'react'
import NoteContext from '../context/notes/noteContext'
const About = () => {
  let a = useContext(NoteContext)
  useEffect(() => {
    a.update()
  });
  return (

    <>
        <h3>This is about</h3>
        {a.state.name} is in class {a.state.class}
    </>
  )
}

export default About
