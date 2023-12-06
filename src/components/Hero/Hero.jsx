import React from 'react'
import headphoneLogo from "../../assest/headphone.svg"
import "./Hero.css"

export default function Hero() {
  return (
    <div className='hero-container'>
        <div className='hero-text'>
            <p>100 Thousand Songs, ad-free</p>
            <p>Over thousands podcast episodes</p>
        </div>
        <img src={headphoneLogo} alt="headphoneLogo" className='headphone-logo'/>
    </div>
  )
}
