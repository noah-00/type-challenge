type CheckRepeatedChars<T extends string> = T extends `${infer F}${infer O}`
  ? O extends `${string}${F}${string}`
    ? true
    : CheckRepeatedChars<O>
  : false;

type A = CheckRepeatedChars<"abc">; // false
type B = CheckRepeatedChars<"aba">; // true
