import React from 'react'
import bg from '../assets//images/back2.jpg'
function Home() {

  const name = "Silpa Vidhyadharan"
  const desination = "Python Full Stack developer"
  return (
    <div>
    <div style={{backgroundImage:`url(${bg})`,
    height:"700px",
    backgroundSize:"cover",
    backgroundPosition:"center",
    paddingTop:"300px",
    textAlign : "center"
    }}>
      <h1 id='home' style={style.h1}>Hi I'm {name}</h1>
      <p style={style.p}>{desination}</p>
    </div>

    
    </div>
  )
}

export default Home
const style = {
  h1 : {
    fontSize:"40px",
    color : "white",
    paddingRight : "700px",
  },
  p : {
    color : "white",
    fontFamily : "cursive",
    paddingRight : "700px",

  }
}
