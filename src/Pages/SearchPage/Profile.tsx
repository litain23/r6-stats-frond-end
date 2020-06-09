import React from 'react';
import '../../App.css'
import './profile.css'


import styled from 'styled-components'
import { R6RankIcon } from '../../R6Components';

const Container = styled.div`
    width: 100%;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 576px) {
        max-width: 540px;
    }

    @media (min-width: 768px) {
        max-width: 720px;
    }

    @media (min-width: 992px) {
        max-width: 960px;
    }

    @media (min-width: 1200px) {
        max-width: 1140px;
    }
`;

/*
const ProfileContainer = styled(Container)`
    display: flex;
    align-itmes: center;
    border: 1px solid purple;
    padding: 1.6rem;
    background: #282830;
    color: white;

    @media (max-width: 768px) {
        flex-wrap: wrap;
        padding: 0.8rem;

        .profile-img {
            width: 4.8rem;
            height: 4.8rem;
        }
        
        .profile-desc span {
            font-size: 1.2rem;
        }
    }
`;*/

const MYCONTAINER = styled.div`
    width:100%;
    height:150px;
    padding: 0 1rem;
    background: #282830;
`

const MYCONTAINER1 = styled.div`
    max-width:1000px;
    height:100%;
    margin:0 auto;
    background-color:red;
`

const ProfileImgDesc = styled.div`
    display: flex;
    @media (max-width: 768px) {
        margin: auto;
    }
`;

const ProfileImg = styled.div`
    width: 6.4rem;
    height: 6.4rem;
    flex: 1 0 auto;
`;

const ProfileDesc = styled.div`
    margin: auto 0 auto 1.2rem; 
    font-weight: 900;
    
    span {
        font-size: 2rem;
    }
`;

const ProfileRankContainer = styled.div`
    margin: auto 0 auto auto;

    @media (max-width: 768px) {
        margin: auto;
    }
`;

interface Props {
    
}

const apiData = {
    maxMmr: 10,
    death: 10,
    rank: 10,
    maxRank:10,
    kills:10,
    updateTime: "now",
    abandons: 10,
    mmr:10,
    wins:10,
    region:"apac",
    season:10,
    losses:10
}

export default class Profile extends React.Component<Props> {
    constructor(props: Props){
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
            <div className="container1">
                <div className="profile-items">
                    <div className="profile">
                        <img src="https://ubisoft-avatars.akamaized.net/beec3d7b-a925-48a0-94bd-9896541dcbd5/default_256_256.png"></img>
                        <div className="profile-id">
                            <h1>hello</h1>
                        </div>
                    </div>
                    <div className="rank">
                        <ProfileRank></ProfileRank>
                    </div>
                </div>
            </div>
            </div>
        );
    }
};



const RANK_CONTAINER = styled.section`
    display:flex;
    flex-direction:row;
    background:gray;
    width:316px;
    background:#282830;
    border-radius:10px;
    justify-content:space-around;
`;

const RANK_CONTAINER2 = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:center;
    text-align:center;
    #name {
        color:white;
        font-size:10px;
    }
    #content{
        color:white;
        font-size:12px;
        font-weight:bold;
    }
`;


class ProfileRank extends React.Component {
    render() {
        return(
            <RANK_CONTAINER>
                <RANK_CONTAINER2>
                    <div id="name">아시아</div> 
                    <R6RankIcon rank={2} size={50}></R6RankIcon>
                    <div id="content">{124}</div> 
                </RANK_CONTAINER2>
                <RANK_CONTAINER2>
                    <div id="name">아시아</div> 
                    <R6RankIcon rank={3} size={50}></R6RankIcon>
                    <div id="content">{124123}</div> 
                </RANK_CONTAINER2>
                <RANK_CONTAINER2>
                    <div id="name">아시아</div> 
                    <R6RankIcon rank={4} size={50}></R6RankIcon>
                    <div id="content">{123123}</div> 
                </RANK_CONTAINER2>
            </RANK_CONTAINER>
        )
    };
}
