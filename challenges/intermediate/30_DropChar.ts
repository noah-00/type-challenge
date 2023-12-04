type DropChar<S extends string, C extends string> = S extends `${infer L}${C}${infer R}`
  ? DropChar<`${L}${R}`, C>
  : S;

type Butterfly = DropChar<" b u t t e r f l y ! ", " ">; // 'butterfly!'

// 1: " b u t t e r f l y ! ", " "
// 2: "b u t t e r f l y ! ", " "
// 3: "bu t t e r f l y ! ", " "
// 4: "but t e r f l y ! ", " "
// ...
