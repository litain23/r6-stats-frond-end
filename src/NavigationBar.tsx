
import React from 'react';
import './navigationbar.css'
import { TeamOutlined } from '@ant-design/icons';

import { Link } from 'react-router-dom';

import { Input } from 'antd';
import styled from 'styled-components'
import SearchBar from './SearchBar'

const { Search } = Input;

const StyledSearch = styled(Search)`
    .ant-input-group * {
        height: 30px;
        font-size: 20px;
        border-radius: 0px;
    }

    .ant-btn-primary {
        background: #515163;
        border-color: #515163;
    }

    .ant-input-group-addon {
        background: #515163;
    }
`;

const navBar = () => {
    return(
        <>
        <nav className="global-navbar">
            <div className="global-nav-links">
                <Link to='/' ><span className="brand-logo">R6 Stats</span></Link>
                <div className="desktop-search-bar">
                    <SearchBar></SearchBar>
                </div>
                <Link to='/abc'> <span> <TeamOutlined/> Sign In / Sign Up</span></Link>
            </div>
        </nav>
        <nav className="mobile-search-navbar">
            <div className="mobile-search-bar">
                <SearchBar></SearchBar>
            </div>
        </nav>
        </>
    )
}

export default navBar;
