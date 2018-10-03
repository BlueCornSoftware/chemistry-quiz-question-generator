'use strict';

const arrayShuffle = require('./arrayShuffle');
const randomSlice = require('./randomSlice');

module.exports = (arr, howMany) => randomSlice(arrayShuffle(arr), howMany);
