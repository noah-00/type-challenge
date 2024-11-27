type If<T extends boolean, F, S> = T extends true ? F : S;

type A = If<true, "a", "b">; // expected to be 'a'
type B = If<false, "a", "b">; // expected to be 'b'
