import React, { useState } from "react";
import './searchbar.css'
import { SearchOutlined } from '@ant-design/icons';
import { RouteComponentProps } from "react-router-dom";
import R6PlatformIonGroup from "./R6Components/R6PlatformIconGroup";
import R6PlatformIcon from "./R6Components/R6PlatformIcon";
import { PlatformType } from "./util/type";


const searchbar = ({history, location, match}: RouteComponentProps) => {  

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [key, setKey] = useState<PlatformType>("uplay");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState("");
    
    history.listen((location) => {
        setValue("")
    })

    return(
        <div className="search">
            <div className="search-box">
                <SearchOutlined className="search-icon"/>
                <input type="text" value={value} onChange={(e)=>{setValue(e.currentTarget.value)}} className="search-field" autoComplete="false" placeholder="Search" onKeyDown={ (event) => {
                    if (event.keyCode === 13) {
                        history.push(`/search/overview/query?platform=${key}&username=${event.currentTarget.value}`)
                    }
                }}/>
                <R6PlatformIonGroup className="icon-lists" value={key} onChange={(value)=>{setKey(value)}}>
                    <R6PlatformIcon value={"uplay"}></R6PlatformIcon>
                    <R6PlatformIcon value={"psn"}></R6PlatformIcon>
                    <R6PlatformIcon value={"xbl"}></R6PlatformIcon>
                </R6PlatformIonGroup>
            </div>
            <div className="suggestion-list">
            </div>
        </div>
    )
}

export default searchbar;