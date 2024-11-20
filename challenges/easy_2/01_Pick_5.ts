interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type MyPick<T, P extends keyof T> = {
  [K in P]: T[K];
};

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
