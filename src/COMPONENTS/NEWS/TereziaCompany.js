import useScrollIn from '../helpers/useScrollIn'
import tereziaimg from "../img/terezia.jpg"

function TereziaCompany() {
    const addToRefs = useScrollIn()
    return (
        <div className='terezia'>
            <p ref={addToRefs} className='slide-in'>Príďte na špeciálnu promo akciu TEREZIA COMPANY - 22.12.2025 -
                kde objavíte prírodné produkty pre Vaše zdravie a krásu!
                Získajte odborné poradenstvo a výhodné zľavy na produkty.
                Terezia Company je český výrobca prírodných doplnkov stravy zo zdraviu prospešných húb a rastlín bez konzervačných látok.
            </p>
            <img src={tereziaimg} alt="Terezia Company" />
        </div>
    )
}

export default TereziaCompany
