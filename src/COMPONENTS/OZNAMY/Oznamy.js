import React from 'react'
import "./oznamy.css";
import useScrollIn from '../helpers/useScrollIn';

export default function Oznamy() {
    const addToRefs = useScrollIn()
    return (

        <>
            <div className='oznamy-container'>
                <div className="oznamy">
                    <div className="oznamy-header">
                        <h1>OZNAMY</h1>
                    </div>
                    <p ref={addToRefs} className='slide-in'>Dňa 22.7. 2024 od 10:00 - 16:00 hod. bude v Dermocentre Vitalis prebiehať PROMO AKCIA na kozmetiku Avène, A-Derma, Ducray a Klorane,
                        spojená s diagnostikou pleti. Samozrejmosťou budú aj zľavy na každý jeden produkt.
                    </p>


                </div>

            </div>

        </>


    )
}
