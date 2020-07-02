import React, {Component} from "react";

class Clock extends Component {
    state = {
        date: new Date(),
    };

    time() {
        setInterval(() => {
            this.setState({date: new Date()});
        }, 1000);
    }
    render() {
        return (
            <div className={"clock"}>
                <div> {this.state.date.toLocaleTimeString()} </div>
                {this.time()}
            </div>
        );
    }
}

export default Clock;
