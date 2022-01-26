import React, { useState } from "react";

import DarkMode from './DarkMode';
import MandalaControl from "./MandalaControl.js";
import MandalaDisplay from "./MandalaDisplay";
import logoImg from "../images/logo.jpg";


export default function App(props) {

    const [darkMode, setDarkMode] = useState(false);

    function handleClickDarkMode() {
        setDarkMode(prevMode => !prevMode);
    };

    return (
        <>
            <section className="hero">
                <DarkMode caption="it cannot always be"
                    isDark={darkMode}
                    onClick={handleClickDarkMode}
                />
                <img className="logo" alt="logo-img" src={logoImg} />
                <h1>together we'll create magic</h1>
                <p>welcome and lets create your own mandala</p>
                <h2>let's start</h2>
            </section>
            <MandalaControl />
            <MandalaDisplay darkMode={darkMode} handleClickDarkMode={handleClickDarkMode}/>
            <footer>adriana learning react process started here</footer>
        </>
    );


}
