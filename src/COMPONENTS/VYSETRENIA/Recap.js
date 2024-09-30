import React from 'react'
import { IoInformationCircleSharp } from "react-icons/io5";

export default function Recap({ about, price, formattedDate, appointmentTime }) {
    return (
        <>
            <div className='recap'>
                <h2>Rezervovaná služba</h2>
                <h3>{about}</h3>
                <div className='recap-info'>
                    <div className='i'>
                        <p>Cena:</p><p>{price ? price : "Zdarma"}</p>
                    </div>
                    <div>
                        <p>Dĺžka trvania:</p>
                        <p>max. 30 minút</p>
                    </div>
                    <div>
                        <p>{formattedDate ? `Dátum vyšetrenia:` : ""}</p>
                        <p>{formattedDate ? `${formattedDate}` : ""}</p>
                    </div>
                    <div>
                        <p>{appointmentTime ? `Čas vyšetrenia:` : ""}</p>
                        <p>{appointmentTime ? `${appointmentTime}` : ""}</p>
                    </div>
                </div>

                {price && <div className='recap-msg'>
                    <IoInformationCircleSharp />
                    <p className='message'>Za vyšetrenie zaplatíte v lekárni.</p>
                </div>}
            </div>
        </>
    )
}
