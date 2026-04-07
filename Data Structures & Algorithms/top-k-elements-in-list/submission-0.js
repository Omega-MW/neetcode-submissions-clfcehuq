class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // 1. Create a dict maps num -> freq
        // 2. Sort the dict by freq
        // 3. Find the top k freq nums
        const counts = {};
        for (const num of nums) {
            counts[num] = (counts[num] || 0) + 1;
        }

        const freqToCounts = Object.entries(counts).map(([nums, freq]) => [freq, nums]);
        freqToCounts.sort((a, b) => b[0] - a[0]);

        return freqToCounts.slice(0, k).map((pair) => pair[1]);
    }
}
