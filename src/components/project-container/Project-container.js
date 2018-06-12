/** @format */

import React, { PureComponent } from 'react';
import './Project-container.css';
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
            </div>
        );
    }
}

export default ProjectContainer;
