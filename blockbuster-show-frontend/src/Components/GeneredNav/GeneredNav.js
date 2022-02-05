import React from 'react';
import { useState, useEffect } from 'react';
import './GeneredNav.css';
import MoviePoster from '../MoviePoster/MoviePoster';
import { Spinner } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const GeneredNav = () => {
    const [genere, setGenere] = useState('ALL');
    const [movie, setMovie] = useState([]);
    const [url, setUrl] = useState('http://localhost:5000/genere?genere=ALL&&page=0&&limit=4');
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const limit = 4;

    const requestSender = (selectGenere, currentPage) =>{
        setLoading(true);
        setUrl(`http://localhost:5000/genere?genere=${selectGenere}&&page=${currentPage}&&limit=${limit}`);
        setGenere(selectGenere)
        setCurrentPage(currentPage)
    }

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(movie => {
            movie.data?setMovie(movie.data):setMovie(movie.movie);
            const page = movie.count;
            const totalPage = Math.ceil(page/4);
            setPageCount(totalPage);
            setLoading(false);
        })
    }, [genere, currentPage])


    return (
        <>
            <div className="GeneredNav_Style">
                <div onClick={() => (requestSender("ALL", 0))}    className="genere_style"><div className={genere === 'ALL'?'active_genere_style':''}>ALL</div>           </div>
                <div onClick={() => (requestSender("Drama", 0))}  className="genere_style"><div className={genere === 'Drama'?'active_genere_style':''}>DRAMA</div>       </div>
                <div onClick={() => (requestSender("Action", 0))} className="genere_style"><div className={genere === 'Action'?'active_genere_style':''}>ACTION</div>     </div>
                <div onClick={() => (requestSender("Romance", 0))}className="genere_style"><div className={genere === 'Romance'?'active_genere_style':''}>ROMANCE</div>   </div>
                <div onClick={() => (requestSender("Comedy", 0))}className="genere_style"><div className={genere === 'Comedy'?'active_genere_style':''}>COMEDY</div>   </div>
                <div onClick={() => (requestSender("Crime", 0))}  className="genere_style"><div className={genere === 'Crime'?'active_genere_style':''}>CRIME</div>       </div>
            </div>

            {
                loading?<><div className="spinnerHolder"><Spinner animation="border" variant="danger" /></div></>:<div className="posterHolder">{movie.map(data => <NavLink className="poster_link_title_style" to={`/watch/${data._id}/${'movie'}`}><MoviePoster poster={data}></MoviePoster></NavLink>)}</div>
            }

            <div className="pagination">
                {
                    [...Array(pageCount).keys()].map(pagenumber => <div
                        className={pagenumber === currentPage ? 'selected_page':''}
                        key={pagenumber}
                        onClick={()=> {
                            requestSender(genere, pagenumber)
                        }}
                    >{pagenumber+1}</div>)
                }
                <div onClick={()=> { 
                        pageCount>currentPage+1?requestSender(genere, currentPage +1):console.log('To the limit')
                    }}>Next</div>
            </div>
        </>
    );
};

export default GeneredNav;