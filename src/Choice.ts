'use strict';

import guid from './lib/guid';
import { GenericObject } from './types/GenericObject';

export default (value: GenericObject): GenericObject => ({
  id: guid(),
  ...value,
});
