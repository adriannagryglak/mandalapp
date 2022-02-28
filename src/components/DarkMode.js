import React from 'react';
import { useRef, useEffect } from 'react';
import { ReactComponent as ModeSvg } from '../images/darklightmode.svg';

export default function DarkMode(props) {
  const word = props.isDark ? 'light' : 'dark';

  const wrapper = useRef(null);

  useEffect(() => {
    const [svg] = wrapper.current.children;
    const extra = svg.getElementById('extra');
    props.isDark ? extra.classList = "animate" : extra.classList = "";
  }, [props.isDark]);


  return (<div className="mode-container">
    <button onClick={props.onClick} className="mode-button" ref={wrapper}>
      <ModeSvg className={props.isDark ? "mode-img animate" : "mode-img"} alt="toggle darkmode button" />
    </button>
    <span>come to the {word} site</span>
  </div>);

}
