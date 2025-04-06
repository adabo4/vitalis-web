import React, { useEffect } from 'react'
import marianneLogo from "../img/dnimarianne-logo.svg"
import { ReactComponent as MySvg } from './arrow.svg';
import "./mariannedays.css"
import vichy from "../img/vichy-sample.png"
import cerave from "../img/cerave-sample.png"
import useScrollin from "../helpers/useScrollIn"

const MarianneDays = () => {

    useEffect(() => {
        const svgElement = document.querySelector('.animate-svg');
        const paths = svgElement.querySelectorAll('path');

        paths.forEach((path) => {
            path.classList.add('animate-path');
        });
    }, []);

    const options = {
        rootMargin: "-50px 0px 0px 0px",
        threshold: .1
    }
    const addToRefs = useScrollin(options)

    return (
        <>
            <section ref={addToRefs} className='action-day slide-in pop-in'>
                <div className='empty-container'>
                    <div className="empty">
                    </div></div>
                <div ref={addToRefs} className="container-text left slide-in pop-in">
                    <img src={marianneLogo} alt="Dni Marianne Logo" />
                    <p className='date'>11.-24. Apríl</p>
                    <p className='text'><span className='red'></span> Nakupujte výhodne <strong>až do pondelka!</strong></p>
                </div>

                <div ref={addToRefs} className="svg-container">
                    <MySvg ref={addToRefs} className="animate-svg" />
                </div>

                <div className='grid-layout'>
                    <div className="item vichy"><img src={vichy} alt="" /></div>
                    <div className="item text">
                        <div ref={addToRefs} className="container-text slide-in pop-in">
                            <p className='right-text'>Akcia 2+1 na vybrané značky kozmetiky
                                Cerave, La Roche-Posay a Vichy </p>

                        </div>
                    </div>

                    <div className="item cerave"><img src={cerave} alt="" /></div>
                    <div className="item lrp-cont">
                        <div className="lrp"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MarianneDays