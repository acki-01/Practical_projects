/** @format */

import React, { Component } from 'react';
import ProjectContainer from 'project-container/Project-container';
import { computePI } from 'resources/functions-implementations'

class FindPi extends Component {
    constructor() {
        super();
        this.state = {
            answer: '',
            value: 0
        };
    }

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
            <div className="FindPi">
                <ProjectContainer
                    title="Find PI to the Nth Digit"
                    min="0"
                    max="20"
                    changeHandler={this.handleChange.bind(this)}
                    clickHandler={() => this.computePI(this.state.value)}
                    buttonTitle="Find Pi"
                    answer={this.state.answer}
                    implementation={computePI}
                />
            </div>
        );
    }
}

// isValid: Int -> Boolean
const isValid = (value) =>
    value && value >= 0 && value <= 20 && value % 1 === 0;

export default FindPi;
