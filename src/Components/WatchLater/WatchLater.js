import React from 'react';
import './WatchLater.css';
import useFirebase from '../hooks/useFirebase';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import MoviePoster from '../MoviePoster/MoviePoster';

const WatchLater = () => {
    const { user,accountDetails } = useFirebase();
    const [movieBooked, setMovieBooked] = useState([]);
    const [seriesBooked, setSeriesBooked] = useState([]);
    const movie = accountDetails?.movieBookmark;
    const tvseries = accountDetails?.tvsBookmark;

    return (
        <div className="watchlater_main">
            <Container>
                <br /><br /><br /><br /><br /><br /><br /><br />
                {
                   movieBooked.length
                }
            </Container>
        </div>
    );
};

export default WatchLater;