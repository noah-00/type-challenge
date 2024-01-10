// Union<2 | 3> -> [2] | [3]
type Union<T> = T extends T ? [T] : never;

// [1, ...Union<2 | 3>] -> [1, 2] | [1, 3]
type CartesianProduct<T, U> = T extends T ? [T, ...Union<U>] : never;

type a = CartesianProduct<1 | 2, "a" | "b">;
// [1, 'a'] | [2, 'a'] | [1, 'b'] | [2, 'b']
