type Capitalize<S extends string> = S extends `${infer x}${infer tail}`
  ? `${Uppercase<x>}${tail}`
  : S;

type capitalized = Capitalize<"hello world">; // expected to be 'Hello world'
