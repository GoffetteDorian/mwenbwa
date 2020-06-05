import React, {useEffect, useState} from "react";
import {Map, TileLayer} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
// import "react-leaflet-markercluster/dist/styles.min.css";

import Tree from "./tree";

const Leaflet = () => {
    const [nearbyTrees, setNearbyTrees] = useState([]);
    // console.log("RENDER");
    useEffect(() => {
        console.log(nearbyTrees);
    }, [nearbyTrees]);

    const handleDrag = (e) => {
        const map = e.target;
        fetch(`/trees/${map.getCenter().lat}/${map.getCenter().lng}`)
            .then((res) => res.json())
            .then((result) => setNearbyTrees(result.data));
    };

    // };
    return (
        <Map onDragend={handleDrag} center={[50.63, 5.58]} zoom={16}>
            <TileLayer
                url={
                    "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                }
                attribution={`&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`}
                subdomains={"abcd"}
                maxZoom={19}
            />
            {/* <MarkerClusterGroup
                iconCreateFunction={createClusterIcon}
                spiderLegPolylineOptions={{
                    weight: 0,
                    opacity: 0,
                }}> */}
            {nearbyTrees.map((tree) => (
                <Tree
                    key={`tree-${tree._id}`}
                    coords={[tree.geoloc.lat, tree.geoloc.lon]}
                />
            ))}
            {/* </MarkerClusterGroup> */}
            {/* <Tree coords={[50.63, 5.58]} /> */}
        </Map>
    );
};
export default Leaflet;
