import React from 'react'
import './billboard.css'
import { Link } from 'react-scroll'

export default function Billboard() {
  return (
    // <div className='bill-container' >
    //   <div className='bill-background'>
    //     <div className='bill-info'>
    //       <h1>Vitajte na stránkach našej tradičnej lekárne Vitalis.</h1>
    //       <p>Sme tu pre Vás už viac ako 15 rokov, s cieľom zabezpečiť komplexnú lekárenskú starostlivosť.
    //         <br />
    //         Náš kvalifikovaný tím lekárnikov Vám poskytne nielen odborné poradenstvo, ale dbá aj na diskrétnosť a individuálny prístup.
    //       </p>
    //       <h2><Link to="onas" spy={true} smooth={true} offset={50} duration={500}><h2>Prečítajte si o nás</h2></Link></h2>
    //     </div>
    //   </div>
    // </div>

    <div className="bill-container">
      <div className="bill-background">
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