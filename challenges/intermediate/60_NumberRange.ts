type Utils<L, C extends any[] = [], R = L> = C["length"] extends L
  ? R
  : Utils<L, [...C, 0], C["length"] | R>;

type NumberRange<L, H> = L | Exclude<Utils<H>, Utils<L>>;

type result = NumberRange<2, 9>; //  | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
