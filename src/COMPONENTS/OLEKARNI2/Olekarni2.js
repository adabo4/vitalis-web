import React from 'react'
import './olekarni2.css'
import onas from '../img/PREDNA_LEKAREN_COMP.jpg'
import { HashLink } from 'react-router-hash-link'


const Olekarni = () => {

    const trackClick = () => {
        window.gtag('event', 'link_click', {
            'event_category': 'Navigation',
            'event_label': 'Letak Link Clicked'
        });
    };



    return (
        <>


            <div className='olekarni-container' id='onas' >
                <div className='olekarni-box' >
                    <div className='olekarni-left'>
                        <div className='left-text'>
                            <p>
                                Nájdete u nás široký sortiment liekov na lekársky predpis, voľnopredajných liekov,
                                výživových doplnkov, zdravotníckych pomôcok či lekárenskej kozmetiky.
                            </p>
                            <p>
                                Naša ponuka liekov a doplnkov je neustále aktualizovaná, aby sme vedeli uspokojiť čo najväčší okruh pacientov.
                            </p>

                        </div>

                        <img src={onas} alt=''></img>

                    </div>

                    <div className='olekarni-right'>
                        <div className='right1'>
                            <p>Ako jediní v širokom okolí máme pre Vás k dispozícii prírodné prípravky tibetskej medicíny značky EPAM, či unikátne produkty
                                Dedka korenára, akými sú bylinné tekuté koncentráty, oleje, kaše i masti.
                            </p>
                            <p>
                                Keďže sa tesne v našej blízkosti nachádzajú ambulancie diabetológie <br /> a endokrinológie, prispôsobili sme lieky a produkty aj tak, aby sme mohli ihneď vyhovieť požiadavkám pacientov, ktorí ich navštevujú.
                            </p>

                        </div>
                        <div className='right2'>
                            <p>
                                Ak Vás zaujímajú akcie, môžete nahliadnuť do <HashLink to="/letak#letak" onClick={trackClick} spy={true} smooth={true} offset={50} duration={500} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>letáka Partner</HashLink>, ktorý Vám prináša atraktívne zľavy na každý mesiac.
                                Okrem toho Vás prostredníctvom stránky a sociálnych sietí budeme pravidelne informovať aj o iných prebiehajúcich akciách na kozmetiku a doplnkový sortiment.
                            </p>
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

export default Olekarni