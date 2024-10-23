type MyExclude<T, P> = T extends P ? never : T;

type Result = MyExclude<"a" | "b" | "c", "a">; // 'b' | 'c'
