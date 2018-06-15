/** @format */

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import asyncComponent from 'components/hoc/Async-component';

const AsyncNumbers = asyncComponent(() => {
    return import('components/numbers/Numbers');
});

const AsyncAlgorithms = asyncComponent(() => {
    return import('components/algorithms/Algorithms');
});

class Routes extends Component {
    render() {
        return (
            <Switch>
                {/* <Route exact path='/' component={HomePage}/> */}
                <Route exact path="/Numbers" component={AsyncNumbers} />
                <Route exact path="/Algorithms" component={AsyncAlgorithms} />
            </Switch>
        );
    }
}

export default Routes;
