type Zip<
  T extends readonly any[],
  U extends readonly any[],
  A extends readonly any[] = []
> = T extends [infer TT, ...infer OT]
  ? U extends [infer TU, ...infer OU]
    ? Zip<OT, OU, [...A, [TT, TU]]>
    : A
  : A;

// 1
// T = [1, 2]
// U = [true, false]
// A = []
// T extends [infer RF, ...infer RL] = true
// U extends [infer UF, ...infer UL] = true
// Zip<RL, UL, [...A, [RF, UF]]>
// Zip<[2], [false], [[1, true]]>
// 2
// T = [2]
// U = [false]
// A = [[1, true]]
// T extends [infer RF, ...infer RL] = true
// U extends [infer UF, ...infer UL] = true
// Zip<RL, UL, [...A, [RF, UF]]>
// Zip<[], [], [[1, true], [2, false]]>
// 3
// T = []
// U = []
// A = [[1, true], [2, false]]
// T extends [infer RF, ...infer RL] = false

type exp = Zip<[1, 2], [true, false]>; // expected to be [[1, true], [2, false]]
