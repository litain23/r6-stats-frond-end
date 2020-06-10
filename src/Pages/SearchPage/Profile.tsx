import React from 'react';
import '../../App.css'
import './profile.css'

import { RANKAPI } from './../../util/type'
import ProfileRank from './SubComponent/ProfileRank'

interface Props {
    rankData: RANKAPI[]
}

export default class Profile extends React.Component<Props> {
    constructor(props: Props){
        super(props);
    }

    render() {
        return (
            <div className="container1">
                <div className="profile-items">
                    <div className="profile">
                        <img src="https://ubisoft-avatars.akamaized.net/beec3d7b-a925-48a0-94bd-9896541dcbd5/default_256_256.png"></img>
                        <div className="profile-id">
                            <h1>hello</h1>
                        </div>
                    </div>
                    <div className="rank">
                        <ProfileRank rankData={this.props.rankData} ></ProfileRank>
                    </div>
                </div>
            </div>
        );
    }
};
