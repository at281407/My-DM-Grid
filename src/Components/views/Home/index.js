import React, { Component } from 'react'

import {Home} from '../../_styles/views/Home';
import {NavLink} from "react-router-dom";

class HomeView extends Component {
  render () {
    return (
      <Home>
        <h1>Home View</h1>
        <NavLink to="/currGrid"><button>To Grid</button></NavLink>
      </Home>
    )
  }
}

export default HomeView;