type Without<T extends readonly any[], U, A extends readonly any[] = []> = T extends [
  infer L,
  ...infer R
]
  ? U extends any[]
    ? L extends U[number]
      ? Without<R, U, A>
      : Without<R, U, [...A, L]>
    : L extends U
    ? Without<R, U, A>
    : Without<R, U, [...A, L]>
  : A;

type Res = Without<[1, 2], 1>; // expected to be [2]
type Res1 = Without<[1, 2, 4, 1, 5], [1, 2]>; // expected to be [4, 5]
type Res2 = Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>; // expected to be []
