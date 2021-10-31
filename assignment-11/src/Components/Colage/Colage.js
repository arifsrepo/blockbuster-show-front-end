import React from 'react';
import './Colage.css';

const Colage = () => {
    return (
        <div>
            <br />
            <br />
            <h1>Go Exotic Places</h1>
            <br />
            <p>When it comes to exploring exotic places, the choices are numerous. Whether you like peaceful destinations or vibrant landscapes, we have offers for you.</p>
            <br />
            <div>
                <div className="grid_colage">
                    <div className="colage_column">
                        <br />
                        <img className="colage_img" src="https://vivoclinic.com/wp-content/uploads/2021/04/Bangladesh.jpg" alt="" />
                        <img className="colage_img" src="https://i.pinimg.com/564x/6c/b4/98/6cb498960fb7ff695eab1b1cd2b2a56f.jpg" alt="" />
                        <img className="colage_img" src="https://miro.medium.com/max/1400/1*3s4MNHeaiE9ql0APLHuNkQ.jpeg" alt="" />
                        <img className="colage_img" src="https://soultravelblog.com/wp-content/uploads/2018/01/Bangladesh-Tea-copy.jpeg" alt="" />
                        <img className="colage_img" src="https://thefinancialexpress.com.bd/public/uploads/1509805469.jpg" alt="" />
                    </div>
                    <div className="colage_column colage_extra">
                        <img className="colage_img" src="https://miro.medium.com/max/1400/1*3s4MNHeaiE9ql0APLHuNkQ.jpeg" alt="" />
                        <img className="colage_img" src="https://i.pinimg.com/474x/23/bf/5c/23bf5c5a61782b2d0e09a3bde9248ae5.jpg" alt="" />
                        <img className="colage_img" src="https://www.worldtravelguide.net/wp-content/uploads/2017/04/Think-Bangladesh-Bishnupur-538405559-davidevison-Copy.jpg" alt="" />
                        <img className="colage_img" src="https://thefinancialexpress.com.bd/uploads/1577717186.jpg" alt="" />
                    </div>
                    <div className="colage_column">
                        <br />
                        <img className="colage_img" src="https://media-eng.dhakatribune.com/uploads/2021/08/planes-at-dhk-airport-1628163380059.jpg" alt="" />
                        <img className="colage_img" src="https://s3.amazonaws.com/iexplore_web/images/assets/000/005/792/original/Bangladesh.jpg?1442936305" alt="" />
                        <img className="colage_img" src="https://i.pinimg.com/736x/e2/04/92/e20492aba644f6e1e5e21bdcfff38a12.jpg" alt="" />
                        <img className="colage_img" src="https://www.lostwithpurpose.com/wp-content/uploads/2018/04/bangladeshfemale1.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Colage;