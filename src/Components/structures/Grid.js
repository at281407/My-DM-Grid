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
        var cellKey = "row-"+i+"-col-"+j;
        g[i][j] = cellKey;
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
    let gridDem = {
      totalRows: grid.length,
      totalCol: grid[0].length,
      totalSize: 0
    }
    gridDem.totalSize = gridDem.totalRows * gridDem.totalCol;
    return (
      <CurrGrid.Grid 
        gridSize={this.props.gridSize} 
        gridWidth={this.props.gridWidth} 
        gridHeight={this.props.gridHeight}
        cellSize="15px">
          {grid.map((rows, rowIndex) => {
          return rows.map((columns, colIndex) => (
            <Cell key={columns} rowIndex={rowIndex} colIndex={colIndex} gridDem={gridDem} />
          ))
        })}
      </CurrGrid.Grid>
    );
  }
}

export default connect(
  (state) => ({
      gridSize: state.gridSettingsReducer.gridSize,
      gridWidth: state.gridSettingsReducer.gridWidth,
      gridHeight: state.gridSettingsReducer.gridHeight,
      cellSize: state.gridSettingsReducer.cellSize
  })
  )(Grid);