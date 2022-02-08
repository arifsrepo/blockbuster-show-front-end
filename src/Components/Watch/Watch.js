import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './Watch.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEye, faStar, faDollarSign, faBookmark } from '@fortawesome/free-solid-svg-icons';

import { NavLink } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';

const Watch = () => {
    const  params = useParams();
    const [show, setShow] = useState({})
    const { user } = useFirebase();
    // const url = `https://aqueous-peak-41377.herokuapp.com/watch${params.show}/${params.watchid}`;
    const url = `http://localhost:5000/watch${params.show}/${params.watchid}`;
    const [bookMark, setBookMark] = useState(false);

    const handleWatchLater = () => {
        console.log('clicked');
        const bookmark = {
            email:user?.email,
            show:params.show,
            id:params?.watchid
        };
        bookMark?setBookMark(false):setBookMark(true);
        fetch('http://localhost:5000/bookmarks',{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(bookmark)
        })
        .then()
    }
    
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(watch => setShow(watch))
    },[])

    console.log(show)
    return (
        <div className="watch_style">
            <div style={{backgroundImage:`linear-gradient(rgba(0 0 0 / 20%), rgba(0, 0, 0, 0.5)), url(${show.cover_img})`}} className="watch_confirm_section">
                <div className="show_info">
                    <h1 className="show_info_h1">{show.name}</h1>
                    <p className="show_info_p">{show.des}</p>
                    <div className="watch_later_div">
                    <NavLink to={`/view/${params.show}/${params.watchid}`}><button className="watch_btn">Continue With  ${show.cost}</button></NavLink>
                        {
                            bookMark?<div onClick={handleWatchLater} className="bookmark_icon_div"><FontAwesomeIcon className="bookmark_icon" icon={faBookmark} /></div>:<button className="watch_later_btn" onClick={handleWatchLater}> Add To Watch Later</button>
                        }
                    </div>
                    <br />
                    <br />
                    <div className="watch_additional_info">
                        <b><FontAwesomeIcon  className="watch_additional_info_icon" icon={faClock} /></b>
                        <p className="watch_additional_info_text">{show.time}</p>
                        <b><FontAwesomeIcon  className="watch_additional_info_icon" icon={faEye} /></b>
                        <p className="watch_additional_info_text">{show.view}</p>
                        <b><FontAwesomeIcon  className="watch_additional_info_icon" icon={faStar}/></b>
                        <p className="watch_additional_info_text">{show.ratings}</p>
                        <b><FontAwesomeIcon  className="watch_additional_info_icon" icon={faDollarSign}/></b>
                        <p className="watch_additional_info_text">{show.cost}</p>
                    </div>
                </div>
            </div>
            <div className="show_sub_info">
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptates fuga nihil commodi accusantium aliquid impedit quibusdam similique totam incidunt ipsum velit facere recusandae reiciendis saepe ea deserunt, non expedita dignissimos. Maxime repellendus doloremque cum dolor iure quia voluptas laboriosam?</p>
                </div>
                <div>
                    <div className="main_colage_holder">
                        <img className="colage_holder" src={show.sub_img_one} alt="" />
                        <div className="colage_holder_sub">
                            <img className="colage_sub_img" src={show.sub_img_two} alt="" />
                            <img className="colage_sub_img" src={show.sub_img_three} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Watch;