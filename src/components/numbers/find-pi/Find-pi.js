/** @format */

import React, { Component } from 'react';

import ProjectContainer from 'project-container/Project-container';
import { computePI } from 'resources/functions-implementations'

export default class FindPi extends Component {
    state = {
        answer: '',
        value: 0
    };

    handleChange(event) {
        const value = parseInt(event.target.value, 10);
        if (!value) {
            return 0;
        }
        const pi = (2 * (Math.asin(Math.sqrt(1 - Math.pow(1, 2))) + Math.abs(Math.asin(1)))).toString();
        const piWithPrec = `${pi.substring(0, pi.indexOf('.') + 1)}${pi.substring((pi.indexOf('.') + 1), value + 2)}`
        this.setState(() => {
            return { answer: piWithPrec };
        });
    }

    render() {
        return (
            <React.Fragment>
                <ProjectContainer
                    title="Find PI to the Nth Digit"
                    min="0"
                    max="15"
                    changeHandler={this.handleChange.bind(this)}
                    buttonTitle="Find Pi"
                    answer={this.state.answer}
                    implementation={computePI}
                />
            </React.Fragment>
        );
    }
}