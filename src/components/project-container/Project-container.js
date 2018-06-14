/** @format */

import React, { Component } from 'react';
import Typed from 'react-typed';

import './Project-container.css';
import './syntax-highlight.css';

export default class ProjectContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isImplementation: false
        }
    }

    impToggler(isImplementation) {
        this.setState({ isImplementation: !isImplementation });
    }

    render() {
        const implementation = this.state.isImplementation ?
            <div className="code-container">
                <pre className="code-placeholder">
                    <Typed
                        strings={[`${this.props.implementation}`]}
                        typeSpeed={10}
                    />
                </pre>
            </div> : '';
        return (
            <div className="ProjectContainer">
                <div className='left-container'>
                    <h3 className="title white">{this.props.title}</h3>
                    <input
                        type="number"
                        min={this.props.min}
                        max={this.props.max}
                        onChange={this.props.changeHandler}
                    />
                    <button className="fn-caller" onClick={this.props.clickHandler}>
                        {this.props.buttonTitle}
                    </button>
                    <button className="impl-toggler" onClick={() => this.impToggler(this.state.isImplementation)}>
                        Implementation
                    </button>
                    <p className="white">{this.props.answer}</p>
                </div>
                {implementation}
            </div>
        );
    }
}