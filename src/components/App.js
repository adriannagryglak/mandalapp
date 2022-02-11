import React, { useState } from "react";

import DarkMode from './DarkMode';
import MandalaControl from "./MandalaControl.js";
import MandalaDisplay from "./MandalaDisplay";


export default function App(props) {

    const [darkMode, setDarkMode] = useState(false);

    function handleClickDarkMode() {
        setDarkMode(prevMode => !prevMode);
    };

    return (
        <>
            <section className="hero">
                <DarkMode caption="come to the"
                    isDark={darkMode}
                    onClick={handleClickDarkMode}
                />
                <h1>MANDALAPP</h1>
                <p>create your own mandala</p>
                <h2>let's start</h2>
            </section>
            <MandalaControl />
            <MandalaDisplay darkMode={darkMode} handleClickDarkMode={handleClickDarkMode}/>
            <footer>adriana learning react process started here</footer>
        </>
    );


}
