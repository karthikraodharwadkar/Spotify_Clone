import React from 'react'
import companyLogo from "../../../assest/logo.svg"
import { useNavigate } from 'react-router-dom'

export default function Logo() {
    const navigate=useNavigate()
  return (
    <div className='logo-container' onClick={()=>navigate("/")}>
        <img src={companyLogo} alt="Qtify-logo" style={{cursor:"pointer"}}/>
    </div>
  )
}
