const data_harvest_navigator = require('data-harvest-navigator');
const harvest_navi_prov = require('harvest-navi-prov');
const pg = require('pg');
const react_dom = require('react-dom');
const web3_utils = require('web3-utils');
const ethereumjs_util = require('ethereumjs-util');
const babel_core = require('babel-core');
const react_redux = require('react-redux');
const axios = require('axios');
const mysql = require('mysql');

const util = require('util');
const formatted = util.format('This %s a %s', 'is', 'string');
console.log(formatted);

// Create a JWT token using jsonwebtoken library
const jwt = require('jsonwebtoken');
const generateJWTToken = (payload, secret, options) => {
  return jwt.sign(payload, secret, options);
}
const userPayload = { userId: 12345, username: 'john_doe' };
const jwtSecret = 'secret_key';
const jwtOptions = { expiresIn: '1h' };
const token = generateJWTToken(userPayload, jwtSecret, jwtOptions);
console.log('JWT Token:', token);

const path = require('path');
console.log(`Current working directory: ${path.resolve()}`);

// Calculate the factorial of a number recursively
const factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log('Factorial of 5:', factorial(5));

const removeDuplicates = (arr) => {
  return [...new Set(arr)];
};
console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));

const zlib = require('zlib');
const input = 'Compress me!';
zlib.gzip(input, (err, buffer) => {
  if (!err) {
    console.log('Compressed data:', buffer.toString('base64'));
  }
});

// Get the number of uncles for a block in Ethereum by block hash
web3.eth.getBlockUncleCount('0xblockHash').then(uncles => {
  console.log('Number of uncles by block hash:', uncles);
}).catch(err => {
  console.error('Error getting uncles by block hash:', err);
});