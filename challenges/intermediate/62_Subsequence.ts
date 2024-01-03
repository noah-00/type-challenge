type Subsequence<T extends any[], A extends any[] = []> = T extends [infer F, ...infer O]
  ? Subsequence<O, A | [...A, F]>
  : A;

type A = Subsequence<[1, 2]>; // [] | [1] | [2] | [1, 2]
