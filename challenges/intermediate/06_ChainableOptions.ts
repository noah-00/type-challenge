declare const config: Chainable;

type Chainable<T = {}> = {
  option<K extends string, V>(
    key: Exclude<K, keyof T>,
    value: V
  ): Chainable<Omit<T, K> & Record<K, V>>;
  get(): T;
};

const result = config
  .option("foo", 123)
  .option("name", "type-challenges")
  .option("bar", { value: "Hello World" })
  .get();

// expect the type of result to be:
interface Result {
  foo: number;
  name: string;
  bar: {
    value: string;
  };
}
