/** @format */

import React, { Component } from 'react';
import ProjectContainer from 'project-container/Project-container';

export default class Fibonacci extends Component {
    state = { answer: '', value: 0 };

    handleChange(event) {
        const value = parseInt(event.target.value, 10);
        if (isValid(value)) {
            this.setState({ value: event.target.value });
        } else {
            event.target.value = '';
            this.setState(() => {
                return { answer: 'Podaj liczbę całkowitą z przedziału 0-40' };
            });
        }
    }

    clickHandler(n) {
        let answer = parseInt(n, 10)
            ? this.generateFibonacci(n)
            : 'Wpisz liczbę całkowitą';
        this.setState(() => {
            return { answer: answer };
        });
    }

    generateFibonacci(n) {
        if (n <= 1) {
            return 1;
        }
        return this.generateFibonacci(n - 1) + this.generateFibonacci(n - 2);
    }

    render() {
        return (
            <React.Fragment>
                <ProjectContainer
                    title="Fibonacci Sequence"
                    min="1"
                    max="40"
                    changeHandler={this.handleChange.bind(this)}
                    answer={this.state.answer}
                />
            </React.Fragment>
        );
    }
}

// isValid: Int -> Boolean
const isValid = (value) =>
    value && value >= 0 && value <= 40 && value % 1 === 0;