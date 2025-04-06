import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { useLocation, useNavigate } from 'react-router-dom';
import Recap from './Recap';
import Modal from './Modal';
import "./reservationForm.css"
import { HashLink } from 'react-router-hash-link';
import { modalData } from "./modalData"
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

export default function ReservationForm() {
    const location = useLocation();
    const navigate = useNavigate();
    const { appointmentDate, appointmentTime, formattedDate, about, price, bgImg, appointmentPathway } = location.state || {};
    const [submitted, setSubmitted] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const errormsg = "Toto pole je povinné."
    const [send, setSend] = useState("Odoslať");
    const [click, setClick] = useState(null)

    const [closeModal, setCloseModal] = useState(false)

    const service_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const template_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID_RESERVATION_FORM;
    const public_ID = process.env.REACT_APP_EMAILJS_PUBLIC_ID

    const [modalContent, setModalContent] = useState({
        title: '',
        content: '',
        onConfirm: () => { }
    });

    const resFormPathway = location.pathname
    console.log(resFormPathway)

    useEffect(() => {
        if (appointmentPathway !== "/rezervacia") {
            navigate("/vysetrenie")
        }
        return
    }, [navigate, appointmentPathway])


    const openModal = function ({ title, content, shouldNavigate = false }) {
        setModalContent({
            title,
            content,
            onConfirm: () => {
                setCloseModal(false);
                if (shouldNavigate) {

                    navigate("/vytvorenie-rezervacie", {
                        state: {
                            appointmentDate,
                            appointmentTime,
                            about,
                            price,
                            bgImg,
                            resFormPathway,
                        },
                    });
                }
            }
        });
        setCloseModal(true);
    };


    const openErrorModal = () => {
        openModal(modalData.error, { shouldNavigate: false })
    };

    const openSuccessModal = () => {
        openModal({ ...modalData.success, shouldNavigate: true });
    };

    const openCheckboxModal = () => {
        openModal(modalData.checkbox, { shouldNavigate: false })
    }


    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: ''
    });

    const [errors, setErrors] = useState({
        first_name: "",
        last_name: "",
        email: ""
    })


    const handleCheckboxChange = () => {
        setIsChecked((prevChecked) => !prevChecked);
    };

    const handleFocus = (inputName) => {
        setClick(inputName);
    };

    const handleBlur = (field, value) => {

        let error = value === "" ? errormsg : (field === "email" && !isValidEmail(value)) ? "Prosím, zadajte platnú emailovú adresu." : ""


        setErrors({ ...errors, [field]: error })
        setClick(null)

    }

    function isValidEmail(email) {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }

    const handlePrevStep = () => {
        navigate('/rezervacia', {
            state: {
                appointmentDate, appointmentTime, about, price, bgImg, resFormPathway

            }
        });
        console.log(appointmentDate, appointmentTime, about, price)
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });


        if (submitted) {
            if (name === "email" && !isValidEmail(value)) {
                setErrors((prevErrors) => ({ ...prevErrors, [name]: "Prosím, zadajte platnú emailovú adresu." }));
            } else if (value === "") {
                setErrors((prevErrors) => ({ ...prevErrors, [name]: errormsg }));
            } else {
                setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
            }
        }
    };

    const validateForm = () => {
        const newErrors = {};


        if (formData.first_name === "") {
            newErrors.first_name = errormsg;
        }


        if (formData.last_name === "") {
            newErrors.last_name = errormsg;
        }

        if (formData.email === "") {
            newErrors.email = errormsg;
        }

        setErrors(newErrors);


        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitted(true);
        setSend("Odosiela sa...")


        const templateParams = {
            date: formattedDate,
            about: about,
            price: price ? price : "Zdarma",
            time: appointmentTime,
            first_name: formData.first_name,
            last_name: formData.last_name,
            email: formData.email
        };

        const isFormValid = validateForm();

        const resetFormState = function () {
            setFormData({
                first_name: '',
                last_name: '',
                email: ''
            });
            setSubmitted(false);
            setSend("Odoslať")
            setIsChecked(false)

        }

        const handleFormErrors = function (callback) {

            if (callback) callback();
            resetFormState()
        }

        if (!about) {
            handleFormErrors();
            return;
        }

        if (!isChecked) {
            openCheckboxModal()
            setSend("Odoslať")
            return;
        }

        if (!isFormValid) {
            setSubmitted(false)
            setSend("Odoslať")
            return
        }

        // emailjs.send(
        //     process.env.REACT_APP_EMAILJS_SERVICE_ID,     // EmailJS service ID
        //     process.env.REACT_APP_EMAILJS_TEMPLATE_ID,    // EmailJS template ID
        //     templateParams,
        //     process.env.REACT_APP_EMAILJS_PUBLIC_ID      // Your public EmailJS user ID
        // )




        emailjs.send(service_ID, template_ID, templateParams, public_ID)

            .then(async (res) => {
                const appointmentRef = collection(db, 'reservations');
                await addDoc(appointmentRef, {
                    first_name: formData.first_name,
                    last_name: formData.last_name,
                    email: formData.email,
                    appointmentTime,
                    date2: formattedDate,
                    about,
                    price: price ? price : "Zdarma",
                    createdAt: new Date(),
                    secretKey: process.env.REACT_APP_FIREBASE_SECRET_KEY // Add secret key
                });
                openSuccessModal();
                resetFormState();
            })
            .catch((err) => {
                console.error("Nastala chyba v odoslaní mailu.", err);
                openErrorModal();
                resetFormState();
            });

    }





    return (
        <section className='reservation-form'>

            {closeModal && <Modal setCloseModal={setCloseModal}
                title={modalContent.title}
                content={modalContent.content}
                onConfirm={modalContent.onConfirm}></Modal>}

            <div className='recap-cont'>
                <Recap price={price} about={about} formattedDate={formattedDate} appointmentTime={appointmentTime}></Recap>

            </div>


            <div className='res-form-container'>
                <form className='res-form' onSubmit={handleSubmit}>
                    <h2>Rezervačný formulár</h2>
                    <div className={click === 'first_name' || formData.first_name ? "form-change-group anim-effect filled focus" : "form-change-group anim-effect"}>
                        <label className='form-change-label' htmlFor='first_name'>Meno:*</label>
                        <input
                            className='form-change'
                            type="text"
                            name="first_name"
                            id='first_name'
                            value={formData.first_name}
                            onChange={handleInputChange}
                            onBlur={() => handleBlur("first_name", formData.first_name)}
                            onFocus={() => handleFocus("first_name")}

                        />
                        <label className='error-msg'>{errors.first_name}</label>
                    </div>

                    <div className={click === 'last_name' || formData.last_name ? "form-change-group anim-effect filled focus" : "form-change-group anim-effect"}>
                        <label className='form-change-label' htmlFor='last_name'>Priezvisko:*</label>
                        <input
                            className='form-change'
                            type="text"
                            name="last_name"
                            id='last_name'
                            value={formData.last_name}
                            onChange={handleInputChange}
                            onBlur={() => handleBlur("last_name", formData.last_name)}
                            onFocus={() => handleFocus("last_name")}

                        />
                        <label className='error-msg'>{errors.last_name}</label>
                    </div>
                    <div className={click === 'email' || formData.email ? "form-change-group anim-effect filled focus" : "form-change-group anim-effect"}>
                        <label className='form-change-label' htmlFor='email'>Váš email:*</label>
                        <input
                            className='form-change'
                            type="email"
                            name="email"
                            id='email'
                            value={formData.email}
                            onChange={handleInputChange}
                            maxLength={255}
                            onBlur={() => handleBlur("email", formData.email)}
                            onInput={(e) => e.target.setCustomValidity("")}
                            onInvalid={(e) => e.target.setCustomValidity("Prosím, zadajte platnú emailovú adresu.")}
                            onFocus={() => handleFocus("email")}
                        />
                        <label className='error-msg'>{errors.email}</label>
                    </div>

                    <div className='res-form-checkbox'>
                        <input type="checkbox" id='res-form-check-gdpr' checked={isChecked} onChange={handleCheckboxChange} />
                        <label htmlFor="res-form-check-gdpr">Vložením správy súhlasíte s <HashLink to="/gdpr#gdpr" spy={true} smooth={true} offset={50} duration={500} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}> Podmienkami ochrany osobných údajov.</HashLink></label>
                    </div>
                    <button type="submit" className='send-res'>{send}</button>

                </form>
            </div >



            <div className='buttons'>
                <div>
                    <button className='btn-prev' onClick={handlePrevStep}>
                        Späť
                    </button>
                </div>
            </div>

            <div className='bgImg' style={{
                backgroundImage: `url(${bgImg})`,

            }}>
            </div>



        </section>

    )
}
