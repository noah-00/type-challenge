// type CountElementNumberToObject<T extends any[]> =
// TODO

type Simple1 = CountElementNumberToObject<[]>; // return {}
type Simple2 = CountElementNumberToObject<[1, 2, 3, 4, 5]>;
// return {
//   1: 1,
//   2: 1,
//   3: 1,
//   4: 1,
//   5: 1
// }

type Simple3 = CountElementNumberToObject<[1, 2, 3, 4, 5, [1, 2, 3]]>;
// return {
//   1: 2,
//   2: 2,
//   3: 2,
//   4: 1,
//   5: 1
// }
