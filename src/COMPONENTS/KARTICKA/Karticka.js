import React from 'react'
import './karticka.css'
import karticka from '../img/kartickaof2-min.jpg'
import karticka2 from '../img/karticka_2_comp.png'
import { BsFillExclamationDiamondFill } from 'react-icons/bs'

const Karticka = () => {

    return (
        <div className='karta-container'>
            <div className='karta-box'>
                <div className='karta-left'>
                    <div className='one-info'>
                        <h2><BsFillExclamationDiamondFill /></h2>
                        <p>Pri nákupe u nás môžete ušetriť aj uplatnením zľavy <br /> s našou vernostnou kartičkou.</p>
                    </div>
                    <div className='one-info'>
                        <h2><BsFillExclamationDiamondFill /></h2>
                        <p> Registrácia na jej získanie prebieha rýchlo a ľahko, <br /> využite túto možnosť ešte dnes!</p>
                    </div>
                </div>

                <div className='karta-right'>
                    <div className='karta-images'>
                        <img src={karticka} alt='' />
                        <img src={karticka2} alt='' />
                    </div>
                    <ul>
                        <li>S vernostnou kartou zbierate body za každý nákup.</li>
                        <li>Nazbierané body viete uplatniť na všetky produkty okrem liekov vydávaných na predpis.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Karticka