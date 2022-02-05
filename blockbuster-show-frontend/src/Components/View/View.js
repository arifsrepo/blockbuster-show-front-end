import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useFirebase from '../hooks/useFirebase';
import ReactPlayer from 'react-player';
import './View.css';

const View = () => {
    const  params = useParams();
    const { user, accountDetails } = useFirebase();
    const [url, setUrl] = useState(null);

    useEffect(() => {
        if(accountDetails?.email){
            const request = {
                uid:accountDetails?.payment?.tran_id,
                email:accountDetails?.email,
                show:params.show,
                watchid:params.watchid
            }
            console.log('sending request', request)
            fetch('http://localhost:5000/view',{
                method:'PUT',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(request)
            })
            .then(res => res.json())
            .then(link => setUrl(link))
        }
    },[accountDetails])

    return (
        <div className="viewer_section">
            <div className="player_section">
                <br /><br /><br /><br />
                <ReactPlayer className="main_viewport" controls url={url?.url} playing={true}></ReactPlayer>
            </div>
        </div>
    );
};

export default View;