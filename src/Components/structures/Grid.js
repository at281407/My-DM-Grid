import React, { Component } from 'react'
import { connect } from 'react-redux';

import Cell from '../blocks/Cell';

import { CurrGrid } from '../_styles/views/Curr-Grid';

class Grid extends React.Component {

  setPosIdentifier = (row, col) => {
    if(col === 0){
      return "leftSide";
    }     
    else if(row === 0){
      return "topSide";
    }
    else if(col === this.props.height){
      return "rightSide";
    }
    else if(row === this.props.width){
      return "bottomSide";
    }
  }
  
  initGrid = () => {
    var g = [];
    //props.state.grid = new Array(this.props.width);
    for(var i = 0; i < this.props.width; i++){
      g[i] = new Array(this.props.height);
      for(var j = 0; j < this.props.height; j++){
        var cellKey = "row-"+i+"-col-"+j;
        var cellProps = {
          cellKey: "row-"+i+"-col-"+j,
          posIdentifier: this.setPosIdentifier(i, j)
        }
        g[i][j] = cellProps;
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
      <CurrGrid.Grid 
        gridSize={this.props.gridSize} 
        gridWidth={this.props.gridWidth} 
        gridHeight={this.props.gridHeight}
        cellSize="15px">
          {grid.map(rows => {
          return rows.map(columns => (
            <Cell key={columns.cellKey} cellProp={columns.cellProps ? columns.cellProps : ""} />
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