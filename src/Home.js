import React from 'react'
import Billboard from './COMPONENTS/BILLBOARD/Billboard'
import ContactBonus from './COMPONENTS/CONTACTBONUS/ContactBonus';
import Dermocentrum from './COMPONENTS/DERMOCENTRUM/Dermocentrum';
import { LogoSlider } from './COMPONENTS/Slider/LogoSlider';
import Zlavy from './COMPONENTS/ZLAVY/Zlavy';
import Footer from './COMPONENTS/FOOTER/Footer'
import Olekarni2 from './COMPONENTS/OLEKARNI2/Olekarni2'
import Karticka from './COMPONENTS/KARTICKA/Karticka';
import LetakPartner from './COMPONENTS/LETAK/letak';
import Poukazky from './COMPONENTS/POUKAZKY/Poukazky';
import { useLocation } from 'react-router-dom';
export default function Home({ showLetakPartner, showPoukazky }) {

    const location = useLocation();

    return (
        <>


            <Billboard></Billboard>
            <ContactBonus></ContactBonus>
            <Olekarni2></Olekarni2>
            {/* {showLetakPartner && <LetakPartner />} */}
            {location.pathname === '/letak' && <LetakPartner />}

            <Karticka></Karticka>

            <Dermocentrum />

            <div className="container">
                <LogoSlider />
            </div>
            {showPoukazky && <Poukazky />}
            <Zlavy />
            <Footer></Footer>

        </>
    )
}
