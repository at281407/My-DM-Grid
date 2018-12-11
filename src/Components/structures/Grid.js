import React, { Component } from 'react'
import { connect } from 'react-redux';

import Cell from '../blocks/Cell';

import { CurrGrid } from '../_styles/views/Curr-Grid';

class Grid extends React.Component {
  
  initGrid = () => {
    var g = [];
    //props.state.grid = new Array(this.props.width);
    for(var i = 0; i < this.props.width; i++){
      g[i] = new Array(this.props.height);
      for(var j = 0; j < this.props.height; j++){
        var cellClass = "gridCell row-"+i+"-col-"+j;
          g[i][j] = cellClass;
      }
    }
    return g;
  };

  getInitCords = (x,y) => {
    var cords = {
      x: x,
      y: y
    }
    return cords;
  }

  render(){
    let grid = this.initGrid();

    return (
      <CurrGrid.Grid gridSize={this.props.gridSize} cellSize="15px">
        {grid.map(rows => {
        return rows.map(columns => (
          //<Cell />
          <Cell key={columns} />
        ))
        })}
      </CurrGrid.Grid>
    );
  }
}

export default connect(
  (state) => ({
      gridSize: state.gridSettingsReducer.gridSize,
      cellSize: state.gridSettingsReducer.cellSize
  })
  )(Grid);