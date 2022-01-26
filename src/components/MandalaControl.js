import React from "react";
import Panel from "./Panel";
import MandalaPreview from "./MandalaPreview";

export default function MandalaControl(props){
        
    const [layers, setLayers] = React.useState([{size: "none",
                                                 plants: "",
                                                amount: 4},]);
                                             
    function addLayer(){
        setLayers(prevLayers => [...prevLayers,{},] );
    } 

    function removeLayer(id){
        setLayers(prevLayers => {
            return prevLayers.filter((el)=>{
                return prevLayers.indexOf(el) !== id
            });
        })
    }

    function handleFormChange(event, id){
        const {name, value} = event.target;
        setLayers(prevLayers =>{
             return prevLayers.map((layer, index, prev)=>{
                return prev.indexOf(layer) === id ? ({...layer, [name]: value,}) : layer;
            });
        });
    }

   const layerComponents = layers.map((layer, index) => {
        return index === 0 ? (<Panel id={index} 
                                     key={index}
                                     onFormChange={(event)=>{handleFormChange(event, index)}}
                                     formData={layer}/>
                                     ) : ( <Panel id={index} 
                                                  key={index}
                                                  formData={layer} 
                                                  onFormChange={handleFormChange}
                                                  onClickRemovePanel={removeLayer}/>)      
   });

    return (
        <main>
            <MandalaPreview layers={layers}/>
            <div className="mandala-control">
                {layerComponents}
                {layerComponents.length <6 ? 
                <button onClick={addLayer}>add layer</button> : <button>you've had enough</button>}
            </div>
            <h2>let's show</h2>
        </main>
        );
}