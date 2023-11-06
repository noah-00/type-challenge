type Includes<T extends readonly any[], U> = U extends T[number] ? true : false;

// type Includes<T extends readonly any[], U> = T extends [infer L, ...infer R]
//   ? [U, L] extends [L, U]
//     ? true
//     : Includes<R, U>
//   : false

type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">; // expected to be `false`
