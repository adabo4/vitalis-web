import React from 'react'
import dataReservations from './dataReservations.json'
import Card from "./Card"
import "./reservations.css"
import "./card.css"
import Footer from '../FOOTER/Footer'
import { useLocation } from 'react-router-dom'

export default function Reservations() {
    const location = useLocation()
    const pathway = location.pathname

    return (
        <>
            <div className="reservations-container" id='appointments'>
                <h1 className='headline'>Starostlivosť <span className='highlight'>na mieru.</span></h1>
                <p className='reservations-text'>Profesionálnym prístrojom Vám priamo v lekárni
                    zmeriame hodnotu CRP, glykovaného hemoglobínu
                    či krvného tlaku. </p>

                <div className="cards-container">
                    {dataReservations.reservations.map((reservation, index) => (

                        <Card
                            key={index}
                            heading={reservation.heading}
                            about={reservation.about}
                            timeStamp={reservation.timeStamp}
                            price={reservation.price}
                            text={reservation.text}
                            bgImg={require(`${reservation.bgImg}`)
                            } pathway={pathway}
                        />


                    ))}
                </div>

            </div>

            <Footer />
        </>
    )
}
