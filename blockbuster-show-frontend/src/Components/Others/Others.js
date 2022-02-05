import React from 'react';
import { useState, useEffect } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import WeekTopShow from '../WeekTopShow/WeekTopShow';
import './Others.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Others = () => {
    const [topgenselector, setTopgenselector] = useState('topmovie');
    const [topShow, setTopShow] = useState([]);
    const [loading, setLoading] = useState(false);
    const [detailsid, setDetailsid] = useState({})

    const url = `http://localhost:5000/${topgenselector}`;
    useEffect(()=>{
        setLoading(true)
        fetch(url)
        .then(res => res.json())
        .then(topdata => {
            setTopShow(topdata)
            setLoading(false)
            setDetailsid(topdata[0])
        })
    },[topgenselector])

    const detailsViewer = inesxid => {
        setDetailsid(topShow[inesxid]);
    }
    const myArray = topgenselector.split("p");

    return (
        <div className="others_style">
            <Container>
                <Row>
                    <Col sm={12} xs={12} md={4}>
                        <div className="top_menu_holder">
                            <div className="top_selecter">
                                <p className="top_style">Top 10 This Week</p>
                                <ul  className="list_style">
                                    <li onClick={()=> setTopgenselector('topmovie')} className={topgenselector==='topmovie'?'top_genere':''}>Movie </li>
                                    <li>\</li>
                                    <li onClick={()=> setTopgenselector('toptvseries')} className={topgenselector==='toptvseries'?'top_genere':''}> Tv Series</li>
                                </ul>
                            </div>
                            {
                                loading?<><div className="TopShowSpinnerHolder"><Spinner animation="border" variant="danger" /></div></>:topShow.map((topdata, index) => <WeekTopShow 
                                    id={index} 
                                    handler={detailsViewer}
                                    key={topdata._id} 
                                    topShow={topdata}
                                ></WeekTopShow>)
                            }
                        </div>
                    </Col>
                    <Col sm={12} xs={12} md={8}>
                        <div className="top_show_holder">
                            <p className="top_show_header_title">Top Show</p>
                            <div>
                                <Container>
                                    <Row>
                                        <Col sm={12} xs={12} md={4} className="top_poster_holder">
                                            {
                                                loading?<div className="details_loading_img_holder"><img className="loading_img_style" src="https://i.ibb.co/4NrPbFd/loadding.gif" alt="" /></div>:<div style={{backgroundImage:`linear-gradient(rgba(0 0 0 / 20%), rgba(0, 0, 0, 0.5)), url(${detailsid?.img})`}} className={ topgenselector==='toptvseries'?'details_poster':'details_poster2'}></div>
                                            }
                                            
                                        </Col>
                                        <Col sm={12} xs={12} md={8} className="top_poster_details">
                                            <div>
                                                <p className="details_show_name">{detailsid.name}</p>
                                                <p className="details_des">{detailsid.des}</p>
                                                <div className="top_show_rateings">
                                                    <div><p className="details_des">{detailsid.release} | {detailsid.cost} | {detailsid.time}</p></div>
                                                    <div className="top_show_rateings_icon">
                                                        <FontAwesomeIcon icon={faStar} />
                                                        <div className="top_show_rateings_text">
                                                            <div>{detailsid.ratings}</div>
                                                            <span className="top_show_rateings_vote">150 vote</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <NavLink to={`/watch/${detailsid._id}/${myArray[1]}`}><button className="details_btn">Watch Now</button></NavLink>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Others;