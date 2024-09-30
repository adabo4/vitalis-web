import React from 'react'
import "./modal.css"

export default function Modal({ setCloseModal, title, content, onConfirm }) {



    return (
        <>

            <div className="modal-card">
                <button onClick={() => { onConfirm(); setCloseModal(false) }} class="close-modal">&times;</button>
                <h1>{title}</h1>
                <p>{content}</p>
            </div>
            <div class="overlay hidden"></div>

        </>
    )
}
