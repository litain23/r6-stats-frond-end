import React from 'react';
import '../../App.css'
import './profile.css'

import { RANKBYREGION, PROFILEAPI } from './../../util/type'
import ProfileRank from './SubComponent/ProfileRank'
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps<{id:string}>{
    currentRankData: RANKBYREGION[],
    username:string,
    profileID: PROFILEAPI,
}

class Profile extends React.Component<Props> {


    render() {

        
        return (
            <div className="container1">
                <div className="profile-items">
                    <div className="profile">
                        <img alt="profile" className="background-black" src={`https://ubisoft-avatars.akamaized.net/${this.props.profileID.profileId}/default_256_256.png`}></img>
                        <div className="profile-id">
                            <h1>{this.props.username}</h1>
                        </div>
                    </div>
                    <div className="rank">
                        <ProfileRank currentRankData={this.props.currentRankData} ></ProfileRank>
                    </div>
                </div>
            </div>
        );
    }
};

export default withRouter(Profile)