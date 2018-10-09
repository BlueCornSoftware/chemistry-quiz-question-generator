import { guid } from 'bluecornsoftare-functions';
import { GenericObject } from './types/GenericObject';

export default (value: GenericObject): GenericObject => ({
  id: guid(),
  ...value,
});
