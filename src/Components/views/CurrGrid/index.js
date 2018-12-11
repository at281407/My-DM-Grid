import React, { Component } from "react";
import {connect} from "react-redux";

import Grid from "../../structures/Grid";
import Card from "../../structures/Card";

import {CurrGrid} from "../../_styles/views/Curr-Grid"

class CurrGridView extends Component {
  render () {
    return (
      <CurrGrid>
         <Grid width={this.props.gridWidth} height={this.props.gridHeight} />
         <Card />
      </CurrGrid>
    );
  }
}

export default connect(
  (state) => ({
      gridWidth: state.gridSettingsReducer.gridWidth,
      gridHeight: state.gridSettingsReducer.gridHeight,
  })
  )(CurrGridView)