import React from 'react';
import useFirebase from '../hooks/useFirebase';
import './MyProfile.css';

const MyProfile = () => {
    // const [account, setAccount] = useState({});
    const { user, authloading, accountDetails } = useFirebase()

    const ssladdMoney = () => {
        const payment = {
            total_amount : 100,
            cus_name : accountDetails?.displayName,
            cus_email : user?.email,
            cus_add1 : accountDetails?.address,
            cus_phone : accountDetails?.mob
        }
        console.log(payment)
        fetch('http://localhost:5000/sslinit', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(payment)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            window.location.replace(data);
        })
    }

    console.log(accountDetails)

    return (
        <div className="profile_div">
            <br />
            <div>
                <h3>Welcome to your profile</h3>
                <p>From your profile you can easily manage all service easily...</p>
            </div>
            <div className="profile_data_holder">
                <div className="profile_img_holder">
                    ggggg
                </div>
                <div className="profile_info_holder">
                    <div className="personal_details">
                        <div>
                            <h1>{user.displayName}</h1>
                            <p>Your Email : <b>{user.email}</b></p>
                            <p>Joined in : <b>{user.metadata?.creationTime}</b></p>
                        </div>
                        <div>
                            <h3>Contact Info</h3>
                            <p>Address : <b>{accountDetails?.address}</b></p>
                            <p>Mobile No : <b>{accountDetails?.mob || accountDetails.number}</b></p>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <h4>Accounts Info</h4>
                        <p>Current Balance : <b>${accountDetails?.balance}</b></p>
                    </div>
                    <hr />
                    <div>
                        <b>Add Money</b>
                        <p>You can add <b>$100</b> at a time by using <b>SSL Commerze</b> payment getway.</p>
                        <div className="ssl_payment" onClick={ssladdMoney}>
                            <img className="ssl_img" src="https://i.ibb.co/BzqDQwX/ssl-logo.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;