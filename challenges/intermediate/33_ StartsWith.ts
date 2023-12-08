type StartsWith<T extends string, U extends string> = T extends `${U}${string}` ? true : false;

type a = StartsWith<"abc", "ac">; // expected to be false
type b = StartsWith<"abc", "ab">; // expected to be true
type c = StartsWith<"abc", "abcd">; // expected to be false

type LastsWith<T extends string, U extends string> = T extends `${string}${U}` ? true : false;

type d = LastsWith<"abc", "dd">; // expected to be false
type e = LastsWith<"abc", "bc">; // expected to be true
type f = LastsWith<"abc", "abcd">; // expected to be false
