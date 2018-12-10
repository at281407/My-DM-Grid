import React, { Component } from "react";

import Grid from "../../structures/Grid";
import Card from "../../structures/Card";

import {CurrGrid} from "../../_styles/views/Curr-Grid"

class CurrGridView extends Component {
  render () {
    return (
      <CurrGrid>
         <Grid />
         <Card />
      </CurrGrid>
    );
  }
}

export default CurrGridView