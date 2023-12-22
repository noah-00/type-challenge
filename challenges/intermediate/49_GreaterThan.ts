type GreaterThan<T extends number, U extends number, A extends any[] = []> = A["length"] extends T
  ? false
  : A["length"] extends U
  ? true
  : GreaterThan<T, U, [any, ...A]>;

type a = GreaterThan<2, 1>; //should be true
// 1
// T = 2
// U = 1
// A = [] (empty)
// A["length"] extends T = false
// A["length"] extends U = false
// 2
// T = 2
// U = 1
// A = [any] (length is 1)
// A["length"] extends T = false
// A["length"] extends U = true

type b = GreaterThan<1, 1>; //should be false
// 1
// T = 1
// U = 1
// A = [] (empty)
// A["length"] extends T = false
// A["length"] extends U = false
// 2
// T = 1
// U = 1
// A = [any] (length is 1)
// A["length"] extends T = true
type c = GreaterThan<10, 100>; //should be false
type d = GreaterThan<111, 11>; //should be true
