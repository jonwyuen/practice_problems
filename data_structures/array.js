// Stored in memory contiguously(adjacent elements in array have adjacent memory addresses); Great for accessing elements at an arbitrary index, not good if size of your data set is going to be changing significantly

// Push can be O(n) if we run out of available space at the existing starting point in memory. Sometimes this operation is referred to as being amortized O(1). This is because JavaScript is setting aside a certain amount of space when the array is created, so that up to a point the push operation will be constant. But if you exhaust that available space in memory, the entire array will need to be copied somewhere else.

// access: O(1)
// push: amortized O(1); O(n)
// unshift / shift:  O(n)
// pop: O(1)
// find:  O(n)
// insert (using splice): O(n)
// remove (using splice): O(n)
// swap: O(1)
