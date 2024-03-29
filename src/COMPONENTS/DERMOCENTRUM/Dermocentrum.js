import React from 'react'
import './dermocentrum.css'
import dermo1 from '../img/ZADNE_DEMO_COMP.jpg'

const Dermocentrum = () => {
    return (
        <div className='dermo-container' id='dermocentrum'>
            <div className='dermo-box'>
                <div className='dermo-top'>
                    <div className='dermo-left'>
                        <p className='left-h3'>
                            Trápia Vás vrásky, akné či pocit suchej pokožky ?
                            <br /> Zamierte do nášho Dermocentra, kde Vašej pleti
                            pomôžeme nájsť tie správne kozmetické prípravky na mieru.
                        </p>

                        <h4>
                            Čo je DERMOKOZMETIKA?
                        </h4>

                        <p className='left-p'>
                            Dermokozmetika predstavuje špecifickú kategóriu produktov starostlivosti o pleť, ktorá spĺňa náročné požiadavky farmaceutického priemyslu.
                            Produkty sú vyrábané v spolupráci <br /> s odborníkmi na starostlivosť o pleť (dermatológmi, pediatrami, oftalmológmi <br /> a farmaceutmi) a vyznačujú sa vysokou účinnosťou a bezpečnosťou
                            potvrdenou klinickými skúškami.
                        </p>
                    </div>

                    <img src={dermo1} alt=''></img>

                </div>

                <div className='dermo-footer'>
                    <p> Z pohoria Cévennes prúdi VODA Z TERMÁLNEHO PRAMEŇA <b>AVÈNE</b> cez najhlbšie a najstaršie dolomitové skaly na Zemi, kde je naplnená minerálmi
                        a jedinečnou mikroflórou: Aqua Dolomiae. Už viac ako 275 rokov sa voda používa na upokojenie a liečbu kožných ochorení.
                        Nachádza sa v každom produkte Avéne a je klinicky dokázané, že prospieva rôznym kožným indikáciám, od akné až po atopickú pokožku, a upokojuje aj tú najcitlivejšiu pokožku.
                    </p>
                    <p>
                        <b>BIODERMA</b> je značka založená na princípe ekobiológie a biológie. Tento inovatívny <br /> a priekopnícky vedecký prístup považuje pokožku <br /> za živý ekosystém, ktorý neustále prichádza <br /> do kontaktu s okolitým prostredím, tým pádom je jeho prírodné
                        mechanizmy potrebné chrániť a zachovať.
                    </p>
                    <p>
                        Tajomstvo účinku prípravkov <b>Vichy</b> je práve termálna voda. Pochádza priamo z hlbín francúzskych sopiek v regióne Auvergne. Sopečná voda Vichy je bohatá na 15 účinných minerálov, ktoré posilňujú kožnú bariéru a pomáhajú ju chrániť pred expozičnými faktormi, akými sú
                        slnečné lúče, znečistenie a stres. Táto rôznorodá zmes vzácnych minerálov má klinicky preukázané posilňujúce, regeneračné a antioxidačné účinky na pokožku.
                    </p>
                </div>

                <div className="znacky-container">
                    <div className='znacky-title'>
                        <h1>NAŠE ZNAČKY</h1>
                    </div>

                </div>

            </div>

        </div>


    )
}

export default Dermocentrum