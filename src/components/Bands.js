import React from 'react';
import Band from './Band';


const Bands = props => {

    //const renderBands = () => {
    //    props.bands.map((band) => <Band deleteBand={props.deleteBand} key={band.id} band={band} />)
    //}
    return (
        <ul>
            {props.bands.map((band) => <Band deleteBand={props.deleteBand} key={band.id} bandObj={band} />)}
        </ul>
    );
  };
  
  export default Bands;