import React from 'react';
import './TheaterSection.css';
import ReactPlayer from 'react-player';

const TheaterSection = () => {
    return (
        <div className="youTube_player">
            <ReactPlayer controls url="https://www.youtube.com/watch?v=WjXYwzHmykU"></ReactPlayer>
        </div>
    );
};

export default TheaterSection;