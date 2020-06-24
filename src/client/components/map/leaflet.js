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
// import imageFeuille from "../../../images/leafG.png";
// import imageArbre from "../../images/treeG.png";
import imageAvatar from "../../../images/avatar.png";
import ReceiveLoseLeaves from "../receiveloseleaves";
import Clock from "../timernow";
// import {Marker} from "leaflet";

const Leaflet = () => {
    const [nearbyTrees, setNearbyTrees] = useState([]);

    // console.log("RENDER");
    useEffect(() => {
        console.log(nearbyTrees);
    }, [nearbyTrees]);

    const handleDrag = e => {
        const map = e.target;
        fetch(`/api/trees/nearby/${map.getCenter().lat}/${map.getCenter().lng}`)
            .then(res => res.json())
            .then(result => setNearbyTrees(result.data));
    };

    // const createIcon = () => {

    // }

    return (
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
                    />
                ))}
            </MarkerClusterGroup>
            <div>
                <div className={"fixed-top"}>
                    <div
                        className={"collapse"}
                        id={"navbarToggleExternalContent"}>
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
                                    {"Deconnexion"}
                                </button>
                                <div className={"button colorPlayer"} />
                            </div>
                        </div>
                    </div>

                    <nav className={"navbar navbar-dark bg-dark test"}>
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
                            <p id={"timer"}>{<Clock />}</p>
                        </div>
                        <ReceiveLoseLeaves />
                    </nav>
                </div>
            </div>
        </Map>
    );
};
export default Leaflet;
