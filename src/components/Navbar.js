import React, { useState } from 'react';
import './Navbar.css';
import {Link} from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };


  // if you want to use "useEffect" you will have to add it to the useState 
  // useEffect(() => {
  //   showButton();
  // }, []);

  // window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
        <Link><img className="logo" src="../../images/senor_taco.png"
        alt="logo"></img></Link>
          {/* <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            TRVL
            <i class='fab fa-typo3' />
          </Link> */}
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/menu'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Menu
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;








// import "./Navbar.css";
// function Navbar() {
    
// return (


// <nav className="navbar navbar-expand-xl sticky-top navbar-custom">
// <div className="container-fluid">
//   <Link className="header navbar-brand" href="index.html"><img className="logo" src="../../images/senor_taco.png"
//    alt="logo"></img></Link>
//   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>


//   <div className="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
//       <li className="nav-item special">
//         <Link className="nav-a" aria-current="page" href="#top">Home</Link>
//       </li>
//       <li className="nav-item">
//         <Link className="nav-a" href="#event-sec">Events</Link>
//       </li>
//       <li className="nav-item">
//         <Link className="nav-a" href="#contact-us">About Us</Link>
//       </li>
//     </ul>

//   </div>
// </div>
// </nav>

// );
// }