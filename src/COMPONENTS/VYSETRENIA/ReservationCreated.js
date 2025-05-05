import React from 'react';
import { useLocation } from 'react-router-dom';
import Recap from './Recap';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



export default function ReservationCreated() {
    const location = useLocation();
    const navigate = useNavigate();
    const { appointmentTime, formattedDate, about, price, resFormPathway } = location.state || {};

    useEffect(() => {
        if (resFormPathway !== "/rezervacny-formular") {
            navigate("/vysetrenie")
        }
        return
    }, [navigate, resFormPathway])
    return (
        <>

            <div className='recap-cont'>
                <Recap price={price} about={about} formattedDate={formattedDate} appointmentTime={appointmentTime}></Recap>

            </div>
        </>
    )
}
