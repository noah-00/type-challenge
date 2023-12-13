type Shift<T extends any[]> = T extends [any, ...infer U] ? U : never;

type Result = Shift<[3, 2, 1]>; // [2, 1]
