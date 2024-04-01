
import TopNav from './COMPONENTS/TOPNAV/TopNav';
import NavBar from './COMPONENTS/NAVBAR/NavBar';
import { Routes, Route } from 'react-router-dom'
import Gdpr from './COMPONENTS/GDPR/Gdpr';
import Home from './Home';
import { useState } from 'react';
import GoogleAnalytics from "./COMPONENTS/GOOGLEANALYTICS/GoogleAnalytics"
import CookieBanner from './COMPONENTS/CookieBanner/CookieBanner';
import CookiesAbout from './COMPONENTS/CookiesAbout/CookiesAbout';

// ReactGA.initialize('G-29PVXGWYQM');



function App() {
  const [showLetakPartner, setShowLetakPartner] = useState(false);
  const [showPoukazky, setShowPoukazky] = useState(false);

  const [showBanner, setShowBanner] = useState(true);

  // const [isConsentGiven, setIsConsentGiven] = useState(false);

  // const handleAccept = () => {
  //   setIsConsentGiven(true);
  //   initializeGA();
  // };

  // const handleDecline = () => {
  //   setIsConsentGiven(false);
  //   resetCookieConsentValue("Google Analytics");
  //   Cookies.remove()

  // };

  // const initializeGA = () => {
  //   ReactGA.initialize('G-29PVXGWYQM');
  //   ReactGA.initialize('G-C5X33CPVHS');
  //   ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
  // }



  // useEffect(() => {
  //   const isConsent = getCookieConsentValue();
  //   if (isConsent === "true") {
  //     handleAccept();
  //   }
  // }, []);

  // ReactGA.send(window.location.pathname)

  return (
    <div className="App">
      <GoogleAnalytics GA_MEASUREMENT_ID="G-29PVXGWYQM" />
      {showBanner && <CookieBanner setShowBanner={setShowBanner} />}

      {/* <CookieConsent
        enableDeclineButton
        onAccept={handleAccept}
        onDecline={handleDecline}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent> */}
      {/* {!isConsentGiven && <ConsentBanner onAccept={handleAccept} onDecline={handleDecline} />} */}
      {/* <TopNav></TopNav>
      <NavBar></NavBar>
      <Billboard></Billboard>
      <ContactBonus></ContactBonus>
      <Olekarni2></Olekarni2>
      <Routes>
        <Route path="letak" element={<LetakPartner />} ></Route>
      </Routes>
      <Karticka></Karticka>

      <Dermocentrum></Dermocentrum>
      <div className="container">
        <LogoSlider />
      </div>
      <Routes >
        <Route path='/poukazky' element={<Poukazky />} ></Route>


      </Routes>
      <Zlavy />

      <Footer>
      </Footer> */}
      <TopNav></TopNav>
      <NavBar setShowLetakPartner={setShowLetakPartner} setShowPoukazky={setShowPoukazky} showLetakPartner={showLetakPartner}></NavBar>


      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/onas' element={<Home />} ></Route>
        <Route path='/letak' element={<Home />}></Route>
        {/* <Route path='/letak' element={<Home showLetakPartner={showLetakPartner} />}></Route> */}
        <Route path='/gdpr' element={<Gdpr />} ></Route>
        <Route path='/dermocentrum' element={<Home />} ></Route>
        <Route path='/poukazky' element={<Home showPoukazky={showPoukazky} />} ></Route>
        <Route path='/kontakt' element={<Home />} ></Route>
        <Route path='/cookies' element={<CookiesAbout setShowBanner={setShowBanner} />} ></Route>
        {/* <Route path='/cookies' element={<CookiesAbout />} ></Route> */}
      </Routes>


    </div >
  );
}

export default App;
