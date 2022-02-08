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

    // useEffect(() => {
    //     if(movie){
    //         const bookmark = { movieBookmark:movie }
    //         console.log(bookmark)
    //         fetch('http://localhost:5000/moviesearch',{
    //             method:'POST',
    //             headers:{
    //                 'content-type':'application/json'
    //             },
    //             body:JSON.stringify(bookmark)
    //         })
    //     }
    // },[accountDetails])

    
    // const videoUrls = async () => {
    //     let i=0;
    //     let urllist=[]
    //     for(i;i< movie.length;i++){
    //         const response = await fetch(`http://localhost:5000/moviesearch?bookmark=${movie[i]}`)
    //         const json = await response.json()
    //         urllist.push(json.items[0])
    //         console.log({urllist})
    //       }
    //    }

    //    videoUrls();

    const asyncFunct = async(bookmark) => {
        // fetch(`http://localhost:5000/moviesearch?bookmark=${bookmark}`)
        // .then(res => res.json())
        // .then(data => console.log(data))
            // let urllist = [];
            // const response = await fetch(`http://localhost:5000/moviesearch?bookmark=${bookmark}`)
            // console.log(response);
            // const json = await response.json()
            // urllist.push(json.items)
            // console.log({urllist})
    }


    movie?.forEach(function(item, i) {
      asyncFunct(item)
    });


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