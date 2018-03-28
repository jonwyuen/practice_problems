Runtime Complexity: describes performance of algorithm (how much time req to run alg if input scales)

Constant(1): always take same amt of time no matter input

Logarithmic(log(n)): if doubling num of elements you are iterating over doesn't double amt of work; searching operations

Linear(n): iterating thru all elements in collection of data; add one element to input takes one unit of performance

Quasilinear(nlog(n)); doubling num of elements you are iterating over doesn't double amt of work; increase input by 1, increase time by a bit more than 1, sorting operation

Quadratic(n^2): every element in collection has to be compared to every other element

Exponential(2^n): if add a single element to collection, time required significantly increases (processing pwr req doubles)


Iterating w/ loop through single collection: O(n)
Iterating thru half a collection: O(n)
Iterating thru two diff collections w/ separate loops: O(n+m)
Two nested loops iterating over same collection: O(n^2);
Two nested loops iterating over diff collections: O(nxm);
Sorting: O(nlog(n))
Searching sorted array: O(log(n))


Space complexity: how much more memory is req by doubling data set
