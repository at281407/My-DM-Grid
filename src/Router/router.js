import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Route, withRouter, Switch } from 'react-router-dom';

import HomeView from '../Components/views/Home'
import CurrGridView from '../Components/views/CurrGrid'

class ViewRouter extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={HomeView} />
                <Route exact path="/currGrid" component={CurrGridView} />
            </Switch>
        )
    }
}

export default ViewRouter;