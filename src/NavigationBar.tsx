
import React from 'react';
import './navigationbar.css'

import { Link,  RouteComponentProps } from 'react-router-dom';

import SearchBar from './SearchBar'

const navBar = ({history, match, location}: RouteComponentProps) => {
    return(
        <>
        <nav className="global-navbar">
            <div className="global-nav-links">
                <Link to='/' ><span className="brand-logo">R6 Search Me</span></Link>
                <div className="desktop-search-bar">
                    <SearchBar history={history} match={match} location={location}></SearchBar>
                </div>
                {/* <Link to='/login'> <span> <TeamOutlined/> Sign In / Sign Up</span></Link> */}
            </div>
        </nav>
        <nav className="mobile-search-navbar">
            <div className="mobile-search-bar">
                <SearchBar history={history} match={match} location={location}></SearchBar>
            </div>
        </nav>
        </>
    )
}

export default navBar;
