/** @format */

import React, { PureComponent } from 'react';
import Typed from 'react-typed';
import './Project-container.css';
import './syntax-highlight.css';

class ProjectContainer extends PureComponent {
    render() {
        return (
            <div className="ProjectContainer">
                <h3>{this.props.title}</h3>
                <input
                    type="number"
                    min={this.props.min}
                    max={this.props.max}
                    onChange={this.props.changeHandler}
                />
                <button onClick={this.props.clickHandler}>
                    {this.props.buttonTitle}
                </button>
                <p>{this.props.answer}</p>
                <div className="container">
                    <pre className="container-code">
                        <Typed
                            strings={[`${this.props.implementation}`]}
                            typeSpeed={10}
                        />
                    </pre>
                </div>
            </div>
        );
    }
}

export default ProjectContainer;
