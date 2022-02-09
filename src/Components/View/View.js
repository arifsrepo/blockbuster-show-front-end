import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useFirebase from '../hooks/useFirebase';
import ReactPlayer from 'react-player';
import './View.css';
import { Spinner } from 'react-bootstrap';

const View = () => {
    const  params = useParams();
    const [urlLoader, setUrlLoader] = useState(true);
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
            fetch('https://aqueous-peak-41377.herokuapp.com/view',{
            // fetch('http://localhost:5000/view',{
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
    console.log('URL Is :', url);
    return (
        <div className="viewer_section">
            <div className="player_section">
                <br /><br /><br /><br />
                {
                    url?.url?'':<Spinner animation="border" variant="danger" />
                }
                <ReactPlayer className="main_viewport" controls url={url?.url} playing={true}></ReactPlayer>
            </div>
        </div>
    );
};

export default View;