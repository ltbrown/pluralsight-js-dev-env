import './index.css';
// handy library for formatting numbers
import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
debugger; // eslint-disable-line no-debugger
// template string
console.log(`I would pay ${courseValue} for this awesome course!`); // eslint-disable-line no-console
