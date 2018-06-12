/** @format */

import React, { Component } from 'react';
import 'menu-element/Menu-element.css';

class MenuElement extends Component {
    render() {
        return <li className="MenuElement">{this.props.title}</li>;
    }
}

export default MenuElement;
