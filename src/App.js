
import TopNav from './COMPONENTS/TOPNAV/TopNav';
import NavBar from './COMPONENTS/NAVBAR/NavBar';
import { Routes, Route } from 'react-router-dom'
import Gdpr from './COMPONENTS/GDPR/Gdpr';
import Home from './Home';
import { useState } from 'react';
import GoogleAnalytics from "./COMPONENTS/GOOGLEANALYTICS/GoogleAnalytics"
import CookieBanner from './COMPONENTS/CookieBanner/CookieBanner';
import CookiesAbout from './COMPONENTS/CookiesAbout/CookiesAbout';


function App() {
  const [showLetakPartner, setShowLetakPartner] = useState(false);
  const [showPoukazky, setShowPoukazky] = useState(false);

  const [showBanner, setShowBanner] = useState(true);

  const GoogleAnalyticsID = process.env.REACT_APP_GOOGLE_ANALYTICS_ID;
  console.log(GoogleAnalyticsID)

  return (
    <div className="App">
      <GoogleAnalytics GA_MEASUREMENT_ID={GoogleAnalyticsID} />

      {showBanner && <CookieBanner setShowBanner={setShowBanner} />}

      <TopNav></TopNav>
      <NavBar setShowLetakPartner={setShowLetakPartner} setShowPoukazky={setShowPoukazky} showLetakPartner={showLetakPartner}></NavBar>


      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/onas' element={<Home />} ></Route>
        <Route path='/letak' element={<Home />}></Route>
        <Route path='/gdpr' element={<Gdpr />} ></Route>
        <Route path='/dermocentrum' element={<Home />} ></Route>
        <Route path='/poukazky' element={<Home showPoukazky={showPoukazky} />} ></Route>
        <Route path='/kontakt' element={<Home />} ></Route>
        <Route path='/cookies' element={<CookiesAbout setShowBanner={setShowBanner} />} ></Route>
      </Routes>


    </div >
  );
}

export default App;
