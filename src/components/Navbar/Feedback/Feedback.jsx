import React from 'react'
import "./Feedback.css"

export default function Feedback({setIsModal}) {

  return (
    <div className='feedback-container' onClick={()=>setIsModal(true)}>
        <p>Give Feedback</p>
    </div>
  )
}
