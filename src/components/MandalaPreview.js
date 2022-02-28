import React from 'react';
import { useRef } from 'react';
import { mandalaData } from '../data';
import exportAsImage from "../utils/exportAsImage";


export default function MandalaPreview(props) {

  const exportRef = useRef();

  const mandala = props.layers.map((layer, index) => {

    let radius = 0;
    for (let beforeLayer of props.layers) {
      if (props.layers.indexOf(beforeLayer) === 0) {
        radius = mandalaData.sizes[beforeLayer.size] / 2;

      } else if (props.layers.indexOf(beforeLayer) < index) {
        radius = radius + mandalaData.sizes[beforeLayer.size];
      }
    }

    const elements = [];

    for (let i = 0; i < layer.amount; i++) {
      let style = {};

      style.width = `${mandalaData.sizes[layer.size]}px`;
      style.height = `${mandalaData.sizes[layer.size]}px`;

      let deg = 360 / layer.amount;

      index === 0 ? style.transform = "" : style.transform = `rotate(${deg * i}deg) translateY(${radius + mandalaData.sizes[layer.size] / 2}px)`;

      let cls = `layer-element-${index.toString()}`; //useless unles for styling later

      let src = index === 0 ? mandalaData.middle.plants[layer.plants] : mandalaData.layers.plants[layer.plants];

      const el = (
        <div className={cls} style={style} key={i}>
          <img src={src} alt=""></img>
        </div>
      );
      elements.push(el);
    }
    return elements
    // </div>;//<div className={`layer-${index.toString()}`}>
            
  });

  return (<>
            <div className="mandala-preview" ref={exportRef}>{mandala}</div>
            <div className="mandala-download">
              <div></div>
              <h3>wanna save your art ?</h3>
              <button onClick={() => exportAsImage(exportRef.current, "my-mandalart")}>downolad jpg file !</button>
            </div>
          </>);
}
