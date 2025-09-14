import './dermocentrum.css'
import dermo1 from '../img/back_office_comp.jpg'
import useScrollIn from '../helpers/useScrollIn'

export default function Dermocentrum() {
    const options = {
        rootMargin: "0px 0px -50px 0px",
        threshold: .25
    }
    const addToRefs = useScrollIn(options);
    return (
        <>
            <div className='dermo-container' id='dermocentrum'>
                <div className='dermo-box'>
                    <div className='dermo-top'>
                        <div className='dermo-left'>
                            <p ref={addToRefs} className='left-h3 slide-in'>
                                Trápia Vás vrásky, akné či pocit suchej pokožky ?
                                <br /> Zamierte do nášho Dermocentra, kde Vašej pleti
                                pomôžeme nájsť tie správne kozmetické prípravky na mieru.
                            </p>

                            <h4 ref={addToRefs} className='slide-up'>
                                Čo je DERMOKOZMETIKA?
                            </h4>

                            <p ref={addToRefs} className='left-p slide-right'>
                                Dermokozmetika predstavuje špecifickú kategóriu produktov starostlivosti o pleť, ktorá spĺňa náročné požiadavky farmaceutického priemyslu.
                                Produkty sú vyrábané v spolupráci <br /> s odborníkmi na starostlivosť o pleť (dermatológmi, pediatrami, oftalmológmi <br /> a farmaceutmi) a vyznačujú sa vysokou účinnosťou a bezpečnosťou
                                potvrdenou klinickými skúškami.
                            </p>
                        </div>

                        <img ref={addToRefs} className='scale-up' src={dermo1} alt='Dermocentrum Lekárne Vitalis v Trnave.'></img>


                        {/* <div className="photoBox">
                        </div> */}




                    </div>

                    <div className='dermo-footer'>
                        <p ref={addToRefs} className='slide-right'> Z pohoria Cévennes prúdi VODA Z TERMÁLNEHO PRAMEŇA <b>AVÈNE</b> cez najhlbšie a najstaršie dolomitové skaly na Zemi, kde je naplnená minerálmi
                            a jedinečnou mikroflórou: Aqua Dolomiae. Už viac ako 275 rokov sa voda používa na upokojenie a liečbu kožných ochorení.
                            Nachádza sa v každom produkte Avéne a je klinicky dokázané, že prospieva rôznym kožným indikáciám, od akné až po atopickú pokožku, a upokojuje aj tú najcitlivejšiu pokožku.
                        </p>
                        <p ref={addToRefs} className='slide-up'>
                            <b>BIODERMA</b> je značka založená na princípe ekobiológie a biológie. Tento inovatívny <br /> a priekopnícky vedecký prístup považuje pokožku <br /> za živý ekosystém, ktorý neustále prichádza <br /> do kontaktu s okolitým prostredím, tým pádom je jeho prírodné
                            mechanizmy potrebné chrániť a zachovať.
                        </p>
                        <p ref={addToRefs} className='slide-left'>
                            Tajomstvo účinku prípravkov <b>Vichy</b> je práve termálna voda. Pochádza priamo z hlbín francúzskych sopiek v regióne Auvergne. Sopečná voda Vichy je bohatá na 15 účinných minerálov, ktoré posilňujú kožnú bariéru a pomáhajú ju chrániť pred expozičnými faktormi, akými sú
                            slnečné lúče, znečistenie a stres. Táto rôznorodá zmes vzácnych minerálov má klinicky preukázané posilňujúce, regeneračné a antioxidačné účinky na pokožku.
                        </p>
                    </div>
                    <div className="brands-container">
                        <div className='brands-title'>
                            <h2>NAŠE ZNAČKY</h2>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}