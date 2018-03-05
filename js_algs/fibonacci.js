// Time Complexity: O(2^n)
function fibonacci(n) {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Time Complexity: O(n)
function fibMemo(n, cache = {}) {
  if (cache[n]) return cache[n];
  if (n < 3) return 1;
  return (cache[n] = fibMemo(n - 1, cache) + fibMemo(n - 2, cache));
}
