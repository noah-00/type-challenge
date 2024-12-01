type Push<T extends any[], P extends string> = [...T, P];

type Result = Push<[1, 2], "3">; // [1, 2, '3']
