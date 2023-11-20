type AppendArgument<Fn, A> = Fn extends (...args: infer R) => infer T
  ? (...args: [...R, A]) => T
  : never;

type Fn = (a: number, b: string) => number;

type Result = AppendArgument<Fn, boolean>;
// expected be (a: number, b: string, x: boolean) => number
