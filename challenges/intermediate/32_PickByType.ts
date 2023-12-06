// my answer
// type PickByType<T, A> = {
//   [P in keyof T extends A ? T[P] : never]: T[P];
// };

// The "as" keyword is used in the context of mapped types in TypeScript.

// correct answer
type PickByType<T, U> = { [P in keyof T as T[P] extends U ? P : never]: T[P] };

type OnlyBoolean = PickByType<
  {
    name: string;
    count: number;
    isReadonly: boolean;
    isEnable: boolean;
  },
  boolean
>; // { isReadonly: boolean; isEnable: boolean; }
