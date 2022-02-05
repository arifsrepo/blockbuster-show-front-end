import React from 'react';
import { useState, useEffect } from 'react';
import './Feature.css';
import TvSeriesPoster from '../TvSeriesPoster/TvSeriesPoster';
import { NavLink } from 'react-router-dom';

const Feature = () => {
    const [tvseries, setTvseries] = useState([])

    useEffect(()=> {
        fetch('http://localhost:5000/tvseries')
        .then(res => res.json())
        .then(series => setTvseries(series))
    }, [])

    return (
        <div className="feature_style">
            <h1>Popular TV Series</h1>
            <p>Watch popular TV Series all over the time</p>
            <div className="tv_series_style">
                {
                    tvseries.slice(0, 5).map(series => <NavLink className="poster_link_title_style" to={`/watch/${series._id}/${'tvseries'}`}><TvSeriesPoster series={series}></TvSeriesPoster></NavLink>)
                }
            </div>
        </div>
    );
};

export default Feature;