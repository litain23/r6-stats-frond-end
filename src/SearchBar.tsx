import React from "react";
import './searchbar.css'
import { SearchOutlined } from '@ant-design/icons';
import { RouteComponentProps } from "react-router-dom";


const searchbar = ({history, location, match}: RouteComponentProps) => {  

    return(
        <div className="search">
            <div className="search-box">
                <SearchOutlined />
                <input type="text" className="search-field" autoComplete="false" placeholder="Search" onKeyDown={ (event) => {
                    if (event.keyCode === 13) {
                        history.push("/search/" + event.currentTarget.value)
                    }
                }}/>
            </div>
            <div className="suggestion-list">
            </div>
        </div>
    )
}

export default searchbar;