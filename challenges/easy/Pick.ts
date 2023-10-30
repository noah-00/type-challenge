type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

/*
- T: オブジェクト型を期待する型引数。例: Todo のようなオブジェクト型。
- K extends keyof T: Tのキーの型のサブセットを期待する型引数。
- keyof T: Tのすべてのプロパティの名前の型を取得。例: Todo の場合、"title" | "description" | "completed" となる。
- [k in K]: Kのすべてのプロパティのキーに対して反復処理を行うマッピング型。
- T[k]: 型Tのプロパティkの型を取得するインデックスアクセス型。
*/

import type { Equal, Expect } from "../../utils/index";

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, "title">>>,
  Expect<Equal<Expected2, MyPick<Todo, "title" | "completed">>>,
  // @ts-expect-error
  MyPick<Todo, "title" | "completed" | "invalid">
];

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
}

interface Expected2 {
  title: string;
  completed: boolean;
}
