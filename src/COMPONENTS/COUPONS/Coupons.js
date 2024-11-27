import "./coupons.css"
import { Link } from 'react-router-dom'

export default function Coupons() {
    const coupons = [
        {
            src: "../coupons/poukazka1.jpg"
        },
        {
            src: "../coupons/poukazka2.png"
        },
        {
            src: "../coupons/poukazka3.png"
        },
        {
            src: "../coupons/poukazka4.png"
        },
        {
            src: "../coupons/poukazka5.png"
        }
    ]

    const giftCoupons = [
        {
            src: "./giftCoupons/coupon_20e.png",
            name: "poukazka20",
            alt: "Poukážka 20€"
        },
        {
            src: "./giftCoupons/coupon_30e.png",
            name: "poukazka30",
            alt: "Poukážka 30€"
        }
    ]

    const handleClick = (e, id) => {
        e.preventDefault()
        window.open(giftCoupons[id].src, '_blank')
    }
    return (
        <>
            <section id="coupons">
                <h2>U nás akceptujeme nasledovné poukážky:</h2>
                <div className="coupons-container">
                    {
                        coupons.map((p) => {
                            return (
                                <div className='coupons-img'>
                                    <img src={p.src} alt="" />
                                </div>
                            )
                        })
                    }
                </div>
            </section>

            <section id='gift-coupons'>
                <div className='gift-container'>
                    <h2>Ak chcete niekoho prekvapiť, máme pre Vás ideálny a praktický nápad na darček.</h2>
                    <p>Darčekové poukážky v hodnote 20€ alebo 30€ viete zakúpiť priamo v lekárni alebo v dermocentre. </p>
                    <div className='gift'>
                        {
                            giftCoupons.map((p, id) => {
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
