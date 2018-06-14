/** @format */

import React, { Component } from 'react';
import ProjectContainer from 'project-container/Project-container';

export default class FindE extends Component {
    state = { answer: '', value: 0 };

    handleChange(event) {
        const value = parseInt(event.target.value, 10);
        if (isValid(value)) {
            this.setState({ value: event.target.value });
        } else {
            event.target.value = '';
            this.setState(() => {
                return { answer: 'Podaj liczbę całkowitą z przedziału 0-20' };
            });
        }
    }

    computePI(n) {
        let answer = parseInt(n, 10)
            ? 2 *
            (
                Math.asin(Math.sqrt(1 - Math.pow(1, 2))) +
                Math.abs(Math.asin(1))
            ).toFixed(n)
            : 'Wpisz liczbę całkowitą';
        this.setState(() => {
            return { answer: answer };
        });
    }
    render() {
        return (
            <React.Fragment>
                <ProjectContainer
                    title="Find e to the Nth Digit"
                    min="0"
                    max="100"
                    changeHandler={this.handleChange.bind(this)}
                    clickHandler={() => this.computePI(this.state.value)}
                    buttonTitle="Find e"
                    answer={this.state.answer}
                />
            </React.Fragment>
        );
    }
}

// isValid: Int -> Boolean
const isValid = (value) =>
    value && value >= 0 && value <= 20 && value % 1 === 0;