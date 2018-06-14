/** @format */

import React from 'react';

import FindPi from 'numbers/find-pi/Find-pi';
import FindE from 'numbers/find-e/Find-e';
import Fibonacci from 'numbers/fibonacci/Fibonacci';
import './Numbers.css';

export default function Numbers() {
    return (
        <div className="Numbers">
            <FindPi />
            <FindE />
            <Fibonacci />
        </div>
    );
}