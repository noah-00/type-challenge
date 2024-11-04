type Tuple = unknown[];

type Concat<F extends Tuple, S extends Tuple> = [...F, ...S];

type Result = Concat<[1], [2]>; // expected to be [1, 2]
