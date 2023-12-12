interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type ObjectEntries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T];

type modelEntries = ObjectEntries<Model>; // ['name', string] | ['age', number] | ['locations', string[] | null];
