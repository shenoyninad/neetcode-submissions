class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let maxProfit = 0;
        let minPrice = prices[0];

        for (let windowEnd = 0; windowEnd < prices.length; windowEnd++) {
            maxProfit = Math.max(maxProfit, prices[windowEnd] - minPrice);
            minPrice = Math.min(minPrice, prices[windowEnd]);
        }

        return maxProfit;
    }
}
