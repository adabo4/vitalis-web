import './loyaltycard.css'
import cardimgFront from '../img/kartickaof2-min.jpg'
import cardimgBack from '../img/karticka_2_comp.png'
import { BsFillExclamationDiamondFill } from 'react-icons/bs'
import useScrollIn from '../helpers/useScrollIn'

export default function LoyaltyCard() {
    const options = {
        rootMargin: "-50px 0px 0px 0px",
        threshold: .5
    }
    const addToRefs = useScrollIn(options);
    return (
        <div className='loyalty__card-container'>
            <div className='loyalty__card-box'>
                <div ref={addToRefs} className='loyalty__card-left slide-right'>
                    <div className='loyalty__card-info'>
                        <h2><BsFillExclamationDiamondFill /></h2>
                        <p>Pri nákupe u nás môžete ušetriť aj uplatnením zľavy <br /> s našou vernostnou kartičkou.</p>
                    </div>
                    <div className='loyalty__card-info'>
                        <h2><BsFillExclamationDiamondFill /></h2>
                        <p> Registrácia na jej získanie prebieha rýchlo a ľahko, <br /> využite túto možnosť ešte dnes!</p>
                    </div>
                </div>

                <div className='loyalty__card-right'>
                    <div className='loyalty__card-images'>
                        <img ref={addToRefs} className="rotate" src={cardimgFront} alt='' />
                        <img ref={addToRefs} className='rotate' src={cardimgBack} alt='' />
                    </div>
                    <ul ref={addToRefs} className='slide-up'>
                        <li>S vernostnou kartou zbierate body za každý nákup.</li>
                        <li>Nazbierané body viete uplatniť na všetky produkty okrem liekov vydávaných na predpis.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}