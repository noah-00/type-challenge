type Triangular<
  N extends number,
  P extends number[] = [],
  A extends number[] = []
> = P["length"] extends N ? A["length"] : Triangular<N, [0, ...P], [...A, ...P, 0]>;

type A = Triangular<3>;
