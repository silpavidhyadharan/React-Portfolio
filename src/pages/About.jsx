import React from 'react'

function About() {
  return (
    <div>
      <h1 id='about' style={styles.h}></h1>
      <div style={{ display: "flex" }}>
        <div style={{ width: "700px", height: "500px", backgroundColor: "#bdb7b7", marginLeft: "20px", textAlign: "center", paddingTop: '20px' }}>
          <h1>About Me</h1>
          <p style={styles.p}>I am a beginner Python Django full-stack developer who enjoys learning and building web applications. I like understanding how websites work on both the frontend and backend, and I believe learning through projects helps me improve my skills.

            I have knowledge of Python basics and Django, including models, views, templates, forms, user authentication, and basic CRUD operations. For frontend development, I use HTML, CSS, Bootstrap, and JavaScript, and I am currently learning React to build better user interfaces.

            I have worked on a project called GarboConnect (Garbage Management System), where users can request waste pickup, register complaints, and track their status, while admin and staff manage and update the work progress.

            I am a motivated learner, improving my technical and English communication skills every day, and I am looking for an opportunity to start my  career and grow as a developer.</p>
        </div>
        <div style={{ width: "700px", height: "500px", backgroundColor: "white", marginLeft: "60px" }}>
        <img src="https://i.pinimg.com/736x/13/34/a7/1334a743750bd7685cbeb74c81098649.jpg" width={'500px'} alt="no image" />
        </div>
      </div>
    </div>
  )
}

export default About

const styles = {
  p: {
    paddingLeft: "40px",
    paddingRight: "40px",
    fontFamily: "cursive",
  },

  h: {
    fontFamily: "Fantacy"
  }
}


