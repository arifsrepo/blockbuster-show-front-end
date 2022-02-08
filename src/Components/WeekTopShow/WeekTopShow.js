import React from 'react';
import './WeekTopShow.css';

const WeekTopShow = (props) => {
    const { _id, name, genere} = props.topShow;
    
    return (
        <div onClick={()=> props.handler(props.id)} className="top_show_item">
            <div className="top_number"><h2>{props.id + 1}</h2></div>
            <div className="top_name">{name}<br /><span className="top_genere">{genere}</span></div>
        </div>
    );
};

export default WeekTopShow;