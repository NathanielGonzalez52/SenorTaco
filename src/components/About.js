import React from 'react'
import "./About.css";
import { useEffect } from "react";
var scrollToElement = require("scroll-to-element");


function About() {

  useEffect(() => {
    scrollToElement();
  }, []);

  const scrolltoElement = () => {
    const element = document.getElementById("hook");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start"});
    }
  };

  return (
    <>
    <h1 id="hook" className="welcome">Bienvenidos to Senor Taco!</h1>
    <div className="about">

      <div className = "about-text">
      <h5>We are a Mexican restaurant in Cypress, CA 
      dedicated to authenic Mexcan flavor and authenticity! Our menu
      has a wide range of options from quesadllas, tortas, caldos, breakfast,
      hamburgers, and much more. We are located across the street from Cypress
      college and are next to Wisdom Mission School. We offer online 
      and delivery options. Thank you for your time and we hope to 
      see you soon!</h5>
      </div>
      <div className="pics">
        <img className="food" src="../../images/taco.jpg"></img>
        <img className="food" src="../../images/fries.jpg"></img>
        <img className="food" src="../../images/quesa.jpg"></img>
      </div>
    </div>
    </>
  )
}

export default About;
