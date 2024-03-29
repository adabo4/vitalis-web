import React from 'react'

import "./Poukazky.css"
import { Link } from 'react-router-dom'

export default function Poukazky() {


    const poukazka = [


        {
            src: "../POUKAZKY/poukazka1.jpg"
        },
        {
            src: "../POUKAZKY/poukazka2.png"
        },
        {
            src: "../POUKAZKY/poukazka3.png"
        },
        {
            src: "../POUKAZKY/poukazka4.png"
        },
        {
            src: "../POUKAZKY/poukazka5.png"
        }

    ]

    const DARCEKY = [
        {
            src: "./DARCEKY/poukazka_20e.png",
            name: "poukazka20",
            alt: "Poukážka 20€"
        },
        {
            src: "./DARCEKY/poukazky_30e.png",
            name: "poukazka30",
            alt: "Poukážka 30€"
        }
    ]

    const handleClick = (e, id) => {
        e.preventDefault()

        window.open(DARCEKY[id].src, '_blank')
    }






    return (
        <>

            <section id="poukazky">

                <h2>U nás akceptujeme nasledovné poukážky:</h2>
                <div className="poukazky-container">
                    {
                        poukazka.map((p) => {
                            return (
                                <div className='poukazky-img'>
                                    <img src={p.src} alt="" />

                                </div>

                            )
                        })

                    }
                </div>

                {/* <img src={require("../img/POUKAZKY/poukazka1.jpg")} alt="" />
                <img src="./POUKAZKY/poukazka1.jpg" alt="" /> */}



            </section>

            <section id='darcekove-poukazky'>
                <div className='darceky-container'>
                    <h2>Ak chcete niekoho prekvapiť, máme pre Vás ideálny a praktický nápad na darček.</h2>
                    <p>Darčekové poukážky v hodnote 20€ alebo 30€ viete zakúpiť priamo v lekárni alebo v dermocentre. </p>
                    <div className='darceky'>
                        {
                            DARCEKY.map((p, id) => {
                                return (
                                    <>
                                        <Link to={`/${p.name}`} onClick={(e) => handleClick(e, id)}><img src={p.src} alt={p.alt} /></Link>

                                    </>
                                )
                            })
                        }


                    </div>


                </div>
            </section >
        </>
    )
}
