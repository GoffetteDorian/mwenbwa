import React, {useState} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import {getCurrentUser} from "../../services/auth-service";

import Leaflet from "../map/leaflet";
import Login from "./login";

const Index = () => {
    // eslint-disable-next-line no-unused-vars
    const [user, setUser] = useState(getCurrentUser());

    if (user) {
        return (
            <Router>
                <div>
                    <Leaflet />
                </div>
                <div>
                    <Switch>
                        <Route path={"/hello"}>{"hello"}</Route>
                    </Switch>
                </div>
            </Router>
        );
    }
    return (
        <main>
            <Login />
        </main>
    );
};

export default Index;
