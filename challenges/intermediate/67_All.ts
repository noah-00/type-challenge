type All<T extends any[], U extends number> = T extends [infer F, ...infer O]
  ? F extends U
    ? All<O, U>
    : false
  : true;

type Test1 = [1, 1, 1, 1, 1];
type Test2 = [1, 1, 2];

type Todo = All<Test1, 1>; // should be same as true
type Todo2 = All<Test2, 1>; // should be same as false
