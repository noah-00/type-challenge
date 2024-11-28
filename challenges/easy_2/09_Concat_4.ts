type Tuple = unknown[];

type Concat<T extends Tuple, S extends Tuple> = [...T, ...S];

type Result = Concat<[1], [2]>; // expected to be [1, 2]
