import './carousel.scss'
import  { useState, useEffect } from 'react';

function Caraousel({ texts, interval = 3000 }){
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === texts.length - 1 ? 0 : prevIndex + 1
            );
        }, interval);

        return () => clearInterval(timer); // Cleanup the interval on component unmount
    }, [texts.length, interval]);

    return (
        <div className="text-carousel">
            <div className="text-content">{texts[currentIndex]}</div>
            <div className="indicators">
                {texts.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}


export default Caraousel