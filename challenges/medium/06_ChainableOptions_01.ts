declare const config: Chainable;

// Call an option key with an argument
type Chainable<R = object> = {
  // If the key is already in the object, then the value should be a never type
  option<K extends string, V>(
    // If the key is already in the object, then the value should be a never type
    key: K extends keyof R ? never : K,
    // If the key is already in the object, then the value should be a never type
    value: V
    // If the key is already in the object, then the value should be a never type
  ): Chainable<Omit<R, K> & Record<K, V>>;
  // If the key is already in the object, then the value should be a never type
  get(): R;
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
