import React from "react";

export default function Panel(props){
    
    return (
        props.isFirst ? (
            <div className="middle-panel">
                 <h3>im first and always will be</h3>
                 <button></button>
                 <button></button>
            </div>
        ) : (
            <div className="middle-panel">
                <h3>{numToAdjective(props.id)} panel is here</h3>
                 <button></button>
                 <button></button>
                 <button></button>
                 <button></button>
    
                 <i onClick={()=>props.onClickRemovePanel(props.id)}>X</i>
            </div>
        )
    ); 

}

function numToAdjective (n){
    const arr = ['zeroth', 'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth'];
    const output = n < 11 ? arr[n] : n.toString();
    return output
}

// could also use number into words npm https://www.npmjs.com/package/num-words