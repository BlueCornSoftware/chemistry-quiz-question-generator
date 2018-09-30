'use strict';

const randomIndex = require('./randomIndex');

module.exports = (arr, howMany) => {
  let n = howMany;
  if (howMany === undefined) {
    n = arr.length;
  }
  const copy = [...arr];
  const newArray = [];
  let elIndex = 0;
  for (let i = 0; i < n; i++) {
    elIndex = randomIndex(copy);
    newArray.push(copy[elIndex]);
    copy.slice(elIndex, 1);
  }
  return newArray;
};
