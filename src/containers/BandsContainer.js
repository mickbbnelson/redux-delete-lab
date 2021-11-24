import React, { Component } from 'react';
import BandInput from '../components/BandInput';
//import Band from '../components/Band';
import Bands from '../components/Bands';
import { connect } from 'react-redux';

class BandsContainer extends Component {

  //renderBands = () => this.props.bands.map((band, id) => <Band key={id} band={band} />)

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands} deleteBand={this.props.deleteBand} />
      </div>
    )
  }
}

const mapStateToProps = ({bands}) => ({bands})

const mapDispatchToProps = dispatch => ({
    addBand: name => dispatch({type: "ADD_BAND", name: name.name}),
    deleteBand: bandId => dispatch({ type: "DELETE_BAND", id:bandId})
  })

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer); 
