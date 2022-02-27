import React from 'react';
import Panel from './Panel';
import MandalaPreview from './MandalaPreview';

export default function MandalaControl(props) {
  const [layers, setLayers] = React.useState([
    {
      plants: '',
      size: 'none',
      amount: 1,
    },
  ]);

  function addLayer() {
    setLayers((prevLayers) => [
      ...prevLayers,
      { plants: 'none', size: 'small', amount: '2' },
    ]);
  }

  function removeLayer(id) {
    setLayers((prevLayers) => {
      return prevLayers.filter((el) => {
        return prevLayers.indexOf(el) !== id;
      });
    });
  }

  function handleFormChange(event, id) {
    const { name, value } = event.target;

    setLayers((prevLayers) => {
      return prevLayers.map((layer, index) => {
        if(name === 'plants' && value === "none" && index === id){
          layer.size = value;
        }
        return index === id ? { ...layer, [name]: value } : layer;
      });
    });
  }

  const layerComponents = layers.map((layer, index) => {
    return index === 0 ? (
      <Panel
        id={index}
        key={index}
        onFormChange={(event) => {
          handleFormChange(event, index);
        }}
        formData={layer}
      />
    ) : (
      <Panel
        id={index}
        key={index}
        formData={layer}
        onFormChange={(event) => {
          handleFormChange(event, index);
        }}
        onClickRemovePanel={removeLayer}
      />
    );
  });

  return (
    <>
      <main>
        <div className="mandala-control">
          {layerComponents}
          {layerComponents.length < 10 && <button onClick={addLayer}>add layer</button>}
        </div>
        <MandalaPreview layers={layers} />
      </main>
    </>
  );
}
