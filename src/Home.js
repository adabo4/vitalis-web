import React from 'react'
import Billboard from './COMPONENTS/BILLBOARD/Billboard';
import ContactBonus from './COMPONENTS/ContactBonus/ContactBonus';
import Dermocentrum from './COMPONENTS/DERMOCENTRUM/Dermocentrum';
import { LogoSlider } from './COMPONENTS/Slider/LogoSlider';
import Discounts from './COMPONENTS/DISCOUNTS/Discounts';
import Footer from './COMPONENTS/FOOTER/Footer'
import AboutUs from './COMPONENTS/ABOUT/AboutUs'
import LoyaltyCard from './COMPONENTS/LoyaltyCard/LoyaltyCard';
import LeafletPartner from './COMPONENTS/LEAFLET/LeafletPartner';
import Coupons from './COMPONENTS/COUPONS/Coupons';
import { useLocation } from 'react-router-dom';

export default function Home({ showPoukazky }) {
    const location = useLocation();
    return (
        <>
            <Billboard></Billboard>
            <ContactBonus></ContactBonus>

            <AboutUs></AboutUs>
            {location.pathname === '/letak' && <LeafletPartner />}
            <LoyaltyCard></LoyaltyCard>
            <Dermocentrum />
            <div className="container">
                <LogoSlider />
            </div>
            {showPoukazky && <Coupons />}
            <Discounts />
            <Footer></Footer>
        </>
    )
}
