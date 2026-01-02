import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';


function Skills() {
  return (
    <div>
      <h1 id='skills' style={{textAlign:"center",fontSize:"40px",paddingTop:"30px",fontFamily:"fangsong"}}>Skills</h1>
      <div style={{width:"900px", color: "Black",marginLeft:"200px" }}>

      <h4>Python</h4>
      <ProgressBar striped variant="success" now={80} label="80%" />
      <br />

      <h4>Django</h4>
      <ProgressBar striped variant="info" now={70} label="70%" />
      <br />

      <h4>HTML & CSS</h4>
      <ProgressBar striped variant="warning" now={75} label="75%" />
      <br />

      <h4>JavaScript</h4>
      <ProgressBar striped variant="danger" now={60} label="60%" />
      <br />

      <h4>React (Learning)</h4>
      <ProgressBar striped variant="primary" now={40} label="40%" />

    </div>
    </div>
    
  )
}

export default Skills
