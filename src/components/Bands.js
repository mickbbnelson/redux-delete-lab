import React from 'react';
import Band from './Band';


const Bands = props => {

    const renderBands = props.bands.map((band) => <Band deleteBand={props.deleteBand} key={band.id} band={band} />)

    return (
        <div>
            {renderBands}
        </div>
    );
  };
  
  export default Bands;