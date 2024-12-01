type Unshift<T extends any[], P> = [P, ...T];

type Result = Unshift<[1, 2], 0>; // [0, 1, 2]
