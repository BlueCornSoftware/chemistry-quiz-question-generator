'use strict';

import { GenericObject } from '../types/GenericObject';

const table: GenericObject = {};

const s = (): string => Math
  .floor((1 + Math.random()) * 0x10000)
  .toString(16)
  .substring(1);

const uuid = () => s() + s() + '-' + s() + '-' + s() + '-' + s() + '-' + s() + s() + s();

export default (): string => {
  let u = uuid();
  while(table[u]) {
    u = uuid();
  }
  table[u] = true;
  return u;
};
