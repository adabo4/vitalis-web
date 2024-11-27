import React from 'react'
import './topNav.css'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { BsStopwatch } from 'react-icons/bs'

export default function TopNav() {
  return (
    <div className='top-nav'>
      <p className='hours'> <BsStopwatch /> Pondelok-Piatok<br /> 8:00 - 17:00</p>
      <p className='contact'> <a href='tel:033/593 60 43'><BsFillTelephoneFill />  tel: 033/593 60 43</a> </p>
    </div>
  )
}

