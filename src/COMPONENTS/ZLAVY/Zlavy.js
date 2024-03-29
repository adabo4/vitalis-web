import React from "react";
import './zlavy.css';

import zlavyimg from "./zlavyimg";





const Zlavy = () => {
    return (
        <div className='akcie-container' id='zlavy'>
            <div className='zlavy-container'>

                <div className='zlavy-header'>
                    <h1>AKTUÁLNE ZĽAVY</h1>

                </div>

                <div className="zlavy-images">
                    {
                        zlavyimg.map((item, i) => {
                            return (
                                <a key={item.id} href={item.src} target="_blank" rel="noreferrer"><img src={item.url} alt={item.alt}></img></a>
                            )


                        })
                    }
                </div>


                <div className="oznamy">
                    <div className="oznamy-header">
                        <h1>OZNAMY</h1>
                    </div>
                    <p>Dňa 18.3. 2024 od 10:00 - 16:00 hod. bude v Dermocentre Vitalis prebiehať PROMO AKCIA na kozmetiku Avène, A-Derma, Ducray a Klorane,
                        spojená s diagnostikou pleti. Samozrejmosťou budú aj zľavy na každý jeden produkt.
                    </p>
                    <h2>Tešíme sa na Vás!</h2>

                </div>

            </div>
        </div>

    )
}

export default Zlavy