import React, {useState} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import {getCurrentUser} from "../../services/auth-service";

import Leaflet from "../map/leaflet";
import Welcome from "../home/welcome";
import Gamelog from "../gamelog";
import GameLeader from "../gameleader";
import Signin from "./signin";
import Signup from "./signup";

const Index = () => {
    // eslint-disable-next-line no-unused-vars
    const [user, setUser] = useState(getCurrentUser());
    console.log("Token: ", user);

    // if (user) {
    //     return (
    //         <Router>
    //             <div></div>
    //             <div>
    //                 <Switch>
    //                     <Route path={"/hello"}>{"hello"}</Route>
    //                 </Switch>
    //             </div>
    //         </Router>
    //     );
    // }
    // return (
    //     <main>
    //         <Welcome />
    //         {/* <Login /> */}
    //     </main>
    // );
    if (user) {
        return (
            <>
                <Router>
                    <Route exact path={"/"} component={Leaflet} />
                    <Route exact path={"/logs"} component={Gamelog} />
                    <Route exact path={"/ladder"} component={GameLeader} />
                </Router>
            </>
        );
    }
    return (
        <>
            <Router>
                <Route exact path={"/"} component={Welcome} />
                <Route exact path={"/map"} component={Leaflet} />
                <Route exact path={"/signin"} component={Signin} />
                <Route exact path={"/signup"} component={Signup} />
            </Router>
        </>
    );
};

export default Index;
