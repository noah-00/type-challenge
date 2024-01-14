type ExtractToObject<T, P extends keyof T> = Omit<Omit<T, P> & T[P], never>;

type Test = { id: "1"; myProp: { foo: "2" } };
type Result = ExtractToObject<Test, "myProp">; // expected to be { id: '1', foo: '2' }
