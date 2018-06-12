/** @format */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MenuElement from '../menu-element/Menu-element';
import routes from '../../resources/routes/routes';
import 'menu/Menu.css';
class Menu extends Component {
    render() {
        const menuElements = routes.map((route) => (
            <Link to={'/' + route.component} key={route.pageId}>
                <MenuElement title={route.component} />
            </Link>
        ));
        return (
            <div className="Menu">
                <ul>{menuElements}</ul>
            </div>
        );
    }
}

export default Menu;
