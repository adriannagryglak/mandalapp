import React from "react";
import Panel from "./Panel";

export default function MandalaControl(props){
        
    const [layers, setLayers] = React.useState([{
                                                element: null,
                                                size: null,
                                                }]);

    //create new "layer", data will be filled later by controls from <Panel itself somehow/>                                                 
    function handleClickBtn(){
        setLayers((prevLayers) => {
           return [...prevLayers, {
                                   element: null,
                                   size: null,
                                  }]
        });
    } 

    function removePanel(id){
        setLayers((prevLayers) => {
            return prevLayers.filter((el)=>{
                return prevLayers.indexOf(el) !== id
            });
        })
    }

   const layerComponents = layers.map((layer, index) => {
        return index === 0 ? (<Panel isFirst={true} id={index} key={index}/>) 
        : (<Panel isFirst={false} id={index} key={index} onClickRemovePanel={removePanel}/>)      
   });

    return (<div className="mandala-control">
                {layerComponents}
                {layerComponents.length <6 ? <button onClick={handleClickBtn}>add layer</button> : <button>you've had enough</button>}
            </div>);
}   


//creates always at the beginning firts special Panel DONE
//creates always at the end button DONE
//button onClick creates < Panel/> component DONE 
//removall of panel DONE
//provides data from all panels to its child ? or its sibling? <MandalaPreview/>