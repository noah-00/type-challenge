type Reverse<T extends any[]> = T extends [...infer X, infer Y] ? [Y, ...Reverse<X>] : [];
type FlipArguments<T extends (...args: any[]) => any> = (
  ...args: Reverse<Parameters<T>>
) => ReturnType<T>;

type Flipped = FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>;
// (arg0: boolean, arg1: number, arg2: string) => void
