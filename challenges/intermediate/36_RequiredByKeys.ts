interface User {
  name?: string;
  age?: number;
  address?: string;
}

type RequiredByKeys<T, K = keyof T> = Omit<T & Required<Pick<T, K & keyof T>>, never>;

type UserRequiredName = RequiredByKeys<User, "name">; // { name: string; age?: number; address?: string }
