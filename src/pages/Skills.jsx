import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';


function Skills({user}) {
  return (
    <div>
      <h1 id='skills' style={{textAlign:"center",fontSize:"40px",paddingTop:"30px",fontFamily:"fangsong"}}>Skills</h1>
      <div style={{width:"900px", color: "Black",marginLeft:"200px" }}>

      <h4>{user.sub1}</h4>
      <ProgressBar striped variant="success" now={80} label="80%" />
      <br />

      <h4>{user.sub2}</h4>
      <ProgressBar striped variant="info" now={70} label="70%" />
      <br />

      <h4>{user.sub3}</h4>
      <ProgressBar striped variant="warning" now={75} label="75%" />
      <br />

      <h4>{user.sub4}</h4>
      <ProgressBar striped variant="danger" now={60} label="60%" />
      <br />

      <h4>{user.sub5}</h4>
      <ProgressBar striped variant="primary" now={40} label="40%" />

    </div>
    </div>
    
  )
}

export default Skills
