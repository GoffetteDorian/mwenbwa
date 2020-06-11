/* becodeorg/mwenbwa
 *
 * /src/client/components/tree.js - Tree component
 *
 * coded by Dorian Goffette
 * started at 01/06/2020
 */

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
