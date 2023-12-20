type Fibonacci<
  T extends number,
  CurrentIndex extends any[] = [1],
  Prev extends any[] = [],
  Current extends any[] = [1]
> = CurrentIndex["length"] extends T
  ? Current["length"]
  : Fibonacci<T, [...CurrentIndex, 1], Current, [...Prev, ...Current]>;

type Result1 = Fibonacci<4>; // 3
type Result2 = Fibonacci<8>; // 21

// 1
// T = 3
// CurrentIndex = [1]
// Prev = []
// Current = [1]
// 2
// T = 3
// CurrentIndex = [1, 1]
// Prev = [1]
// Current = [1, 1]
// 3
// T = 3
// CurrentIndex = [1, 1, 1]
// Prev = [1, 1]
// Current = [1, 1, 1]
