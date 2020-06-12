/* eslint-disable react/jsx-no-literals */
import React, {useState} from "react";
import {SliderPicker} from "react-color";

function ColorPicker() {
    const [color, setColor] = useState("#000");
    return (
        <div id={"color-picker"}>
            <SliderPicker
                color={color}
                // eslint-disable-next-line no-shadow
                onChangeComplete={color => setColor(color.hex)}
            />
            <div style={{color}}>
                <span> Hello </span>
            </div>
        </div>
    );
}

export default ColorPicker;
