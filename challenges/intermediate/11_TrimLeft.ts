type space = " " | "\n" | "\t";
type TrimLeft<S extends string> = S extends `${space}${infer L}` ? TrimLeft<L> : S;

type trimed = TrimLeft<"  Hello World  ">; // expected to be 'Hello World  '
