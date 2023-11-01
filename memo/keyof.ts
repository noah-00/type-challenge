const get = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};

type Human = {
  name: string;
  age: number;
};

const noah: Human = {
  name: "Noah",
  age: 25,
};

const name = get(noah, "name");
const age = get(noah, "age");
