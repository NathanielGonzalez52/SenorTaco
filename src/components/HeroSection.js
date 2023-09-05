import React from "react";
import "./HeroSection.css";
import "../App.css";

function HeroSection() {
    return (
        <div className = "hero-container">
        <img className = "hero" src="../../images/taquitos.jpg"></img>
        <img className = "hero" src="../../images/wet_burrito3.jpg"></img>
        <img className = "hero" src="../../images/tacos_display.jpg"></img>

        {/* background: url("../../public/images/taquitos.jpg") left, url("../../public/images/wet_burrito3.jpg") center, url("../../public/images/tacos_display.jpg") right; */}
        </div>
    )
}

export default HeroSection;