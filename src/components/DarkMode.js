import React from "react";
import darkImg from '../images/dark.png';
import lightImg from '../images/light.png';

export default function DarkMode(props){

    const modeImg = props.isDark ? lightImg : darkImg ;
    const word = props.isDark ? "dark" : "light" ;

    return (
            <div className="mode-container">
                {props.caption && <>
                                    {props.caption}
                                    <span className="mode-caption">&nbsp;{word}</span>
                                    <span className="mode-cap-site">&nbsp;site</span>
                                  </>
                }
                <img className="mode-img" src={modeImg} onClick={props.onClick} alt="dark/light mode toggling icon"/>
            </div>
        )
 
};