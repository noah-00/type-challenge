type ConstructTuple<L extends number, U extends unknown[] = []> = U["length"] extends L
  ? U
  : ConstructTuple<L, [...U, unknown]>;
type result = ConstructTuple<2>; // expect to be [unknown, unkonwn]
