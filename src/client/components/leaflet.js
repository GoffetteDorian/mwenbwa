/* becodeorg/mwenbwa
 *
 * /src/server/controllers/leaflet.js - Leaflet component
 *
 * coded by Dorian Goffette
 * started at 01/06/2020
 */

import React, {useEffect, useState} from "react";
import {Map, TileLayer} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";

import Tree from "./tree";
// import {Marker} from "leaflet";

const Leaflet = () => {
    const [nearbyTrees, setNearbyTrees] = useState([]);
    // console.log("RENDER");
    useEffect(() => {
        console.log(nearbyTrees);
    }, [nearbyTrees]);

    const handleDrag = e => {
        const map = e.target;
        fetch(`/trees/nearby/${map.getCenter().lat}/${map.getCenter().lng}`)
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
        </Map>
    );
};
export default Leaflet;
