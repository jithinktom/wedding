import React from 'react';
import './Invitation.scss';
import Invitation2 from '../../Assets/invitation-2.png';

class Invitation extends React.Component {

    render() {
        return (
            <div className="invitation section">
                <div className="section-header-text">
                    Cordially inviting you...
                </div>
                <div className="invitation-images">
                    <div className="img-container">
                        <img src={Invitation2} alt="Invitation letter"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Invitation;
