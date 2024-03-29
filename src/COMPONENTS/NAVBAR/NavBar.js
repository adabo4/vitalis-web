import React, { useState } from 'react'
import './navbar.css'
import logo from '../img/Vitalis_logogood-removebg-preview.png'
import { GiHamburgerMenu } from 'react-icons/gi'

import { HashLink } from 'react-router-hash-link';

const NavBar = ({ setShowLetakPartner, setShowPoukazky }) => {
  const [show, setShow] = useState(false)

  const customStyle = {

    textDecoration: "none",
    color: "var(--hover-color)",
    opacity: "var(--hover-opacity)"

  }
  // const scrollToSection = (e) => {
  //   e.preventDefault();


  //   const targetId = e.currentTarget.getAttribute('to').substring(1);
  //   const targetSection = document.getElementById(targetId);

  //   if (targetSection) {
  //     targetSection.scrollIntoView({
  //       behavior: 'smooth',
  //     });
  //   }
  // };

  // function showit() {
  //   setShowLetakPartner(true);
  //   scrollToSection();

  // }

  return (

    <div className='nav-container' id='navbar'>
      <div className='nav-left'>
        <img src={logo} alt=""></img>

        <h2>
          <GiHamburgerMenu onClick={() => setShow(!show)} />
        </h2>
      </div>
      <ul className={`${show ? "nav-list show" : "nav-list hide"}`}>
        <li><HashLink to="/" style={customStyle} spy={true} smooth={true} offset={50} duration={500}>Domov</HashLink></li>
        <li><HashLink to="/onas#onas" style={customStyle} spy={true} smooth={true} offset={50} duration={500}>O Nás</HashLink></li>
        <li><HashLink to="/dermocentrum#dermocentrum" style={customStyle} spy={true} smooth={true} offset={50} duration={500}>Dermocentrum</HashLink></li>
        <li><HashLink to="/letak#letak" style={customStyle} onClick={() => setShowLetakPartner(true)} spy={true} smooth={true} offset={50} duration={500} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
          Leták</HashLink></li>
        {/* <li><Link to={"/kontakt#kontakt"} onClick={() => showit()}>kon</Link></li> */}
        <li><HashLink to="/poukazky#poukazky" style={customStyle} onClick={() => { setShowPoukazky(true) }} spy={true} smooth={true} offset={50} duration={500} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Poukážky</HashLink></li>
        <li><HashLink to="/kontakt#kontakt" style={customStyle} spy={true} smooth={true} offset={50} duration={500}>Kontakt</HashLink></li>


      </ul>
    </div>
  )
}

export default NavBar