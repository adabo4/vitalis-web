import React, { useEffect, useRef } from 'react'
import './billboard_new.css'
import { Link } from 'react-scroll'
import lekarenImg from '../img/Lekaren5v8final.jpg'
import backOfficeImg from '../img/back_office_comp.jpg'

export default function Billboard() {
    const imgRef1 = useRef(null);
    const imgRef2 = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (imgRef1.current && imgRef2.current) {
                const scrolled = window.pageYOffset;
                const parallax = scrolled * 0.5;
                imgRef1.current.style.transform = `translateY(${parallax}px)`;
                imgRef2.current.style.transform = `translateY(${parallax}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="bill-container">
            <div className="bill-background">
                <img
                    ref={imgRef1}
                    src={lekarenImg}
                    alt="Lekáreň Vitalis Trnava - tradičná lekáreň v centre mesta"
                    title="Lekáreň Vitalis - profesionálne lekárenské služby už viac ako 15 rokov"
                    className="bill-parallax-image bill-image-1"
                />
                <img
                    ref={imgRef2}
                    src={backOfficeImg}
                    alt="Lekáreň Vitalis Trnava - back office s moderným vybavením"
                    title="Lekáreň Vitalis - moderné zázemie a profesionálne vybavenie"
                    className="bill-parallax-image bill-image-2"
                />
                <div className='bill-info'>
                    <h1>Vitajte na stránkach našej tradičnej lekárne Vitalis.</h1>
                    <p>Sme tu pre Vás už viac ako 15 rokov, s cieľom zabezpečiť komplexnú lekárenskú starostlivosť.
                        <br />
                        Náš kvalifikovaný tím lekárnikov Vám poskytne nielen odborné poradenstvo, ale dbá aj na diskrétnosť a individuálny prístup.
                    </p>
                    <h2><Link to="onas" spy={true} smooth={true} offset={50} duration={500}><h2>Prečítajte si o nás</h2></Link></h2>
                </div>
            </div>
        </div>
    )
}