import React, { Component } from 'react'

import ViewRouter from '../../Router/router'

import {ViewMount} from '../_styles/views/View-Mount'

class AppViewMount extends Component {
  render () {
    return (
      <ViewMount>
        <ViewRouter />
      </ViewMount>
    )
  }
}

export default AppViewMount