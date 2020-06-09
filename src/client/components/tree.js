import React from "react";
import {Marker, Tooltip} from "react-leaflet";

const Tree = props => {
    const {coords, tooltip} = props;
    return (
        <Marker position={coords}>
            <Tooltip>{tooltip}</Tooltip>
        </Marker>
    );
};

export default Tree;
