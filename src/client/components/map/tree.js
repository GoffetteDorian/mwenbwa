/* becodeorg/mwenbwa
 *
 * /src/client/components/tree.js - Tree component
 *
 * coded by Dorian Goffette
 * started at 01/06/2020
 */

import React from "react";
import {Marker, Popup} from "react-leaflet";

const Tree = ({coords, tree, icon}) => (
    <Marker icon={icon} position={coords}>
        <Popup>{tree.owner ? tree.owner : "For sale"}</Popup>
    </Marker>
);

export default Tree;
