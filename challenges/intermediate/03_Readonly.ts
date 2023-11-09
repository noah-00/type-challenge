interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type MyReadonly<T, K extends keyof T = keyof T> = Omit<T, K> & Readonly<Pick<T, K>>;

const todo: MyReadonly<Todo, "title" | "description"> = {
  title: "Hey",
  description: "foobar",
  completed: false,
};

todo.title = "Hello"; // Error: cannot reassign a readonly property
todo.description = "barFoo"; // Error: cannot reassign a readonly property
todo.completed = true; // OK
