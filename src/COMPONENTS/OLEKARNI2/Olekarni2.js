
import './olekarni2.css'
import onas from '../img/PREDNA_LEKAREN_COMP.jpg'
import { HashLink } from 'react-router-hash-link'
import React from 'react'
import useScrollIn from '../helpers/useScrollIn'


const Olekarni = () => {

    const trackClick = () => {
        window.gtag('event', 'link_click', {
            'event_category': 'Navigation',
            'event_label': 'Letak Link Clicked'
        });
    };

    // const elementsRef = useRef([]); // Array to hold multiple refs

    // const addToRefs = (el) => {
    //     if (el && !elementsRef.current.includes(el)) {
    //         elementsRef.current.push(el);
    //     }
    // };

    // useEffect(() => {
    //     const currentElements = elementsRef.current; // Capture the current ref value

    //     const options = {
    //         root: null,
    //         rootMargin: "0px",
    //         threshold: 0.5
    //     };

    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach((entry) => {
    //             if (entry.isIntersecting) {
    //                 if (entry.target.classList.contains("slide-right")) {
    //                     entry.target.classList.add("slide-right-appear")

    //                 }
    //                 if (entry.target.classList.contains("slide-in")) {
    //                     entry.target.classList.add("slide-in-appear")
    //                 }
    //                 if (entry.target.classList.contains("slide-left")) {
    //                     entry.target.classList.add("slide-left-appear")
    //                 }
    //                 observer.unobserve(entry.target)
    //             }
    //             // else {
    //             //     if (entry.target.classList.contains("slide-right")) {
    //             //         entry.target.classList.remove("slide-right-appear")

    //             //     }
    //             //     if (entry.target.classList.contains("slide-in")) {
    //             //         entry.target.classList.remove("slide-in-appear")
    //             //     }
    //             //     if (entry.target.classList.contains("slide-left")) {
    //             //         entry.target.classList.remove("slide-left-appear")
    //             //     }

    //             // }

    //         }
    //         )
    //     }, options);

    //     currentElements.forEach((element) => {
    //         if (element) observer.observe(element);
    //     });

    //     return () => {
    //         currentElements.forEach((element) => {
    //             if (element) observer.unobserve(element);
    //         });
    //     };
    // }, []);

    const addToRefs = useScrollIn();



    return (
        <>
            <div className='olekarni-container' id='onas' >

                <div className='olekarni-box' >

                    <div className='olekarni-left'>
                        <div ref={addToRefs} className='left-text slide-right'>
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
                        <div ref={addToRefs} className='right1 slide-in'>
                            <p>Ako jediní v širokom okolí máme pre Vás k dispozícii prírodné prípravky tibetskej medicíny značky EPAM, či unikátne produkty
                                Dedka korenára, akými sú bylinné tekuté koncentráty, oleje, kaše i masti.
                            </p>
                            <p>
                                Keďže sa tesne v našej blízkosti nachádzajú ambulancie diabetológie <br /> a endokrinológie, prispôsobili sme lieky a produkty aj tak, aby sme mohli ihneď vyhovieť požiadavkám pacientov, ktorí ich navštevujú.
                            </p>

                        </div>
                        <div ref={addToRefs} className='right2 slide-left'>
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