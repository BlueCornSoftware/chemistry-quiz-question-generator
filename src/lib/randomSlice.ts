'use strict';

import randomIndex from './randomIndex';

export default (array, length?) => {
  let index = 0;
  if (length === undefined) {
    const left = randomIndex(array);
    const right = randomIndex([ ...Array(array.length - left) ]);
    return array.slice(left, right);
  } else {
    let l = array.length - length;
    if (l < 0) {
      return array;
    }
    index = randomIndex([ ...Array(l) ]);
    return array.slice(index, index + length);
  }
};
