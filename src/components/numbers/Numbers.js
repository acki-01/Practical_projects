/** @format */

import React, { Component } from 'react';
import FindPi from 'numbers/find-pi/Find-pi';
import FindE from 'numbers/find-e/Find-e';
import Fibonacci from 'numbers/fibonacci/Fibonacci';

class Numbers extends Component {
    render() {
        return (
            <div className="Numbers">
                <FindPi />
                <FindE />
                <Fibonacci />
            </div>
        );
    }
}

export default Numbers;
