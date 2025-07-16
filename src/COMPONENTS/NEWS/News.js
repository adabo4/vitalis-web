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

                    <p ref={addToRefs} className='new slide-in'>Dňa 21.07.2025 od 10:00 - 16:00 hod. bude v Dermocentre Vitalis prebiehať PROMO AKCIA na kozmetiku Avène, A-Derma, Ducray a Klorane,
                        spojená s diagnostikou pleti. Samozrejmosťou budú aj zľavy na každý jeden produkt.
                    </p>



                    {/* <div className='terezia'>
                        <p ref={addToRefs} className='slide-in'>Príďte na špeciálnu promo akciu TEREZIA COMPANY - 20.05.2025 -
                            kde objavíte prírodné produkty pre Vaše zdravie a krásu!
                            Získajte odborné poradenstvo a výhodné zľavy na produkty.
                            Terezia je český výrobca prírodných doplnkov stravy zo zdraviu prospešných húb a rastlín bez konzervačných látok.
                        </p>
                        <img src={tereziaimg} alt="Terezia Company" />
                    </div> */}
                </div>

            </div>
        </>
    )
}
