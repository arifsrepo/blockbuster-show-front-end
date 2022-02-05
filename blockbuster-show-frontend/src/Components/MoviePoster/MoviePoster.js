import React from 'react';
import './MoviePoster.css';

const MoviePoster = (props) => {
    const {name, img, genere, ratings, cost} = props.poster;
    return (
        <div style={{backgroundImage:`linear-gradient(rgba(0 0 0 / 20%), rgba(0, 0, 0, 0.5)), url(${img})`}} className="MoviePosterStyle">
            <div className="poster_title">
                <p>{name}</p>
                <h6>${cost}</h6>
                <div className="poster_ratings">
                    <span className="ratind_red_span"> Rating </span>
                    <span className="rating_text"> {ratings}</span>
                </div>
            </div>
        </div>
    );
};

export default MoviePoster;