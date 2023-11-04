type ExampleType = Promise<string>;

type MyAwaited<T extends Promise<any>> = T extends Promise<infer U> ? U : never;

type Result = MyAwaited<ExampleType>; // string
