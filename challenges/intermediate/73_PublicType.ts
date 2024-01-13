type PublicType<T extends object> = { [P in keyof T as P extends `_${any}` ? never : P]: T[P] };

type A = PublicType<{ _: ""; key: "test" }>;
