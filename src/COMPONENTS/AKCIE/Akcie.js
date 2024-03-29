import React from 'react'
import './akcie.css'
import zlava1 from '../img/3-23_INDEP_SK_Zlava_8EUR_SK_688x480.png'
import zlava2 from '../img/unnamed (2).jpg'
import zlava3 from '../img/unnamed (3).jpg'

const Akcie = () => {
  return (
    <div className='akcie-container' id='zlavy'>
     <h1>AKTUÁLNE ZĽAVY</h1>
     <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas. Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.</p>
    <div className='akcie-box'>
       <img src={zlava1} alt=''></img>
      <img src={zlava2} alt=''></img>
      <img src={zlava3} alt=''></img> 
      <img src={zlava2} alt=''></img>
      <img src={zlava3} alt=''></img> 
    </div>
    </div>
  )
}

export default Akcie