type TrimRight<T extends string> = T extends `${infer L}${" " | "\n" | "\t"}` ? TrimRight<L> : T;

type TrimedRightSide = TrimRight<"   Hello World    ">; // expected to be '   Hello World'

type TrimLeft<T extends string> = T extends `${" " | "\n" | "\t"}${infer R}` ? TrimLeft<R> : T;

type TrimedLeftSide = TrimLeft<"   Hello World    ">; // expected to be 'Hello World     '
