import React from "react";
import {Marker, Popup} from "react-leaflet";

const Tree = (props) => {
    const {coords} = props;
    return (
        <Marker position={coords}>
            <Popup>
                <span>{"POPUP"}</span>
            </Popup>
        </Marker>
    );
};

export default Tree;
