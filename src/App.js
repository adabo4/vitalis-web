
import TopNav from './COMPONENTS/TOPNAV/TopNav';
import NavBar from './COMPONENTS/NAVBAR/NavBar';
import { Routes, Route } from 'react-router-dom'
import Gdpr from './COMPONENTS/GDPR/Gdpr';
import Home from './Home';
import { useState } from 'react';
import GoogleAnalytics from './COMPONENTS/GOOGLEANALYTICS/GoogleAnalytics';
import CookieBanner from './COMPONENTS/CookieBanner/CookieBanner';
import CookiesAbout from './COMPONENTS/CookiesAbout/CookiesAbout';
import Reservations from './COMPONENTS/VYSETRENIA/Reservations';
import AppointmentForm from './COMPONENTS/VYSETRENIA/AppointmentForm';
import ReservationForm from './COMPONENTS/VYSETRENIA/ReservationForm';
import ReservationCreated from './COMPONENTS/VYSETRENIA/ReservationCreated';
import LeafletPartner from './COMPONENTS/LEAFLET/LeafletPartner';

export default function App() {
  const [showLetakPartner, setShowLetakPartner] = useState(false);
  const [showPoukazky, setShowPoukazky] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const GoogleAnalyticsID = process.env.REACT_APP_GOOGLE_ANALYTICS_ID;
  const [openGallery, setOpenGallery] = useState(false);

  return (
    <div className="App">
      <GoogleAnalytics GA_MEASUREMENT_ID={GoogleAnalyticsID} />
      {showBanner && <CookieBanner setShowBanner={setShowBanner} />}
      <TopNav></TopNav>
      <NavBar setShowLetakPartner={setShowLetakPartner} setShowPoukazky={setShowPoukazky} showLetakPartner={showLetakPartner} setOpenGallery={setOpenGallery}></NavBar>
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/news' element={<Home />}></Route>
        <Route path='/onas' element={<Home />} ></Route>
        <Route path='/letak' element={<LeafletPartner openGallery={openGallery} />}></Route>
        <Route path='/gdpr' element={<Gdpr />} ></Route>
        <Route path='/dermocentrum' element={<Home />} ></Route>
        <Route path='/poukazky' element={<Home showPoukazky={showPoukazky} />} ></Route>
        <Route path='/kontakt' element={<Home />} ></Route>
        <Route path='/cookies' element={<CookiesAbout setShowBanner={setShowBanner} />} ></Route>
        <Route path='/vysetrenie' element={<Reservations />}></Route>
        <Route path='/rezervacia' element={<AppointmentForm />}></Route>
        <Route path='/rezervacny-formular' element={<ReservationForm />}></Route>
        <Route path='/vytvorenie-rezervacie' element={<ReservationCreated />}></Route>
      </Routes>
    </div >
  );
}
