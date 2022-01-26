
import React from "react";

export default function Panel(props){

    const firstFormForMiddle = (
        <div className="middle-panel">
            <h3>im first and always will be</h3>
            <form>

            <label htmlFor="amount">Amount</label>
            <input type="range" id="amount" name="amount" value={props.formData.amount} onChange={props.onFormChange} min="4" max="20" step="2"></input>

            <fieldset>
                <legend>choose a size</legend>
                <input type="radio" 
                        id="none" 
                        onChange={props.onFormChange} 
                        name="size" 
                        value="none" 
                        checked={props.formData.size === "none"}>
                </input>
                <label htmlFor="none">None</label>
                <br/>
                <input type="radio" 
                        id="small" 
                        onChange={props.onFormChange} 
                        name="size" 
                        value="small" 
                        checked={props.formData.size === "small"}>
                </input>
                <label htmlFor="small">Small</label>
                <br/>
                <input type="radio" 
                        id="medium" 
                        onChange={props.onFormChange} 
                        name="size" 
                        value="medium" 
                        checked={props.formData.size === "medium"}>
                </input>
                <label htmlFor="medium">Medium</label>
                <br/>
                <input type="radio" 
                        id="big" 
                        onChange={props.onFormChange} 
                        name="size" 
                        value="big"
                        checked={props.formData.size === "big"}>
                </input>
                <label htmlFor="big">Big</label>
                <br/>
            </fieldset>

            <label htmlFor="plants">choose your element</label>
            <select id="plants" value={props.formData.plants} name="plants" onChange={props.onFormChange}>
                <option value="">what ?</option>
                <option value="flower">flower</option>
                <option value="leaf">leaf</option>
                <option value="cone">cone</option>
            </select>

            </form>
        </div>);


    const layersForm = (
        <div className="middle-panel">
            <h3>{numToAdjective(props.id)} panel is here</h3>
            <i onClick={()=>props.onClickRemovePanel(props.id)}>X</i>
        </div>);

    return (
        props.id === 0 ? firstFormForMiddle : layersForm
    );

}

function numToAdjective (n){
    const arr = ['zeroth', 'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth'];
    const output = n < 11 ? arr[n] : n.toString();
    return output
}

// could also use number into words npm https://www.npmjs.com/package/num-words