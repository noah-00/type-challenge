type LengthOfString<S extends string, T extends string[] = []> = S extends `${infer F}${infer R}`
  ? LengthOfString<R, [...T, F]>
  : T["length"];

type Test = LengthOfString<"123">; // expected to be 3
