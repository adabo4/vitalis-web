import './footer.css'
import { AiOutlineHome } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react'
import { HashLink } from 'react-router-hash-link';


export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  const service_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const template_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID_CONTACT_FORM;
  const public_ID = process.env.REACT_APP_EMAILJS_PUBLIC_ID;
  const form = useRef();
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState({
    user_name: "",
    user_email: "",
    message: ""
  })

  function isValidEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }

  const [errors, setErrors] = useState({
    user_name: "",
    user_email: "",
    message: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value

    })
  }

  const handleCheckboxChange = () => {
    setIsChecked((prevChecked) => !prevChecked);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (isChecked) {
      let newErrors = {};

      if (values.user_name === "") {
        newErrors = {
          ...newErrors,
          user_name: "Prosím zadajte meno."
        };
      }
      if (values.user_email === "" || !isValidEmail(values.user_email)) {
        newErrors = {
          ...newErrors,
          user_email: "Prosím zadajte email v správnom formáte."
        };
      }

      if (values.message === "") {
        newErrors = {
          ...newErrors,
          message: "Prosím zadajte text správy."
        };
      }

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
      }
      else {
        setIsLoading(true);
        emailjs.sendForm(service_ID, template_ID, form.current, public_ID)
          .then((result) => {
            console.log(result.text);
            alert("Email bol odoslaný.")
          },
            (error) => {
              console.log(error.text);
              alert("Vyskytol sa problém s odoslaním mailu. Na odstránení sa pracuje.");
            })
          .finally(() => {
            setIsLoading(false);
            setValues({
              ...values,
              user_name: "",
              user_email: "",
              message: ""
            });
            setErrors({});
          });
      }
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
                <div className="input-wrapper">
                  <input type="text" className={errors.user_name ? "error-border" : ""} placeholder='Meno' name='user_name' value={values.user_name} onChange={handleChange} onBlur={
                    () => {
                      if (values.user_name === "") {
                        setErrors({
                          ...errors,
                          user_name: "Prosím zadajte meno."
                        })
                      } else {
                        setErrors({
                          ...errors,
                          user_name: ""
                        })
                      }
                    }
                  }>
                  </input>
                  <label className='error-label'>{errors.user_name}</label>
                </div>
                <div className="input-wrapper">
                  <label className='error-label'>{errors.user_email}</label>
                  <input type="text" className={errors.user_email ? "error-border" : ""} placeholder='Email' name='user_email' value={values.user_email} onChange={handleChange} onBlur={
                    () => {
                      if (values.user_email === "" || !isValidEmail(values.user_email)) {
                        setErrors({
                          ...errors,
                          user_email: "Prosím zadajte email v správnom formáte."

                        })
                      } else {
                        setErrors({
                          ...errors,
                          user_email: ""
                        })
                      }
                    }
                  }>
                  </input>
                </div>
              </div>
              <div className="textarea-wrapper">
                <textarea className={errors.message ? "form-textarea error-border" : "form-textarea"} rows="8" placeholder='' name='message' value={values.message} onChange={handleChange} onBlur={
                  () => {
                    if (values.message === "") {
                      setErrors({
                        ...errors,
                        message: "Prosím zadajte text správy."
                      })
                    } else {
                      setErrors({
                        ...errors,
                        message: ""
                      })
                    }
                  }
                }></textarea>
                {errors.message && <label className='error-label-text'>{errors.message}</label>}
              </div>

              <div className="form-checbox">
                <input type="checkbox" id='check-gdpr' checked={isChecked} onChange={handleCheckboxChange} />
                <label htmlFor="check-gdpr">Vložením správy súhlasíte s <HashLink to="/gdpr#gdpr" spy={true} smooth={true} offset={50} duration={500} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}> Podmienkami ochrany osobných údajov.</HashLink></label>
              </div>
              <button>{isLoading ? "Odosiela sa" : "Odoslať"}</button>
            </form>
          </div>
        </div >
      </div >

      <div className="subfooter">
        <ul>
          <li><HashLink to="/gdpr#gdpr" spy={true} smooth={true} offset={50} duration={500} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Ochrana súkromia</HashLink><span>|</span></li>
          <li><HashLink to="/cookies#cookies" spy={true} smooth={true} offset={50} duration={500} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Cookies</HashLink><span>|</span></li>
          <li className='right'>Lekáreň Vitalis {year}</li>
        </ul>
      </div>

    </>
  )
}

