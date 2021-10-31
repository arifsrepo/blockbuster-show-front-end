import React from 'react';
import Carosel from '../Carosel/Carosel';
import Colage from '../Colage/Colage';
import Infosection from '../Infosection/Infosection';
import Packages from '../Packages/Packages';

const Home = () => {
    return (
        <div>
            <Carosel></Carosel>
            <Infosection></Infosection>
            <Packages></Packages>
            <Colage></Colage>
        </div>
    );
};

export default Home;