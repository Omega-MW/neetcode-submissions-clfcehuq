class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // Two pointer
        let maxProfit = 0;
        let buyPosition = 0;
        let sellPosition = 1;
        while(sellPosition < prices.length) {
            const profit = prices[sellPosition] - prices[buyPosition];
            if (profit >= 0) {
                maxProfit = profit > maxProfit ? profit : maxProfit;
            }
            else buyPosition = sellPosition;
            sellPosition++;
        }
        return maxProfit;
    }
}
