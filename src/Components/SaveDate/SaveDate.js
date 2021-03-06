import React from 'react';
import './SaveDate.scss';
import Timer from '../Timer/Timer';

class SaveDate extends React.Component {

    render() {
        return (
            <div className="save-date section">
                <div className="section-header-text">
                    Save The Date <span className="love">❤</span>
                </div>
                <div className="details">
                    <div className="date">
                        09 November 2019 @ 11 am
                    </div>
                    <Timer />
                </div>
            </div>
        )
    }
}

export default SaveDate;
