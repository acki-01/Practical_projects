import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from 'resources/routes/routes';
import COMPONENT_MAP from 'components/component_map';
import './Main.css';

class Main extends Component {
    render() {
        const componentsRoutes = routes.map(r => {
            return <Route path={'/' + r.path} background={r.bg} key={r.pageId} component={COMPONENT_MAP[r.component]}/>
        })
        return (
            <div className="Main">
                <Switch>
                    {componentsRoutes}
                </Switch>
            </div>
        );
    }
}

export default Main;
