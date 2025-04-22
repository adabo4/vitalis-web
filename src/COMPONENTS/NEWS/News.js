import React from 'react'
import "./news.css";
import useScrollIn from '../helpers/useScrollIn';

export default function News() {
    const addToRefs = useScrollIn()
    return (
        <>
            <div className='news-container' id='news'>
                <div className="news">
                    <div className="news-header">
                        <h1>AKTUALITY</h1>
                    </div>
                    <p ref={addToRefs} className='slide-in'>Dňa 15.04. 2025 od 10:00 - 16:00 hod. bude v Dermocentre Vitalis prebiehať PROMO AKCIA na kozmetiku Avène, A-Derma, Ducray a Klorane,
                        spojená s diagnostikou pleti. Samozrejmosťou budú aj zľavy na každý jeden produkt.
                    </p>
                </div>

            </div>
        </>
    )
}
