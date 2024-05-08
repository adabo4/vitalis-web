import React from "react";
import './zlavy.css';
import Oznamy from "../OZNAMY/Oznamy";

import zlavyimg from "./zlavyimg";


const Zlavy = () => {
    return (
        <div className='akcie-container' id='zlavy'>
            <div className='zlavy-container'>

                <div className='zlavy-header'>
                    <h1>AKTUÁLNE ZĽAVY</h1>

                </div>

                <div className="zlavy-images">
                    {
                        zlavyimg.map((item, i) => {
                            return (
                                <div className="one-img">
                                    <a key={item.id} href={item.src} target="_blank" rel="noreferrer"><img src={item.url} alt={item.alt}></img></a>
                                </div>
                            )


                        })
                    }
                </div>

                <Oznamy></Oznamy>

            </div>
        </div>

    )
}

export default Zlavy