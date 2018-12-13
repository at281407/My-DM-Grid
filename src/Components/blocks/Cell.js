import React, { Component } from 'react'

import {CurrGrid} from '../_styles/views/Curr-Grid'

class Cell extends Component {
  render () {
    let cellProp = this.props.cellProp
    console.log(cellProp);
    return (
        <React.Fragment>
              <CurrGrid.Grid.Cell gridColor="#FFFFFF" cellProp={cellProp}/>
        </React.Fragment>
    )
  }
}

export default Cell