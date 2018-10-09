import arrayShuffle from './arrayShuffle';
import randomSlice from './randomSlice';

export default (arr: any[], howMany: number) => randomSlice(arrayShuffle(arr), howMany);
