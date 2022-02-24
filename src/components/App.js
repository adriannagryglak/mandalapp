import React, { useState, useEffect } from 'react';

import DarkMode from './DarkMode';
import MandalaControl from './MandalaControl.js';
import MandalaDisplay from './MandalaDisplay';

export default function App(props) {
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem('isThemeDark')
      ? JSON.parse(localStorage.getItem('isThemeDark'))
      : window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  darkMode
    ? document.body.classList.add('dark-theme')
    : document.body.classList.add('light-theme');

  function handleClickDarkMode() {
    setDarkMode((prevMode) => !prevMode);
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? document.body.classList.toggle('light-theme')
      : document.body.classList.toggle('dark-theme');
  }

  useEffect(() => {
    localStorage.setItem('isThemeDark', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <>
      <section className="hero">
        <DarkMode
          caption="come to the"
          isDark={darkMode}
          onClick={handleClickDarkMode}
        />
        <h1>MANDALAPP</h1>
        <div className="hero-container-l"></div>
        <div className="hero-container-r"></div>
        <h2>magic begins here</h2>
      </section>
      <MandalaControl />
      <MandalaDisplay
        darkMode={darkMode}
        handleClickDarkMode={handleClickDarkMode}
      />
      <footer>adriana learning react process started here</footer>
    </>
  );
}
