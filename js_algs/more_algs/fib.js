// Iterative O(n) linear

function fib(n) {
  const result = [0, 1];

  for (let i = 2; i <= n; i++) {
    const a = result[i - 1];
    const b = result[i - 2];
    result.push(a + b);
  }

  return result[n];
}

// Recursive O(2^n) exponential

function fib(n) {
  if (n < 2) return n;

  return fib(n - 1) + fib(n - 2);
}

// Memoization O()

function fib(n, cache = {}) {
  if (cache[n]) return cache[n];
  if (n < 2) return n;
  return (cache[n] = fib(n - 1) + fib(n - 2));
}

function memoize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) return cache[args];
    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function slowFib(n) {
  if (n < 2) return n;

  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);
