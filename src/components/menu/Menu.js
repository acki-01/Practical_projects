/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

import MenuElement from 'components/menu/menu-element/Menu-element';
import routes from 'resources/routes/routes';
import 'menu/Menu.css';

export default function Menu() {
    const menuElements = routes.map((route) => (
        <Link to={'/' + route.path} key={route.pageId}>
            <MenuElement title={route.component} />
        </Link>
    ));
    return (
        <div className="Menu">
            <ul>{menuElements}</ul>
        </div>
    );
}
