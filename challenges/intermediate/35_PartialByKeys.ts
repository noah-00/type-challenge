interface User {
  name: string;
  age: number;
  address: string;
}

type IntersectionToObj<T> = {
  [P in keyof T]: T[P];
};

type PartialByKeys<T, K extends PropertyKey = keyof T> = IntersectionToObj<
  {
    [P in keyof T]?: T[P]; // = { name?: string; age?: number; address?: string }
  } & Omit<T, K> // = { name?: string; age?: number; address?: string } & { age: number; address: string }
>;

type UserPartialName = PartialByKeys<User, "name">; // { name?:string; age:number; address:string }
