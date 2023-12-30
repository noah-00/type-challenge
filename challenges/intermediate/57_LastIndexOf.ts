type LastIndexOf<T extends any[], U> = T extends [...infer F, infer L]
  ? U extends L
    ? F["length"]
    : LastIndexOf<F, U>
  : -1;
type Res1 = LastIndexOf<[1, 2, 3, 2, 1], 2>; // 3
type Res2 = LastIndexOf<[0, 0, 0], 2>; // -1
