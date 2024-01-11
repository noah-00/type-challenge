type MergeAll<XS extends object[], Res = {}> = XS extends [infer L, ...infer R extends object[]]
  ? MergeAll<
      R,
      Omit<Res, keyof L> & {
        [p in keyof L]: p extends keyof Res ? L[p] | Res[p] : L[p];
      }
    >
  : Omit<Res, never>;

type Foo = { a: 1; b: 2 };
type Bar = { a: 2 };
type Baz = { c: 3 };

type Result = MergeAll<[Foo, Bar, Baz]>; // expected to be { a: 1 | 2; b: 2; c: 3 }
