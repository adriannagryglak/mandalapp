import React from 'react';
import { mandalaData } from '../data';

export default function MandalaPreview(props) {
  const mandala = props.layers.map((layer, index, prevArr) => {
    let rad = 0;
    for (let beforeLayer of props.layers) {
      if (props.layers.indexOf(beforeLayer) < index) {
        rad = rad + mandalaData.middle.sizes[beforeLayer.size];
      }
    }

    const elements = [];

    for (let i = 0; i < layer.amount; i++) {
      let style = {};

      style.width = `${mandalaData.middle.sizes[layer.size]}px`;
      style.height = `${mandalaData.middle.sizes[layer.size]}px`;

      let deg = 360 / layer.amount;

      style.transform = `rotate(${deg * i}deg) translateY(${rad + mandalaData.middle.sizes[layer.size] / 2}px)`;

      let cls = `layer-element-${index.toString()}`; //useless unles for styling

      let src = mandalaData.middle.plants[layer.plants];

      const el = (
        <div className={cls} style={style} key={i}>
          <img src={src} alt=""></img>
        </div>
      );
      elements.push(el);
    }
    return elements;
  });

  return <div className="mandala-preview">{mandala}</div>;
}
