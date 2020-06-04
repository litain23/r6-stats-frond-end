import React from 'react';
import '../../App.css'

import Landing from './../LandingPage/Landing'

import styled from 'styled-components'
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const Container = styled.div`
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

    width: 100%;
    margin-left: auto;
    margin-right: auto;
`;

const ProfileContainer = styled(Container)`
    display: flex;
    align-itmes: center;
    border: 1px solid purple;
    padding: 1.8rem;
`;

const ProfileImg = styled.div`
    width: 6.4rem;
    height: 6.4rem;
`;

const ProfileDesc = styled.div`
    margin: 0 0 0 1.2rem; 
    font-weight: 900;
    
    span {
        font-size: 2.4rem;
    }
`;

const ProfileRank = styled.div`
    margin-left: auto;
`;

interface Props {
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
                <ProfileImg className="profile-img" style={{
                }}>
                    <img src="https://ubisoft-avatars.akamaized.net/beec3d7b-a925-48a0-94bd-9896541dcbd5/default_256_256.png" style={{
                        width: "100%"
                    }}></img>
                </ProfileImg>

                <ProfileDesc className="profile-desc" style={{
                }}>
                    <span>Piliot(User Id)</span>
                </ProfileDesc>
                <ProfileRank>
                   <h1> Current rank image</h1> 
                </ProfileRank>
            </ProfileContainer>
        );
    }
};

