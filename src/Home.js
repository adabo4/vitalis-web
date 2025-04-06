import React from 'react'
import Billboard from './COMPONENTS/Billboard/Billboard'
import ContactBonus from './COMPONENTS/ContactBonus/ContactBonus';
import Dermocentrum from './COMPONENTS/Dermocentrum/Dermocentrum';
import { LogoSlider } from './COMPONENTS/Slider/LogoSlider';
import Discounts from './COMPONENTS/Discounts/Discounts';
import News from './COMPONENTS/News/News';
import Footer from './COMPONENTS/Footer/Footer'
import AboutUs from './COMPONENTS/About/AboutUs'
import LoyaltyCard from './COMPONENTS/LoyaltyCard/LoyaltyCard';
import LeafletPartner from './COMPONENTS/Leaflet/LeafletPartner';
import Coupons from './COMPONENTS/Coupons/Coupons';
import { useLocation } from 'react-router-dom';

export default function Home({ showPoukazky }) {
    const location = useLocation();
    return (
        <>
            <Billboard></Billboard>
            <ContactBonus></ContactBonus>
            <News></News>
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
