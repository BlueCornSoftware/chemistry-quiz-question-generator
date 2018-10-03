'use strict';

const randomBool = () => 0.5 > Math.random();

module.exports = array => array.sort(randomBool).reverse().sort(randomBool).sort(randomBool);
