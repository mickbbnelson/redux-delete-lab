import React from 'react';


const Band = props => {
    return (
        <li>
        <span>{props.bandObj.name}</span>
        <button onClick={() => props.deleteBand(props.bandObj.id)}>DELETE</button>
        </li>
    );
  };
  
  export default Band;