import React from 'react';
import './Admin.css';
import { NavLink, Route, Switch, useParams, useRouteMatch } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faTv, faMoneyCheckAlt, faStar, faChartPie, faCogs, faDeezer } from '@fortawesome/free-solid-svg-icons';
import useFirebase from '../hooks/useFirebase';
import AdminHome from './AdminHome/AdminHome';
import ManageUser from './ManageUser/ManageUser';
import NewShow from './NewShow/NewShow';
import CurrentBalance from './CurrentBalance/CurrentBalance';
import UserRatings from './UserRatings/UserRatings';

const Admin = () => {
    const { user, accountDetails } = useFirebase();
    let { path, url } = useRouteMatch();
    console.log(accountDetails)
    
    return (
        <div className="admin_div">
            <div className="admin_side_menu">
                <div className="admin_side_menu_div">
                    <NavLink to={`${url}`} className="side_menu_NavLink">
                        <FontAwesomeIcon icon={faHome} /> <span className="NavLink_Span">Home</span>
                    </NavLink>
                    <NavLink className="side_menu_NavLink" to={`${url}/manageuser`}>
                        <FontAwesomeIcon icon={faUsers} /> <span className="NavLink_Span"> Manage Users </span>
                    </NavLink>
                    <NavLink className="side_menu_NavLink" to={`${url}/newshow`}>
                        <FontAwesomeIcon icon={faTv} /> <span className="NavLink_Span"> Add New Show </span>
                    </NavLink>
                    <NavLink className="side_menu_NavLink" to={`${url}/balance`}>
                        <FontAwesomeIcon icon={faMoneyCheckAlt} /> <span className="NavLink_Span"> Current Balance </span>
                    </NavLink>
                    <NavLink className="side_menu_NavLink" to={`${url}/userratings`}>
                        <FontAwesomeIcon icon={faStar} /> <span className="NavLink_Span"> User Ratings </span>
                    </NavLink>
                </div>
            </div>
            <div className="admin_panale">
                <div className="admin_id">
                    <h4>{accountDetails?.displayName}</h4>
                    <p>Role : {accountDetails.role}</p>
                </div>
                <div className="admin_summery">
                    <div className="admin_summery_sub">
                        <div className="summery_sub_one">
                            <div className="summery_main_info">
                                <p>Total Movie</p>
                                <h1>467</h1>
                            </div>
                            <div className="summery_icon_holder">
                                <FontAwesomeIcon style={{color:"#2196f3"}} icon={faChartPie} />
                            </div>
                        </div>
                        <div>
                            <hr style={{color:"#2196f3", height:"3px"}} />
                        </div>
                    </div>
                    <div className="admin_summery_sub">
                        <div className="summery_sub_one">
                            <div className="summery_main_info">
                                <p>Total Movie</p>
                                <h1>851</h1>
                            </div>
                            <div className="summery_icon_holder">
                                <FontAwesomeIcon style={{color:"crimson"}} icon={faTv} />
                            </div>
                        </div>
                        <div>
                            <hr style={{color:"crimson", height:"3px"}} />
                        </div>
                    </div>
                    <div className="admin_summery_sub">
                        <div className="summery_sub_one">
                            <div className="summery_main_info">
                                <p>Total Movie</p>
                                <h1>6217</h1>
                            </div>
                            <div className="summery_icon_holder">
                                <FontAwesomeIcon style={{color:"springgreen"}} icon={faCogs} />
                            </div>
                        </div>
                        <div>
                            <hr style={{color:"springgreen", height:"3px"}} />
                        </div>
                    </div>
                    <div className="admin_summery_sub">
                        <div className="summery_sub_one">
                            <div className="summery_main_info">
                                <p>Total Movie</p>
                                <h1>4567</h1>
                            </div>
                            <div className="summery_icon_holder">
                                <FontAwesomeIcon icon={faChartPie} />
                            </div>
                        </div>
                        <div>
                            <hr style={{color:"springgreen", height:"3px"}} />
                        </div>
                    </div>
                </div>
                <div className="admin_details">
                    <Switch>
                        <Route exact path={path}>
                            <AdminHome></AdminHome>
                        </Route>
                        <Route path={`${path}/manageuser`}>
                            <ManageUser></ManageUser>
                        </Route>
                        <Route path={`${path}/newshow`}>
                            <NewShow></NewShow>
                        </Route>
                        <Route path={`${path}/balance`}>
                            <CurrentBalance></CurrentBalance>
                        </Route>
                        <Route path={`${path}/userratings`}>
                            <UserRatings></UserRatings>
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default Admin;