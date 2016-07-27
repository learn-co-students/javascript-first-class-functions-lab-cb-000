global.expect = require('expect');

const fs = require('fs');
const jsdom = require('mocha-jsdom');
const path = require('path');

const src = fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8');

jsdom({ src });
