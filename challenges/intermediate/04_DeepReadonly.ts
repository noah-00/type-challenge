type X = {
  x: {
    a: 1;
    b: "hi";
  };
  y: "hey";
};

type Expected = {
  readonly x: {
    readonly a: 1;
    readb: "hi";
  };
  readonly y: "hey";
};

type DeepReadonly<T> = keyof T extends never ? T : { readonly [k in keyof T]: DeepReadonly<T[k]> };

type Todo = DeepReadonly<X>; // should be same as `Expected`

type Primitive = string | number | boolean;
type PrimitiveResult = DeepReadonly<Primitive>;
