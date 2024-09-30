import React from 'react'
import { Link } from 'react-router-dom'
import { MdAccessTimeFilled } from "react-icons/md";


export default function Card({ heading, about, timeStamp, price, text, bgImg, pathway }) {
    return (
        <div className="card-container">
            <div className="card-header">
                <h2 className={price ? 'card-heading' : ""}>{heading}</h2>
                <h3>{about}</h3>
                <div className="info">
                    <div>
                        <MdAccessTimeFilled className='icon' /> <p className='time'>{timeStamp}</p>
                    </div>
                    <p className='price'>
                        <span className={price ? "highlight highlight-alt" : ""}>{price ? `Cena: ${price}` : ""}
                        </span>
                    </p>
                </div>
            </div>
            <div className="card-footer">
                <p className='text'>{text}</p>
                <Link to="/rezervacia" className='send-res' state={{ about, price, bgImg, pathway }}>Objednať</Link>
            </div>
        </div>
    );
}
