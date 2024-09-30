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

  const letakClick = () => {
    window.gtag('event', 'link_click', {
      'event_category': 'Navigation',
      'event_label': 'Letak Link Clicked'
    });
    setShowLetakPartner(true)

  };
  const navClick = (category, action) => {
    window.gtag('event', 'link_click', {
      'event_category': category,
      'event_label': action
    });


  };

  const poukazkyClick = () => {
    window.gtag('event', 'link_click', {
      'event_category': 'Navigation',
      'event_label': 'Poukážky Link Clicked'
    });
    setShowPoukazky(true)

  };




  return (

    <div className='nav-container' id='navbar'>
      <div className='nav-left'>
        <img src={logo} alt=""></img>

        <h2>
          <GiHamburgerMenu onClick={() => setShow(!show)} />
        </h2>
      </div>
      <ul className={`${show ? "nav-list show" : "nav-list hide"}`}>
        <li><HashLink to="/" onClick={() => navClick("Navigation", "Home link clicked")} style={customStyle} spy={true} smooth={true} offset={50} duration={500}>Domov</HashLink></li>
        <li><HashLink to="/onas#onas" onClick={() => navClick("Navigation", "O nás link clicked")} style={customStyle} spy={true} smooth={true} offset={50} duration={500}>O Nás</HashLink></li>
        <li><HashLink to="/dermocentrum#dermocentrum" onClick={() => navClick("Navigation", "Dermocentrum link clicked")} style={customStyle} spy={true} smooth={true} offset={50} duration={500}>Dermocentrum</HashLink></li>
        <li><HashLink to="/letak#letak" style={customStyle} onClick={letakClick} spy={true} smooth={true} offset={50} duration={500} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
          Leták</HashLink></li>
        {/* <li><Link to={"/kontakt#kontakt"} onClick={() => showit()}>kon</Link></li> */}
        <li><HashLink to="/poukazky#poukazky" style={customStyle} onClick={poukazkyClick} spy={true} smooth={true} offset={50} duration={500} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Poukážky</HashLink></li>
        <li><HashLink style={customStyle} to="/vysetrenie#appointments">Vyšetrenia v lekárni</HashLink></li>
        <li><HashLink to="/kontakt#kontakt" onClick={() => navClick("Navigation", "Kontakt link clicked")} style={customStyle} spy={true} smooth={true} offset={50} duration={500}>Kontakt</HashLink></li>

      </ul>
    </div>
  )
}

export default NavBar