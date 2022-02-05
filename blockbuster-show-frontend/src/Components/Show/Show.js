import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import MoviePoster from '../MoviePoster/MoviePoster';
import TvSeriesPoster from '../TvSeriesPoster/TvSeriesPoster';
import './Show.css';

const Show = () => {
    const [allmovie, setAllmovie] = useState([]);
    const [allmovieLoad, setAllmovieLoad] = useState(true);
    const [allseries, setAllseries] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/movie')
        .then(res => res.json())
        .then(popularList => {
            setAllmovie(popularList);
        });
        setAllmovieLoad(false);
    },[])

    useEffect(()=> {
        fetch('http://localhost:5000/tvseries')
        .then(res => res.json())
        .then(series => setAllseries(series))
    }, [])

    console.log(allmovie)

    return (
        <div className="all_show">
            <br />
            <br />
            <br />
            <Container>
                <Row>
                    <Col sm={12} xs={12} md={3}>
                        <div className="popular_movie_head">
                            <h2>Watch All Popular Movies Available In Our Server</h2>
                            <p>Most watched movies by days</p>
                        </div>
                        <br />
                    </Col>
                    <Col sm={12} xs={12} md={9} className="popular_movie_list">
                        {
                            !allmovieLoad?allmovie.map(movieList => <NavLink  to={`/watch/${movieList._id}/${'movie'}`}><MoviePoster poster={movieList}></MoviePoster></NavLink>):<div className="spinner_holder_shoe"><Spinner animation="border" variant="danger" /></div>
                        }
                    </Col>
                </Row>
            </Container>
            <hr />
            <Container>
                <Row>
                    <Col sm={12} xs={12} md={9} className="popular_movie_list">
                        {
                            !allmovieLoad?allseries.map(series => <NavLink className="poster_link_title_style" to={`/watch/${series._id}/${'tvseries'}`}><TvSeriesPoster series={series}></TvSeriesPoster></NavLink>):<div className="spinner_holder_shoe"><Spinner animation="border" variant="danger" /></div>
                        }
                    </Col>
                    <Col sm={12} xs={12} md={3}>
                        <div className="popular_movie_head">
                            <h2>Popular TV shows all over the world</h2>
                        </div>
                        <br />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Show;