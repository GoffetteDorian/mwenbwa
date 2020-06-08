import React, {Component} from "react";
import menuIcon from "../../images/open-menu.png";
import gearIcon from "../../images/gear.png";
import ReceiveLoseLeaves from "./receiveLoseLeaves";
class Timers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countMinutes: 900,
            countHour: 3600,
        };
    }
    // eslint-disable-next-line class-methods-use-this
    render() {
        const {countMinutes} = this.state;
        const {countHour} = this.state;
        return (
            <div className={"nav-main"}>
                <ReceiveLoseLeaves />
                <div className={"timers"}>
                    <span className={"timer"}> {countHour} </span>
                    <span className={"timer"}> {countMinutes} </span>
                </div>
                <div className={"test"}>
                    <img className={"gearIcon"} src={gearIcon} />
                    <img className={"menuIcon"} src={menuIcon} />
                </div>
            </div>
        );
    }
    componentDidMount() {
        this.myInterval = setInterval(() => {
            this.setState(prevState => ({
                countMinutes: prevState.countMinutes - 1,
            }));
            this.setState(prevState => ({
                countHour: prevState.countHour - 1,
            }));
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.myInterval);
    }
}

export default Timers;
