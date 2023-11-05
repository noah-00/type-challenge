type Concat<F extends any[], S extends any[]> = [...F, ...S];

type Result = Concat<[1], [2]>; // expected to be [1, 2]
