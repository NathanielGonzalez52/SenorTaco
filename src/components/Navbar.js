import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <a to='/' className='navbar-logo' onClick={closeMobileMenu}>
            TRVL
            <i class='fab fa-typo3' />
          </a>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <a to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </a>
            </li>
            <li className='nav-item'>
              <a
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </a>
            </li>

            <li>
              <a
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </a>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
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
//   <a className="header navbar-brand" href="index.html"><img className="logo" src="../../images/senor_taco.png"
//    alt="logo"></img></a>
//   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>


//   <div className="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
//       <li className="nav-item special">
//         <a className="nav-a" aria-current="page" href="#top">Home</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-a" href="#event-sec">Events</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-a" href="#contact-us">About Us</a>
//       </li>
//     </ul>

//   </div>
// </div>
// </nav>

// );
// }