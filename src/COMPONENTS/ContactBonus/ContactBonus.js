import './contactbonus.css'
import { FaPills } from 'react-icons/fa'
import { FaHeartbeat } from 'react-icons/fa'
import { FaMortarPestle } from 'react-icons/fa'
import useScrollIn from '../helpers/useScrollIn'

const ContactBonus = () => {
  const addToRefs = useScrollIn();
  return (
    <div className='contact-container'>
      <div className='post-cont'>
        <div ref={addToRefs} className='special-p slide-in' >
          <h2><FaPills /></h2>
          <p>
            Overte si dostupnosť Vášho lieku telefonicky alebo si ho rovno rezervujte cez <a href='https://sietzdravia.sk/' target="_blank" rel="noreferrer" >Sieť zdravia</a>.
            Spravíme všetko, čo je v našich silách, aby sme Vám ho zabezpečili.
          </p>
        </div>
        <div ref={addToRefs} className='info-box slide-in'>
          <h2><FaHeartbeat /></h2>
          <p>
            V prípade akútneho <br /> i chronického problému sme tu pre Vás, aby sme Vám ponúkli pomoc rýchlo a spoľahlivo.
          </p>
        </div>
        <div ref={addToRefs} className='info-box slide-in'>
          <h2><FaMortarPestle /></h2>
          <p>
            Objavte jedinečné prípravky tibetskej medicíny EPAM či Dedka Korenára iba u nás v lekárni Vitalis.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactBonus