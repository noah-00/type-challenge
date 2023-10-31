interface Todo {
  title: string;
  description: string;
}

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

// T = Todo
// keyof T = "title" | "description"
// P = "title" | "description" (like a for-loop)

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar",
};

// @ts-expect-error
todo.title = "Hello"; // Error: cannot reassign a readonly property
// @ts-expect-error
todo.description = "barFoo"; // Error: cannot reassign a readonly property

interface User {
  name: string;
  id: number;
}

type MyReadonly2<T> = {
  readonly [P in keyof T]: T[P];
};

const user: MyReadonly2<User> = {
  name: "noah",
  id: 2,
};

// @ts-expect-error
user.name = "Hello"; // Error: cannot reassign a readonly property
// @ts-expect-error
user.id = 1; // Error: cannot reassign a readonly property
