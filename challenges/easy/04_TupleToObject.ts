const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type TupleToObject<T extends readonly string[]> = {
  [P in T[number]]: P;
};

type result = TupleToObject<typeof tuple>; // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

// ---

const tuple2 = [2221, 324342, 442, 111, 22342, 11, 1] as const;

type TupleToObject2<T extends readonly number[]> = {
  [P in T[number]]: P;
};

type result2 = TupleToObject2<typeof tuple2>;

// ---

const tuple3 = [
  { id: 1, name: "test" },
  { id: 2, name: "test2" },
  { id: 3, name: "test3" },
] as const;

type TupleToObject3<T extends readonly { id: number; name: string }[]> = {
  [P in T[number]["id"]]: Extract<T[number], { id: P }>;
};

type result3 = TupleToObject3<typeof tuple3>;
