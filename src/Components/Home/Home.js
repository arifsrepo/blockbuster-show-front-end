import React from 'react';
import MainBanner from '../MainBanner/MainBanner';
import './Home.css';
import SectionToday from '../SectionToday/SectionToday';
import PopularMovies from '../PopularMovies/PopularMovies';
import Feature from '../Feature/Feature';
import Others from '../Others/Others';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <MainBanner></MainBanner>
            <SectionToday></SectionToday>
            <PopularMovies></PopularMovies>
            <Feature></Feature>
            <Others></Others>
            <Footer></Footer>
        </div>
    );
};

export default Home;