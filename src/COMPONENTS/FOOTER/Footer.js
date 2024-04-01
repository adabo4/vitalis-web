import React from 'react'

import './footer.css'
import { AiOutlineHome } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react'
import { HashLink } from 'react-router-hash-link';


const Footer = () => {

  const date = new Date();
  const year = date.getFullYear();

  const form = useRef();
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((prevChecked) => !prevChecked);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (isChecked) {
      emailjs.sendForm('service_9074cvj', 'template_y9nldqv', form.current, 'pruYGhF--wK7yAfB_')
        .then((result) => {
          console.log(result.text);
          alert("Email bol odoslaný.")

        }, (error) => {
          console.log(error.text);
          alert("Vyskytol sa problém s odoslaním mailu. Na odstránení sa pracuje.");
        });
      e.target.reset()
    } else {
      alert('Na úspešné odoslanie formulára prosím zaškrtnite Súhlas so spracovaním osobných údajov.');
    };

  }





  return (
    <>
      <div className='footer-container' id='kontakt'>
        <div className='footer-box'>

          <iframe
            id='map'
            className='map'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2650.1969577576647!2d17.584933215067394!3d48.37595264250809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476ca080f47889eb%3A0x79afb8eac30f9300!2sTrhov%C3%A1%207435%2F4%2C%20917%2001%20Trnava!5e0!3m2!1ssk!2ssk!4v1679416855562!5m2!1ssk!2ssk"
            width="450"
            height="400"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            title='Vitalis Mapa'

          >
          </iframe>

          <div className='footer-right'>
            <h1><AiOutlineHome /> Trhová 7435/4, 917 01 Trnava  </h1>
            <h3>Otvorené: Pondelok - Piatok: 8:00 - 17:00 </h3>
            <p> Telefón: <a href='tel:033/ 593 60 43'>033/ 593 60 43</a> </p>
            <p> Dermocentrum: <a href='tel:033/ 544 55 46'>033/ 544 55 46</a> </p>
            <p>Email : <a href='mailto:lekarenvitalis@gmail.com'>lekarenvitalis@gmail.com</a> </p>
            <div className='linkfb'>
              <a href='https://www.facebook.com/profile.php?id=100057504068840' target='blank' ><BsFacebook /></a>
            </div>

            <h2>Kontaktujte nás</h2>

            <form className='formular' ref={form} onSubmit={sendEmail}>
              <div className='form-inputs'>
                <input type="text" placeholder='Meno' name='user_name' required></input>
                <input type="text" placeholder='Email' name='user_email' required></input>
              </div>
              <textarea rows="8" placeholder='' name='message' required />

              <div className="form-checbox">
                <input type="checkbox" id='check-gdpr' checked={isChecked} onChange={handleCheckboxChange} />
                <label htmlFor="check-gdpr">Vložením správy súhlasíte s <HashLink to="/gdpr#gdpr" spy={true} smooth={true} offset={50} duration={500} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}> Podmienkami ochrany osobných údajov.</HashLink></label>
              </div>
              {/* <p>Vložením správy súhlasíte s <HashLink to="/gdpr#gdpr">podmienkami ochrany osobných údajov.</HashLink></p> */}

              <button>Odoslať</button>
            </form>
          </div>
        </div >


      </div >
      <div className="subfooter">
        <ul>
          <li><HashLink to="/gdpr#gdpr" spy={true} smooth={true} offset={50} duration={500} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Ochrana súkromia</HashLink><span>|</span></li>
          <li> <HashLink to="/cookies#cookies" spy={true} smooth={true} offset={50} duration={500} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Cookies</HashLink><span>|</span></li>
          <li className='right'>Lekáreň Vitalis {year}</li>

        </ul>
      </div>

    </>
  )
}

export default Footer