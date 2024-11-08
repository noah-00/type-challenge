type Includes<A extends readonly any[], U> = {
  [P in A[number]]: true;
}[U] extends true
  ? true
  : false;

type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">; // expected to be `false`
