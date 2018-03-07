function sieveOfEratosthenes(n) {
  // return all prime nums up to n in an array
  let primes = [];

  for (let i = 0; i <= n; i++) {
    if (i < 2) primes.push(false);
    else primes.push(true);
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    for (let j = 2; i * j <= n; j++) {
      primes[i * j] = false;
    }
  }

  let result = [];
  for (let i = 0; i < primes.length; i++) {
    if (primes[i]) result.push(i);
  }
  return result;
}
