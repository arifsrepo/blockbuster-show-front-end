import React from 'react';
import Carousel from 'react-elastic-carousel';
import Card from './Card/Card';
import Item from "./Item";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

const MyCarusel = () => {
    return (
        <div>
            <Carousel breakPoints={breakPoints}>
                <Item>1</Item>
                <Item>2</Item>
                <Item>3</Item>
            </Carousel>
        </div>
    );
};
export default MyCarusel;