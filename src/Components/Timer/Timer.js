import React from 'react';
import './Timer.scss';
import moment from 'moment';

const eventTime = 1573277400000

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hours: 0,
            minutes: 0,
            seconds: 0,
            days: 0
        }
    }
    tick = () => {
        let date = new Date()
        let a = moment(`${date.getUTCMonth() + 1}/${date.getDate()}/${date.getFullYear()}`, "MM/DD/YYYY");
        let b = moment("11/09/2019", "MM/DD/YYYY");
        let duration = moment.duration(eventTime - Date.now(), 'milliseconds')
        this.setState({
            days: b.diff(a, 'days'),
            hours: duration.hours(),
            minutes: duration.minutes(),
            seconds: duration.seconds()
        })
    }
    componentWillMount() {
        this.handleTimer = setInterval(this.tick, 1000)
    }
    render() {
        return (
            <div className="timer">
                <div>
                    <div className="segment">
                        <span className="digit">{parseInt(this.state.days / 10)}</span>
                        <span className="digit">{this.state.days % 10}</span>
                        <span className="unit">days</span>
                    </div>
                </div>
                <div>
                    <div className="segment">
                        <span className="digit">{parseInt(this.state.hours / 10)}</span>
                        <span className="digit">{this.state.hours % 10}</span>
                        <span className="unit">hours</span>
                    </div>
                </div>
                <div>
                    <div className="segment">
                        <span className="digit">{parseInt(this.state.minutes / 10)}</span>
                        <span className="digit">{this.state.minutes % 10}</span>
                        <span className="unit">minutes</span>
                    </div>
                </div>
                <div>
                    <div className="segment">
                        <span className="digit">{parseInt(this.state.seconds / 10)}</span>
                        <span className="digit">{this.state.seconds % 10}</span>
                        <span className="unit">seconds</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Timer;
