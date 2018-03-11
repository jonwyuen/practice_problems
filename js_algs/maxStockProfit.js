function maxStockProfit(prices) {
  let maxProfit = -1;
  let buyPrice = 0;
  let sellPrice = 0;

  for (let i = 0; i < prices.length; i++) {
    buyPrice = prices[i];
    sellPrice = prices[i + 1];
  }

  return maxProfit;
}
