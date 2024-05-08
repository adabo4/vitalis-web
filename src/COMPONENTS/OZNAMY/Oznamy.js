import React from 'react'
import "./oznamy.css";
import skin from "../img/skincheck.jpg"

export default function Oznamy() {
    return (

        <>
            <div className='oznamy-container'>
                <div className="oznamy">
                    <div className="oznamy-header">
                        <h1>OZNAMY</h1>
                    </div>
                    <p>Dňa 20.5. 2024 od 10:00 - 16:00 hod. bude v Dermocentre Vitalis prebiehať PROMO AKCIA na kozmetiku Avène, A-Derma, Ducray a Klorane,
                        spojená s diagnostikou pleti. Samozrejmosťou budú aj zľavy na každý jeden produkt.
                    </p>


                </div>

                <div className="checkup">
                    <div className="checkup-header">
                        <h1 className='heading'>Kontrola materských znamienok</h1>
                    </div>
                    <div className="checkup-info">
                        <p>Máj je celosvetovo venovaný osvete a prevencii pred vznikom rakoviny kože.
                            Jej výskyt na Slovensku sa za posledných 30 rokov viac ako strojnásobil.
                            Takmer 90 % prípadov vieme predísť vďaka včasnej diagnostike,
                            preto <span> v utorok 14. mája medzi 10:00 - 14:00 </span> pri príležitosti medzinárodného dňa melanómu,
                            vyšetrí pani Mudr. Červeňáková znamienka bezplatne, v našom Dermocentre lekárne Vitalis.</p>
                        <img src={skin} className='skin-img' alt="Kontrola kože" />

                        <div className="skin-img"></div>

                    </div>

                    <h2>Tešíme sa na Vás!</h2>
                </div>
            </div>

        </>


    )
}
