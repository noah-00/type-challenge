// 解答をここに記入
type String2Union<S extends string> = S extends `${infer C}${infer REST}`
  ? C | String2Union<REST>
  : never;

// S = "ABC"
// C = "A"
// REST = "BC"
// String2Union<"ABC"> = "A" | String2Union<"BC">
// String2Union<"BC"> = "B" | String2Union<"C">
// String2Union<"C"> = "C" | String2Union<"">
// String2Union<> = never

type AllCombinations<STR extends string, S extends string = String2Union<STR>> = [S] extends [never]
  ? ""
  : "" | { [K in S]: `${K}${AllCombinations<never, Exclude<S, K>>}` }[S];

type AllCombinations_ABC = AllCombinations<"ABC">;
// should be '' | 'A' | 'B' | 'C' | 'AB' | 'AC' | 'BA' | 'BC' | 'CA' | 'CB' | 'ABC' | 'ACB' | 'BAC' | 'BCA' | 'CAB' | 'CBA'
