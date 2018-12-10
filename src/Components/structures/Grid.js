import React, { Component } from 'react'

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
      
      return (
        <h1>TITLE</h1>
      );
    }
  }

export default Grid;