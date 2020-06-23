import React, {useState} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import {getCurrentUser} from "../../services/auth-service";

import Leaflet from "../map/leaflet";
import Welcome from "../home/welcome";
import Login from "./login";

const Index = () => {
    // eslint-disable-next-line no-unused-vars
    const [user, setUser] = useState(getCurrentUser());
    console.log("Index: ", user);

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
    return (
        <>
            <Router>
                <Route exact path={"/ntmfdp"} component={Leaflet} />
                <Route exact path={"/"} component={Welcome} />
                <Route exact path={"/login"} component={Login} />
            </Router>
        </>
    );
};

export default Index;
