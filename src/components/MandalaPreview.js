import React from "react";

export default function MandalaPreview(props){

    return(
        <div className="mandala-preview">
            {JSON.stringify(props.layers)}
        </div>
    );
}