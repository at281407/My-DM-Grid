import React, { Component } from 'react'

import {CurrGrid} from '../_styles/views/Curr-Grid'

class Cell extends Component {

  render () {
    console.log("Row Index: " + this.props.rowIndex);
    console.log("Col Index: " + this.props.colIndex);
    console.log("---------------------------------");

    return (
        <React.Fragment>
              <CurrGrid.Grid.Cell gridColor="#FFFFFF" rowIndex={this.props.rowIndex} colIndex={this.props.colIndex} gridDem={this.props.gridDem}>{this.props.colIndex},{this.props.rowIndex}</CurrGrid.Grid.Cell>
        </React.Fragment>
    )
  }
}

export default Cell