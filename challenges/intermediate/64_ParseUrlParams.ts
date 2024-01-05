type ParseUrlParams<T extends string> = T extends `${string}:${infer R}`
  ? R extends `${infer P}/${infer L}`
    ? P | ParseUrlParams<L>
    : R
  : never;

type A = ParseUrlParams<":id">; // id
type B = ParseUrlParams<"posts/:id">; // id
type C = ParseUrlParams<"posts/:id/:user">; // id | user
