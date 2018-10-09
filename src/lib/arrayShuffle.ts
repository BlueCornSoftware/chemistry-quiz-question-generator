const randomBool = (a: any, b: any) => (0.5 > Math.random()) ? 1 : 0;

export default (array: any[]) =>
  array.sort(randomBool).reverse().sort(randomBool).sort(randomBool)
