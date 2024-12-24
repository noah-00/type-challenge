type Arr = ["1", "2", "3"];

type TupleToUnion<T> = T extends Array<infer ITEMS> ? ITEMS : never;
// The infer keyword is used to infer the type of the generic type variable ITEMS from the type of the array elements.

type Test = TupleToUnion<Arr>; // expected to be '1' | '2' | '3'
