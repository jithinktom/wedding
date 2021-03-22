import React from 'react';
import './Timer.scss';
import moment from 'moment';

const eventTime = 1573277400000

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hours: ["0"],
            minutes: ["0"],
            seconds: ["0"],
            days: ["0"]
        }
    }
    tick = () => {
        let date = new Date()
        let a = moment(`${date.getUTCMonth() + 1}/${date.getDate()}/${date.getFullYear()}`, "MM/DD/YYYY");
        let b = moment("11/09/2019", "MM/DD/YYYY");
        let duration = moment.duration(Date.now() - eventTime, 'milliseconds')
        let days = `${a.diff(b, 'days')}`;
        this.setState({
            days: days.split(""),
            hours: `${duration.hours()}`.split(""),
            minutes: `${duration.minutes()}`.split(""),
            seconds: `${duration.seconds()}`.split("")
        })
    }
    componentWillMount() {
        this.handleTimer = setInterval(this.tick, 1000)
    }
    renderDigits = (arr) => {
        return arr.map((digit, index) => {
            return <span key={index} className="digit">{digit}</span>
        })
    }
    render() {
        return (
            <div className="timer">
                <div>
                    <div className="segment">
                        {this.renderDigits(this.state.days)}
                        <span className="unit">days</span>
                    </div>
                </div>
                <div>
                    <div className="segment">
                        {this.renderDigits(this.state.hours)}
                        <span className="unit">hours</span>
                    </div>
                </div>
                <div>
                    <div className="segment">
                        {this.renderDigits(this.state.minutes)}
                        <span className="unit">minutes</span>
                    </div>
                </div>
                <div>
                    <div className="segment">
                        {this.renderDigits(this.state.seconds)}
                        <span className="unit">seconds</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Timer;
