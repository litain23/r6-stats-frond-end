import React from 'react';
import '../../App.css'

import ProfileRank from './SubComponent/ProfileRank'

import styled from 'styled-components'

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
`;
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
            <ProfileContainer>
                <ProfileImgDesc>
                    <ProfileImg className="profile-img">
                        <img src="https://ubisoft-avatars.akamaized.net/beec3d7b-a925-48a0-94bd-9896541dcbd5/default_256_256.png" style={{
                            width: "100%"
                        }}></img>
                    </ProfileImg>

                    <ProfileDesc className="profile-desc" style={{
                    }}>
                        <span>Piliot(User Id)</span>
                    </ProfileDesc>
                </ProfileImgDesc>
                <ProfileRankContainer>
                    <ProfileRank api={apiData} />
                </ProfileRankContainer>
            </ProfileContainer>
        );
    }
};

