type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

type Last<T extends any[]> = [any, ...T][T["length"]];

// [any, ...T] = [any, "a", "b", "c"]

type tail1 = Last<arr1>; // expected to be 'c'
type tail2 = Last<arr2>; // expected to be 1
