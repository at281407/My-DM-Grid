import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {ThemeProvider} from 'styled-components';
import configureStore from './-stores/store';


import {App} from './Components/_styles/App';

import AppMenuBar from './Components/structures/AppMenuBar';
import AppViewMount from './Components/views/AppViewMount';

function AppContainer() {
    return (
    <Provider store={configureStore()}>
        <BrowserRouter>
            <App>
                <AppMenuBar />
                <AppViewMount />
            </App>
        </BrowserRouter>
    </Provider>
    );
}

ReactDOM.render(<AppContainer />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
