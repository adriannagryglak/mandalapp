import React from 'react';
import darkImg from '../images/dark.png';
import lightImg from '../images/light.png';

export default function DarkMode(props) {
  const modeImg = props.isDark ? lightImg : darkImg;
  const word = props.isDark ? 'dark' : 'light';

  const el = props.caption ? (
    <div className="mode-container">
      <button onClick={props.onClick}>
        <img className="mode-img" src={modeImg} alt="dark mode toggle button" />
      </button>
      <span className="mode-caption">
        {props.caption}&nbsp;{word}
      </span>
      <span className="mode-cap-site">&nbsp;site</span>
    </div>
  ) : (
    <button onClick={props.onClick}>
      <img className="mode-img" src={modeImg} alt="dark mode toggle button" />
    </button>
  );

  return el;
}
