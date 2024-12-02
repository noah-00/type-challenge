const foo = (arg1: string, arg2: number): void => {};

type MyParameters<T> = T extends (...any: infer S) => any ? S : any;

type FunctionParamsType = MyParameters<typeof foo>; // [arg1: string, arg2: number]
