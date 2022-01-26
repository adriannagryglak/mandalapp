import React from "react";
import DarkMode from "./DarkMode";

export default function MandalaDisplay(props){

    return(
        <section className="mandala-display">
        <div></div>
        <button>downolad jpg file !</button>
        <DarkMode isDark={props.darkMode}
            onClick={props.handleClickDarkMode}
        />
    </section>
    );
}