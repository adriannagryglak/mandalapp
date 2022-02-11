import React from "react";
import { mandalaData } from "../data";

export default function MandalaPreview(props){

        const mandala = props.layers.map((layer, index, prev) => {
            const elements = [];
    
            for(let i=0; i<layer.amount; i++){
                let style={};

                let deg = 360/layer.amount;
                style.transform= `rotate(${deg*i}deg)`;

                style.width=`${mandalaData.middle.sizes[layer.size]}`;

                //oblicz oddalenie od srodka i zastosuj
                // const space = czy jest srodek, jesli tak to jego 70%size i 70%size wszystkich pozostalych wartsw -30% tego el 
                
                let src = mandalaData.middle.plants[layer.plants];

                const el = <div className="layer-element" style={style} key={i}>
                                <img src={src} alt=""></img>
                           </div>;
                elements.push(el);
            }

            return elements
        });

    return(
        <div className="mandala-preview">
            {mandala}
        </div>
    );
}