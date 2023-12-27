type Trunc<T extends string | number> = `${T}` extends `${infer A}.${infer B}` ? A : `${T}`;

type A = Trunc<12.34>; // 12
