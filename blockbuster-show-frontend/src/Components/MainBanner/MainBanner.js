import React from 'react';
import './MainBanner.css';
import MyCarusel from '../MyCarusel/MyCarusel';

const MainBanner = () => {
    return (
        <div>
            <div className="banner_div">
                <div className="search_bar_div">
                   <input className="search_bar_input" type="text" />
                   <button className="search_btn">Search</button>
                </div>
                <div className="carusel_div">
                    <MyCarusel></MyCarusel>
                </div>
            </div>
        </div>
    );
};

export default MainBanner;