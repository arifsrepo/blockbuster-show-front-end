import React from 'react';
import './TvSeriesPoster.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const TvSeriesPoster = (props) => {
    const { name, img, genere, ratings } = props.series;
    return (
        <div className="series_poster_holder">
            <div style={{backgroundImage:`url(${img})`}} className="series_poster">
                <div className="playing_hover_style">
                    {/* <img style={{width:'20%'}} src="https://i.ibb.co/n3ZXGR3/play-video-icon-png-transparent-3.png" alt="" /> */}
                </div>
            </div>
            <br />
            <div>
                <h5>{name}</h5>
                <div className="poster_info">
                    <div className="tvseries_genere">{genere}</div>
                    <div className="icon_style">
                        <div>
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        <div>{ratings}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TvSeriesPoster;