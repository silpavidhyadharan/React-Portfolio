import React from 'react'
import Topnavbar from './pages/Topnavbar'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import Skills from './pages/Skills'
import Contact from './pages/Contact'


function App() {

  const user = {
  "name" : "Silpa Vidhyadharan",
  "age" : 21,
  "place" : "idukki",
  "course" : "BCA",
  "contact" : 9889876767,
  "email" : "Silpavidhyadharan@gmail.com",
}

const skills = {
  "sub1" : "Python",
  "sub2" : "Django",
  "sub3" : "HTML &  CSS",
  "sub4" : "JavaScript",
  "sub5" : "React (Learning)"
}

  return (
    <div>
      <Topnavbar></Topnavbar>
      <Home></Home>
      <About data={user}></About>
      <Project></Project>
      <Skills user={skills} data={percentage}></Skills>
      <Contact></Contact>

    </div>
  )
}

export default App
