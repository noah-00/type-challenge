type Includes<T extends readonly any[], P> = {
  [K in T[number]]: true;
}[P] extends true
  ? true
  : false;

type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">; // expected to be `false`
