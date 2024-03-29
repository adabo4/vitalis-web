

import TopNav from './COMPONENTS/TOPNAV/TopNav';
import NavBar from './COMPONENTS/NAVBAR/NavBar';
import { Routes, Route } from 'react-router-dom'
import Gdpr from './COMPONENTS/GDPR/Gdpr';
import Home from './Home';
import { useState } from 'react';


function App() {
  const [showLetakPartner, setShowLetakPartner] = useState(false);

  const [showPoukazky, setShowPoukazky] = useState(false);

  return (
    <div className="App">
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
      </Routes>


    </div >
  );
}

export default App;
