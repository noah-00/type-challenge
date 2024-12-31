type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

// The Last type takes an array type T and returns the last element of the array.
type Last<T extends any[]> = [any, ...T][T["length"]];

type tail1 = Last<arr1>; // expected to be 'c'
type tail2 = Last<arr2>; // expected to be 1
