import './discounts.css';
import News from "../NEWS/News"
import discountsimg from "./discountsimg";
import useScrollIn from "../helpers/useScrollIn";

export default function Discounts() {
    const addToRefs = useScrollIn()
    return (
        <div className='akcie-container' id='discounts'>
            <div className='discounts-container'>
                <div className='discounts-header'>
                    <h1>AKTUÁLNE ZĽAVY</h1>
                </div>
                <div className="discounts-images">
                    {
                        discountsimg.map((item, id) => {
                            return (
                                <div ref={addToRefs} className="one-img slide-in">
                                    <a key={id} href={item.src} target="_blank" rel="noreferrer"><img src={item.url} alt={item.alt}></img></a>
                                </div>
                            )
                        })
                    }
                </div>
                <News></News>
            </div>
        </div>
    )
}
