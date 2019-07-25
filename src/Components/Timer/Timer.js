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
        var a = moment("07/25/2019", "MM/DD/YYYY");
        var b = moment("11/09/2019", "MM/DD/YYYY");
        var duration = moment.duration(eventTime - Date.now(), 'milliseconds')
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
                    <span className="time">{this.state.days}</span>
                    <span>days</span>
                </div>
                <div>
                    <span className="time">{this.state.hours}</span>
                    <span>hours</span>
                </div>
                <div>
                    <span className="time">{this.state.minutes}</span>
                    <span>minutes</span>
                </div>
                <div>
                    <span className="time">{this.state.seconds}</span>
                    <span>seconds</span>
                </div>
            </div>
        )
    }
}

export default Timer;
