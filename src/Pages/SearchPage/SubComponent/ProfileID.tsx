import react from 'react';
import styled from 'styled-components';
import React from 'react';
import {R6Button} from '../../../R6Components';

/// Styles /// 

const CONTAINER = styled.section`
    display:flex;
    flex-direction:row;
    height:150px;
`;

const PROFILE_PIC = styled.section`
    display:flex;
    width:150px;
    height:150px;
`;

const PROFILE_PIC_CONTENT = styled.section`
    background:green;
    justify-content:center;
    align-items:stretch;
    flex:1;
    margin:15px;
    margin-left:0px;
    margin-right:30px;
`;

const PROFILE_ID = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:center;
`;

const PROFILE_ID_ID = styled.section`
    color:white;
    font-size:40px;
    font-weight:900; important!
`;


interface Props {
    id : string
}

const ProfileID = ({id} : Props) => {
    return(
        <CONTAINER>
            <PROFILE_PIC>
                {/* <PROFILE_PIC_CONTENT/> */}
                <img src={"https://cdn.r6stats.com/full-figures/lesion_figure.png"}></img>
            </PROFILE_PIC>
            <PROFILE_ID>
                <PROFILE_ID_ID>
                    <span style={{fontWeight:1200}}> {id} </span> 
                </PROFILE_ID_ID>
                <R6Button size={"sm"}>전적갱신하기</R6Button>
            </PROFILE_ID>
        </CONTAINER>
    )
}

export default ProfileID;