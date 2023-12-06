import React from 'react'
import ModalCancelIcon from "../../../assest/modalcancelicon.svg"
import "./Modal.css"

export default function Modal({setIsModal,isModal}) {

    const handleSubmit=()=>{
        alert("Feedback Accepted")
        setIsModal(false)
    }
  return (
    <div className='modal-container' id={isModal?"blur":""}>
        <div className='modal-header'>
            <p>Feedback</p>
        </div>
        <div className='modal-cancel-btn' onClick={()=>setIsModal(false)}>
            <img src={ModalCancelIcon} alt="ModalCancelIcon"/>
        </div>
        <div className='modal-form-container'>
            <form onSubmit={handleSubmit} id="formData">
                <input type="text" placeholder='Full name'/>
                <input type="email" placeholder='Email ID'/>
                <input type="text" placeholder='Subject'/>
                <textarea type="text" placeholder='Description'></textarea>
                <button className='form-submit-btn'>Submit Feedback</button>
            </form>
        </div>
    </div>
  )
}
