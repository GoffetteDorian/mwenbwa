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
                <h2> {this.state.date.toLocaleTimeString()} </h2>
                {this.time()}
            </div>
        );
    }
}

export default Clock;
