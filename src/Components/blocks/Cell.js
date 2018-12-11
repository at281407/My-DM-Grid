import React, { Component } from 'react'

import {CurrGrid} from '../_styles/views/Curr-Grid'

class Cell extends Component {
  render () {
    return (
        <React.Fragment>
              <CurrGrid.Grid.Cell gridColor="#FFFFFF" />
        </React.Fragment>
    )
  }
}

export default Cell