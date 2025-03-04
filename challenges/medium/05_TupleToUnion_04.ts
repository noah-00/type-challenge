type Arr = ["1", "2", "3"];

type TupleToUnion<T> = T extends Array<infer ITEMS> ? ITEMS : never;

type Test = TupleToUnion<Arr>; // expected to be '1' | '2' | '3'
