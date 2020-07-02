/* becodeorg/mwenbwa
 *
 * /src/server/controllers/leaflet.js - Leaflet component
 *
 * coded by Dorian Goffette
 * started at 01/06/2020
 */

/* eslint-disable react/button-has-type */
import React, {useEffect, useState} from "react";
import {Map, TileLayer} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import Tree from "./tree";
import imageAvatar from "../../../images/avatar.png";
import ReceiveLoseLeaves from "../receiveloseleaves";
import Clock from "../timernow";
import {getCurrentUser} from "../../services/auth-service";
import {iconURL} from "./icon";
import * as L from "leaflet";

const Leaflet = () => {
    const [nearbyTrees, setNearbyTrees] = useState([]);
    const [user] = useState(getCurrentUser());
    const [userIcon, setUserIcon] = useState();
    const [icon, setIcon] = useState();

    const createIcon = (color = "#00FF00") =>
        L.icon({
            iconUrl: iconURL(color),
            iconSize: [25, 25],
            iconAnchor: [25, 15],
            popupAnchor: [0, -20],
        });

    useEffect(() => {
        setIcon(createIcon());
        setUserIcon(createIcon(user.color));
    }, [nearbyTrees]);

    const handleDrag = e => {
        const map = e.target;
        fetch(`/api/trees/nearby/${map.getCenter().lat}/${map.getCenter().lng}`)
            .then(res => res.json())
            .then(result => setNearbyTrees(result.data));
    };

    return (
        <>
            <div className={"fixed-top"}>
                <div className={"collapse"} id={"navbarToggleExternalContent"}>
                    <div className={"bg-dark p-4"}>
                        <div className={"image-profil"}>
                            <img
                                src={imageAvatar}
                                alt={"profil-picture"}
                                id={"profil-picture"}
                                height={"100px"}
                                width={"100px"}
                            />
                        </div>
                        <div id={"button-profil"}>
                            <button type={"submit"} className={"button"}>
                                {"Profil"}
                            </button>
                            <button type={"submit"} className={"button"}>
                                {"Logout"}
                            </button>
                            <div className={"button colorPlayer"} />
                        </div>
                    </div>
                </div>

                <nav
                    className={"navbar navbar-dark bg-dark"}
                    style={{height: "100px"}}>
                    <button
                        className={"navbar-toggler"}
                        type={"button"}
                        data-toggle={"collapse"}
                        data-target={"#navbarToggleExternalContent"}
                        aria-controls={"navbarToggleExternalContent"}
                        aria-expanded={"false"}
                        aria-label={"Toggle navigation"}>
                        <span className={"navbar-toggler-icon"} />
                    </button>
                    <div id={"timerContener"}>
                        <div id={"timer"}>{<Clock />}</div>
                    </div>
                    <ReceiveLoseLeaves user={user} />
                </nav>
            </div>
            <Map
                className={"markercluster-map"}
                onDragend={handleDrag}
                center={[50.63, 5.58]}
                zoom={16}>
                <TileLayer
                    url={
                        "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                    }
                    attribution={`&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`}
                    subdomains={"abcd"}
                    maxZoom={19}
                />
                <MarkerClusterGroup>
                    {nearbyTrees.map(tree => (
                        <Tree
                            key={`tree-${tree._id}`}
                            coords={[tree.geoloc.lat, tree.geoloc.lon]}
                            tooltip={tree.owner}
                            icon={
                                tree.owner === user.username ? icon : userIcon
                            }
                            tree={tree}
                        />
                    ))}
                </MarkerClusterGroup>
            </Map>
        </>
    );
};
export default Leaflet;
