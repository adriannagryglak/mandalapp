
import React from "react";

export default function Panel(props){

    const middleForm = (
        <div className="middle-panel">
            <h3>im first and always will be</h3>
            <form>
                <label htmlFor="plants">choose your element</label>
                <select id="plants" value={props.formData.plants} name="plants" onChange={props.onFormChange}>
                    <option value="">what ?</option>
                    <option value="stone">flower</option>
                    <option value="leaf">leaf</option>
                </select>
            </form>
        </div>);


    const layersForm = (
        <div className="layer-panel">
            <h3>{numToAdjective(props.id)} panel is here</h3>
            <i onClick={()=>props.onClickRemovePanel(props.id)}>X</i>

            <form>
                <label htmlFor="plants">choose your element</label>
                <select id="plants" value={props.formData.plants} name="plants" onChange={props.onFormChange}>
                    <option value="">what ?</option>
                    <option value="flower">flower</option>
                    <option value="cone">cone</option>
                </select>
                <br/>
                <label htmlFor="amount">Amount</label>
                <input type="range" id="amount" name="amount" value={props.formData.amount} onChange={props.onFormChange} min="2" max="16" step="1"></input>

                <fieldset>
                    <legend>choose a size</legend>

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
            </form>
        </div>);

    return (
        props.id === 0 ? middleForm : layersForm
    );

}

// could also use helper 'number into words' npm https://www.npmjs.com/package/num-words

function numToAdjective (n){
    const arr = ['zeroth', 'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth'];
    const output = n < 11 ? arr[n] : n.toString();
    return output
}