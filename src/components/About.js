import React from 'react'
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className = "about-text">
      <h1>Bienvenidos to Senor Taco!</h1>
      <h3>We are a Mexican restaurant in Cypress, CA 
      dedicated to authenic Mexcan flavor and authenticity! Our menu
      has a wide range of options from quesadllas, tortas, caldos, breakfast,
      hamburgers, and much more. We are located across the street from Cypress
      college and are next to Wisdom Mission School. We offer online 
      and delivery options. Thank you for your time and we hope to 
      see you soon!</h3>
      </div>
      <div className="pics">
        <img src="../../images/taco.jpg"></img>
        <img src="../../images/fries.jpg"></img>
        <img src="../../images/quesa.jpg"></img>
      </div>
    </div>
  )
}

export default About
