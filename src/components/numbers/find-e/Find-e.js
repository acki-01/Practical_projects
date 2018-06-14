/** @format */

import React, { Component } from 'react';
import ProjectContainer from 'project-container/Project-container';

export default class FindE extends Component {
    state = { answer: '', value: 0 };

    handleChange(event) {
        const value = parseInt(event.target.value, 10);
        console.log(value)
    }

    render() {
        return (
            <React.Fragment>
                <ProjectContainer
                    title="Find e to the Nth Digit"
                    min="0"
                    max="100"
                    changeHandler={this.handleChange.bind(this)}
                    answer={this.state.answer}
                />
            </React.Fragment>
        );
    }
}