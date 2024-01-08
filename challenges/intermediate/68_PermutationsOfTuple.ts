type PermutationsOfTuple<T extends unknown[], Prev extends unknown[] = []> = T extends [
  infer First,
  ...infer Rest
]
  ?
      | [First, ...PermutationsOfTuple<[...Prev, ...Rest]>]
      | (Rest extends [] ? never : PermutationsOfTuple<Rest, [...Prev, First]>)
  : [];

type A = PermutationsOfTuple<[1, number, unknown]>;
/**
 * Should return:
 * | [1, number, unknown]
 * | [1, unknown, number]
 * | [number, 1, unknown]
 * | [unknown, 1, number]
 * | [number, unknown, 1]
 * | [unknown, number ,1]
 */
