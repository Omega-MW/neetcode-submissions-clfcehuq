class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // 1. One pinter at the start, another at the end
        // 2. Calculate the size, move the lower bar
        let i = 0;
        let j = heights.length - 1;
        let amount = 0;
        while (i !== j) {
            const amo = (j - i) * (Math.min(heights[i], heights[j]));
            amount = amo > amount ? amo : amount;
            if (heights[i] < heights[j]) i++;
            else j--;
        }
        return amount;
    }
}
