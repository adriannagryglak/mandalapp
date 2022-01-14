import React from "react";
import darkImg from '../images/dark.png';
import lightImg from '../images/light.png';

export default function DarkMode(props){

    const modeImg = props.isDark ? lightImg : darkImg ;
    const word = props.isDark ? "day" : "night" ;

    return (
            <div className="mode-container">
                {props.caption && <span className="mode-caption">{props.caption} {word}</span>}
                <img className="mode-img" src={modeImg} onClick={props.onClick}/>
            </div>
        )
 
};