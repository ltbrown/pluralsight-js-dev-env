// This file isn’t transpiled, so must use CommonJS and ES5

// Register babel to transpile before our test runs in Mocha.
require('babel-register')();

// Disable webpack features that Mocha doesn’t understand. E.g.: import './index.css';
require.extensions['.css'] = function() {};
