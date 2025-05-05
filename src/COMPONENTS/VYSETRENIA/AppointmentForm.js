import React, { useState } from 'react';
import 'flatpickr/dist/themes/material_green.css';
import Flatpickr from 'react-flatpickr';
import { Slovak } from 'flatpickr/dist/l10n/sk';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "./appointmentForm.css"
import Recap from './Recap';
import { IoInformationCircleSharp } from "react-icons/io5";
import { db } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

const AppointmentForm = () => {
    const [appointmentDate, setAppointmentDate] = useState(null);
    const [appointmentTime, setAppointmentTime] = useState('');
    const [reserveDate, setReserveDate] = useState(false);

    const [step, setStep] = useState(1);
    const navigate = useNavigate();
    const routerLocation = useLocation();
    const { appointmentTime: oldTime, about, price, bgImg, pathway: reservationPathway, resFormPathway } = routerLocation.state || {};
    const appointmentPathway = routerLocation.pathname
    const [bookedTimes, setBookedTimes] = useState([]);

    useEffect(() => {
        if (resFormPathway === "/rezervacny-formular") {
            return;
        }
        if (reservationPathway !== "/vysetrenie") {
            navigate("/vysetrenie");
        }
    }, [navigate, reservationPathway, resFormPathway]);




    const setDate = function (date) {
        setAppointmentDate(date[0])
        setReserveDate(true);
    }

    const timeOptions = ["9:30", "10:30", "11:00", "13:30"];

    const date = new Date();
    const currentHour = date.getHours();
    const currentMinute = date.getMinutes();
    const currentDate = `${date.getDate()}. ${(date.getMonth() + 1).toString().padStart(2, "0")}. ${date.getFullYear()}`



    const formattedDate = appointmentDate
        ? new Intl.DateTimeFormat('sk-SK', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        }).format(appointmentDate)
        : 'No date selected';




    const isToday = currentDate === formattedDate

    useEffect(() => {
        if (formattedDate !== 'No date selected') {
            fetchBookedTimes(formattedDate);
        }
    }, [formattedDate]);

    const fetchBookedTimes = async (selectedDate) => {
        try {
            const q = query(
                collection(db, 'reservations'),
                where('date2', '==', selectedDate) // Ensure this matches your Firestore date format
            );
            const querySnapshot = await getDocs(q);
            const bookedTimes = querySnapshot.docs.map((doc) => doc.data().appointmentTime);
            setBookedTimes(bookedTimes);

        } catch (error) {
            console.error('Error fetching booked times:', error);
            setBookedTimes([]);
        }
    };

    useEffect(() => {
        if (routerLocation.state) {
            const { appointmentDate: passedDate, appointmentTime: passedTime } = routerLocation.state;
            if (passedDate) {
                setAppointmentDate(new Date(passedDate));
            }
            setAppointmentTime(passedTime || '');
        }
    }, [routerLocation.state]);



    const handleNextStep = () => {

        if (appointmentDate && appointmentTime) {
            setStep(2);
            navigate('/rezervacny-formular', {
                state: {
                    appointmentTime,
                    appointmentDate,
                    formattedDate,
                    about,
                    price,
                    bgImg,
                    appointmentPathway
                }
            });

        }

    };

    const handlePrevStep = () => {
        navigate('/vysetrenie')

    };

    const availableTimeOptions = timeOptions.filter(
        (option) => !bookedTimes.includes(option)
    );


    return (
        <>
            <div className="appointment-container">
                {step === 1 && (
                    <section>
                        <div className="reserv-container">
                            <div className='reserve-date'>
                                <Flatpickr
                                    className='calendar'
                                    value={appointmentDate}
                                    placeholder='Zvoľte deň vyšetrenia'
                                    onChange={(date) => setDate(date)}
                                    options={{
                                        disable: [function (date) {

                                            return (date.getDay() === 0 || date.getDay() === 6);

                                        }, "2024-12-24", "2024-12-25", "2024-12-26", "2025-05-08", "2025-07-05"], locale: Slovak, altInput: true, altFormat: "j. F Y", dateFormat: 'd.m.Y', minDate: 'today', maxDate: new Date().fp_incr(30)
                                    }}
                                />
                            </div>


                            {(reserveDate || oldTime) && <div className='reserve-time'>
                                <div className="box">
                                    <select className='btn-time'
                                        value={appointmentTime}
                                        onChange={(e) => setAppointmentTime(e.target.value)}
                                        required
                                    >
                                        <option value="">Zvoľte čas vyšetrenia</option>

                                        {availableTimeOptions.map((option, i) => {
                                            const [optionHour, optionMinute] = option.split(":").map(Number)

                                            const disableOption = isToday && (
                                                optionHour < (currentHour + 1) ||
                                                (optionHour === currentHour && optionMinute <= currentMinute)
                                            )

                                            return (

                                                <option
                                                    className={disableOption ? "disabled" : ""}
                                                    key={i}
                                                    disabled={disableOption}
                                                    value={option}>{disableOption ? " -- " : option}</option>
                                            )

                                        })}
                                    </select>
                                </div>
                            </div>}
                        </div>
                        {/* <div className='recap'>
                            <h2>Rezervovaná služba.</h2>
                            <h3>{about}</h3>
                            <div className='recap-info'>
                                <div className='i'>
                                    <p>Cena:</p><p>{price ? price : "Zdarma"}</p>
                                </div>
                                <div>
                                    <p>Dĺžka trvania:</p>
                                    <p>max. 30 minút</p>
                                </div>
                            </div>

                            <div className='recap-msg'>
                                <IoInformationCircleSharp />
                                <p className='message'>Za vyšetrenie zaplatíte v lekárni.</p>
                            </div>
                        </div> */}

                        <Recap price={price} about={about}></Recap>


                    </section>
                )}

            </div>

            <div className='buttons'>
                <div>
                    <button className='btn-prev' onClick={handlePrevStep}>
                        Späť
                    </button>
                    <button className='btn-next tooltip-container' onClick={handleNextStep} disabled={!appointmentDate || !appointmentTime || !about}>
                        Ďalej
                        {(!appointmentDate || !appointmentTime || !about) &&
                            <div className="tooltip">
                                {!appointmentDate && <p><IoInformationCircleSharp />Vyberte dátum</p>}
                                {!appointmentTime && <p><IoInformationCircleSharp />Vyberte čas</p>}
                                {!about && <p><IoInformationCircleSharp />Zvoľte krok Spät a vyberte druh vyšetrenia.</p>}
                            </div>
                        }
                    </button>


                </div>
            </div>

            <div className='bgImg' style={{
                backgroundImage: `url(${bgImg})`,

            }}>
            </div>
        </>
    );
};

export default AppointmentForm;
