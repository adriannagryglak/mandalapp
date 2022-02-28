import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Panel(props) {

  const sizesFieldset = (
        <fieldset className='sizes-fieldset'>
          <legend className='visually-hidden'>choose a size</legend>
          <input
            type="radio"
            id="small"
            onChange={props.onFormChange}
            name="size"
            value="small"
            checked={props.formData.size === 'small'}
          />
          <svg width="200" height="373" viewBox="0 0 200 373" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100.5 372.5C83.9168 255.201 65.3732 209.689 4 190.5C71.4656 164.728 87.7945 115.69 100 1C112.615 113.655 127.651 164.54 196.5 190.5C127.97 215.478 111.776 262.493 100.5 372.5Z" stroke="black" strokeWidth="20"/>
          </svg>
          <label htmlFor="small" className='visually-hidden'>Small</label>
          
          <input
            type="radio"
            id="medium"
            onChange={props.onFormChange}
            name="size"
            value="medium"
            checked={props.formData.size === 'medium'}
          />
          <svg width="200" height="373" viewBox="0 0 200 373" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100.5 372.5C83.9168 255.201 65.3732 209.689 4 190.5C71.4656 164.728 87.7945 115.69 100 1C112.615 113.655 127.651 164.54 196.5 190.5C127.97 215.478 111.776 262.493 100.5 372.5Z" stroke="black" strokeWidth="20"/>
          </svg>
          <label htmlFor="medium" className='visually-hidden'>Medium</label>
          
          <input
            type="radio"
            id="big"
            onChange={props.onFormChange}
            name="size"
            value="big"
            checked={props.formData.size === 'big'}
          />
          <svg width="200" height="373" viewBox="0 0 200 373" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100.5 372.5C83.9168 255.201 65.3732 209.689 4 190.5C71.4656 164.728 87.7945 115.69 100 1C112.615 113.655 127.651 164.54 196.5 190.5C127.97 215.478 111.776 262.493 100.5 372.5Z" stroke="black" strokeWidth="20"/>
          </svg>
          <label htmlFor="big" className='visually-hidden'>Big</label>
          
        </fieldset>
  );

  const middleForm = (
    <div className="middle-panel">
      <h3>what's in your center?</h3>
      <form>
        <label htmlFor="plants" className='visually-hidden'>choose your element</label>
        <select
          id="plants"
          value={props.formData.plants}
          name="plants"
          onChange={props.onFormChange}
        >
          <option value="none">nothing</option>
          <option value="moon">moon</option>
          <option value="pine-cone">cone</option>
          <option value="sunflower">sunflower</option>
          <option value="wood">wood</option>
          <option value="rose">rose</option>
          <option value="cosmos">cosmos</option>
        </select>
        {sizesFieldset}
      </form>
    </div>
  );

  const layerTitle = props.formData.plants === "none"? <h3>{numToAdjective(props.id)} layer</h3> : <h3>{numToAdjective(props.id)} layer "{props.formData.plants}"</h3>;
  
  const layersForm = (
    <div className="layer-panel">
      {layerTitle}
      <button className="delete-layer-btn" onClick={() => props.onClickRemovePanel(props.id)}><i><FontAwesomeIcon icon={faXmark} /></i></button>
      <form>
        <label htmlFor="plants" className='visually-hidden'>choose your element</label>
        <select
          id="plants"
          value={props.formData.plants}
          name="plants"
          onChange={props.onFormChange}
        >
          <option value="none">nothing</option>
          <option value="purple-flower">purple flower</option>
          <option value="cone">cone</option>
          <option value="mushroom">mushroom</option>
          <option value="funghi">funghi</option>
          <option value="little-leaf">little leaf</option>
          <option value="green-leaf">green leaf</option>
          <option value="red-leaf">red leaf</option>
          <option value="fern-leaf">fern leaf</option>
          <option value="yellow-leaf">yellow leaf</option>
          <option value="blue-flower">blue flower</option>
          <option value="butterfly">butterfly</option>
          <option value="butterfly-blue">blue butterfly</option>
          <option value="cosmos">cosmos</option>
          <option value="lilac">lilac</option>
          <option value="rose">rose</option>
          <option value="yellow-rose">yellow rose</option>

        </select>
        {sizesFieldset}
        <label htmlFor="amount" className='visually-hidden'>Amount</label>
        <input
          type="range"
          id="amount"
          name="amount"
          value={props.formData.amount}
          onChange={props.onFormChange}
          min="2"
          max={idToMaxAmount(props.id)}
          step="1"
        />
      </form>
    </div>
  );

  return props.id === 0 ? middleForm : layersForm;
}

// could also use helper 'number into words' npm https://www.npmjs.com/package/num-words
function numToAdjective(n) {
  const arr = [
    'zeroth',
    'first',
    'second',
    'third',
    'fourth',
    'fifth',
    'sixth',
    'seventh',
    'eighth',
    'ninth',
    'tenth',
  ];
  const output = n < 11 ? arr[n] : n.toString();
  return output;
}

function idToMaxAmount(id){
  const array= [1, 16, 32, 38, 44, 52, 58, 64, 70, 76];
  return array[id];
}
