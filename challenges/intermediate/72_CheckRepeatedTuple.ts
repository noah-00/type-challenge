type CheckRepeatedTuple<T extends unknown[]> = T extends [infer L, ...infer R]
  ? L extends R[number]
    ? true
    : CheckRepeatedTuple<R>
  : false;

type A = CheckRepeatedTuple<[1, 2, 3]>; // false
type B = CheckRepeatedTuple<[1, 2, 1]>; // true
