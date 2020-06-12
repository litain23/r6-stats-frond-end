import React from "react";
import './searchbar.css'
import { SearchOutlined } from '@ant-design/icons';


const searchbar = () => {  

    return(
        <div className="search">
            <div className="search-box">
                <SearchOutlined />
                <input className="search-field" autoComplete="false" type="text" placeholder="Search">
                </input>
            </div>
            <div className="suggestion-list">
            </div>
        </div>
    )
}

export default searchbar;