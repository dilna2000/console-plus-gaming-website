import React, { useState } from 'react';
import './Arrow.css';

const Arrow = () => {
    const [showScroll, setShowScroll] = useState(false);
    const changeArrow = () => {
        if (window.scrollY > 200) {
            setShowScroll(true);

        }
        else {
            setShowScroll(false);

        }

    };
    const onTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    window.addEventListener('scroll', changeArrow);
    return (
        <div className="arrow">
            <i className=" large circular angle up  icon arrow-scroll" style={{ display: showScroll ? 'block' : 'none',transition:'1s' }} onClick={onTop}></i>
        </div>



    );
}

export default Arrow;