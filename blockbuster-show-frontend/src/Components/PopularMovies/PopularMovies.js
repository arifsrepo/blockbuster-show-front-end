import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import MoviePoster from '../MoviePoster/MoviePoster';
import './PopularMovies.css';

const PopularMovies = () => {
    const [popular, setPopular] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/movie')
        .then(res => res.json())
        .then(popularList => {
            setPopular(popularList)
        });
    },[])

    return (
        <div className="popular_movie">
            <Container>
                <Row>
                    <Col sm={12} xs={12} md={3}>
                        <div className="popular_movie_head">
                            <h1>Popular Movies to Watch Now</h1>
                            <p>Most watched movies by days</p>
                        </div>
                        <br />
                        <p>VIEW ALL  </p>
                    </Col>
                    <Col sm={12} xs={12} md={9} className="popular_movie_list">
                        {
                            popular.slice(0, 8).map(movieList => <NavLink  to={`/watch/${movieList._id}/${'movie'}`}><MoviePoster poster={movieList}></MoviePoster></NavLink>)
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PopularMovies;