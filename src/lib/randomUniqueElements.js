'use strict';

const randomIndex = require('./randomIndex');

module.exports = (arr, howMany) => {
  const copy = [...arr];
  const newArray = [];
  let elIndex = 0;
  for (let i = 0; i < howMany; i++) {
    elIndex = randomIndex(copy);
    newArray.push(copy[elIndex]);
    copy.slice(elIndex, 1);
  }
  return newArray;
};
