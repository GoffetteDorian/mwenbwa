import React from "react";
import {Map, TileLayer, Marker, Popup} from "react-leaflet";

import Tree from "./tree";

const MAX_DISTANCE = 1; // Max distance in km

const Leaflet = (props) => {
    const {trees} = props;
    const nearestTrees = (coords) => {};
    return (
        <Map center={[50.63, 5.58]} zoom={16}>
            <TileLayer
                url={
                    "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                }
                attribution={`&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`}
                subdomains={"abcd"}
                maxZoom={19}
            />
            <Tree coords={[50.63, 5.58]} />
        </Map>
    );
};
export default Leaflet;
